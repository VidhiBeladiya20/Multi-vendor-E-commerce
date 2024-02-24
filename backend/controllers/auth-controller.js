const userModel = require("../models/user-model");
const sellerModel = require("../models/seller-model");
const bcrypt = require("bcrypt");
const multer = require("multer");
const fs = require('fs');
const path = require('path');

const home = async (req, res) => {
    try {
        res.status(200).send("home page")
    } catch (error) {
        res.status(400).send({ msg: "home page not found" });
    }
}

const register = async (req, res, next) => {
    // console.log(req.body);
    try {
        const { username, email, phone, password } = req.body;
        const image = req.file.filename;

        const uploadedFile = req.file;

        // Check if a file was uploaded
        if (!uploadedFile) {
            return res.status(400).json({ msg: 'No file uploaded' });
            return;
        }

        // Get the original file extension (if available)
        const originalExtension = path.extname(uploadedFile.originalname);

        // checks file must be .jpg, .jpeg or .png
        if (originalExtension == ".jpg" || originalExtension == ".jpeg" || originalExtension == ".png") {
            // Generate a new filename with a timestamp and original extension
            const newFileName = `${Date.now()}${originalExtension}`;

            // Set the new filename in the request object
            req.file.filename = newFileName;

            // Move the file to the 'uploads' directory with the new filename
            const newFilePath = path.join(__dirname, '../uploads', newFileName)
            fs.renameSync(uploadedFile.path, newFilePath);

            // Your remaining controller logic here, using req.file.filename as the filename
            const userExist = await userModel.findOne({ email: email });
            if (userExist) {
                res.status(400).json({ msg: "email already exist" });
                return;
            }
            // hash the pswd      
            const user = await userModel.create({
                username: username,
                email: email,
                phone: phone,
                password: password,
                image: req.file.filename
            });
            res.status(200).json({
                msg: "registration successful",
                token: await user.generateToken(),
                userId: user._id.toString()
            });
            return;
        }
        else {
            return res.status(400).json({ msg: 'File type must be .jpg,.jpeg or .png ' });
            return;
        }
    }
    catch (error) {
        // res.status(400).send({msg:"register page not found"});
        next(error);
    }
}


const login = async (req, res) => {
    try {
        const { email, password, username, name } = req.body;
        const checkuserEmail = await userModel.findOne({ $or: [{ email }, { username }] });
        const checksellerEmail = await sellerModel.findOne({ $or: [{ email }, { name }] });
        if (!checkuserEmail) {
            res.status(400).send({ msg: "Invalid user Credentials" });
        }
        else if (checkuserEmail) {
            const checkPswd = await checkuserEmail.comparePswd(password);
            if (checkPswd) {
                res.status(200).send({
                    msg: "Login successfully",
                    token: await checkuserEmail.generateToken(),
                    userId: checkuserEmail._id.toString()
                })
            }
        }
        else if (!checksellerEmail) {
            res.status(400).send({ msg: "Invalid seller Credentials" });
        }
        else if (checksellerEmail) {
            const checkPswd = await checksellerEmail.comparePswd(password);
            if (checkPswd) {
                res.status(200).send({
                    msg: "Login successfully",
                    token: await checksellerEmail.generateToken(),
                    sellerId: checksellerEmail._id.toString()
                })
            }
        }
        else {
            res.status(400).send({ msg: "Invalid all Credentials" });
        }

    }
    catch (error) {
        res.status(400).send({ msg: "register page not found" });
    }
}

module.exports = { home, register, login };
