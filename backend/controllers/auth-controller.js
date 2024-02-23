const userModel = require("../models/user-model");
const sellerModel = require("../models/seller-model");
const bcrypt = require("bcrypt");
const multer = require("multer");

const home = async (req, res) => {
    try {
        res.status(200).send("home page")
    } catch (error) {
        res.status(400).send({ msg: "home page not found" });
    }
}

const register = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        const image = req.file.filename;
        const userExist = await userModel.findOne({ email: email });

        if (userExist) {
            res.status(200).json({ msg: "email already exist" });
        }

        // hash the pswd      
        const user = await userModel.create({ username, email, phone, image, password });
        res.status(200).json({
            msg: "registration successful",
            token: await user.generateToken(),
            userId: user._id.toString()
        });
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



// const login = async (req, res) => {
//     try {
//         const { email, password, username } = req.body;
//         const checkuserEmail = await userModel.findOne({ $or: [{ email }, { username }] });
//         if (!checkuserEmail) {
//             res.status(400).send({ msg: "Invalid user Credentials" });
//         }
//             const checkPswd = await checkuserEmail.comparePswd(password);
//             if (checkPswd) {
//                 res.status(200).send({
//                     msg: "Login successfully",
//                     token: await checkuserEmail.generateToken(),
//                     userId: checkuserEmail._id.toString()
//                 })
//             }
//             else {
//                 res.status(400).send({ msg: "Invalid all Credentials" });
//             }
//     }
//     catch (error) {
//         res.status(400).send({ msg: "register page not found" });
//     }
// }

module.exports = { home, register, login };