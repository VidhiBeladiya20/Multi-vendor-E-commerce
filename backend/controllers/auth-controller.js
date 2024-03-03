const userModel = require("../models/user-model");
const sellerModel = require("../models/seller-model");
const otpModel = require("../models/otp-model");
const requestModel = require("../models/request-model");
const bcrypt = require("bcrypt");
const multer = require("multer");
const fs = require('fs');
const path = require('path');
const jwt = require("jsonwebtoken");
const nodemailer = require('nodemailer');

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
            return res.status(400).json({ message: 'No file uploaded' });

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
            const requestExist = await requestModel.findOne({ email: email });
            if (userExist) {
                res.status(400).json({ message: "email already exist" });
                return;
            }
            else if (requestExist && requestExist.status == "Pending") {
                res.status(400).json({ msg: "This email id request in pending stage" });
                return;
            }
            else if (requestExist && requestExist.status == "Approved") {
                res.status(400).json({ msg: "This email id is already exist as a seller" });
                return;
            } 
            else {
                // generate OTP
                var otp = Math.random();
                otp = otp * 1000000;
                otp = parseInt(otp);
                console.log(otp);

                // hash the pswd     
                const user = await userModel.create({
                    username: username,
                    email: email,
                    phone: phone,
                    password: password,
                    image: req.file.filename
                });
                const otpData = await otpModel.create({
                    email: email,
                    otp: otp
                });
                if (user && otpData) {
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: 'vishubalar29@gmail.com',
                            pass: 'ygan kqli khki dyze'
                        }
                    });

                    var mailOptions = {
                        from: 'vishubalar29@gmail.com',
                        to: email,
                        subject: `Wellcome ${username}..`,
                        text: `Verify OTP ${otp} `
                    };

                    transporter.sendMail(mailOptions, function (error, info) {
                        if (error) {
                            res.status(400).json({ message: "error from nodemailer in register API", });
                            return;
                        }
                    })
                    res.status(200).json({
                        msg: "registration successful",
                        token: await user.generateToken(),
                        userId: user._id.toString(),
                        email: user.email.toString(),
                        otp: otp
                    });
                    return;
                } else {
                    res.status(400).json({ msg: "registration not done", });
                    return;
                }
            }
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

const otp = async (req, res) => {
    try {
        const { email, sentOtp, userOtp } = req.body;
        // console.log(req.body);
        const checkEmail = await userModel.findOne({ email });
        const checkOtp = await otpModel.findOne({ email });
        if (checkOtp) {
            if (sentOtp == userOtp) {
                await userModel.updateOne({ email: email }, { $set: { isActive: "true" } });
                return res.status(200).json({ msg: "user active" });
            }
            else {
                return res.status(400), json({ message: "OTP doesn't match...try again" });
            }
        }
        else {
            await userModel.deleteOne({ email });
            return res.status(400).json({ message: "OTP Expired" });
        }
    } catch (error) {
        return res.status(400).json({ msg: 'Not Found' });
    }
}


const login = async (req, res) => {
    try {
        const { email, password, username, name } = req.body;
        const checkuserEmail = await userModel.findOne({ $or: [{ email }, { username }] });
        const checksellerEmail = await sellerModel.findOne({ $or: [{ email }, { name }] });
        if (!checkuserEmail && !checksellerEmail) {
            res.status(400).send({ message: "Invalid user Credentials" });
        }
        else if (checkuserEmail && checkuserEmail.isActive == "true") {
            const checkPswd = await checkuserEmail.comparePswd(password);
            if (checkPswd) {
                res.status(200).send({
                    msg: "Login successfully",
                    token: await checkuserEmail.generateToken(),
                    userId: checkuserEmail._id.toString()
                })
            }
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
            res.status(400).send({ message: "Invalid all Credentials" });
        }

    }
    catch (error) {
        res.status(400).send({ message: "register page not found" });
    }
}



// to send current user data
const user = async (req, res) => {
    try {
        const userData = req.user;
        console.log(userData);
        return res.status(200).json({ userData });
    } catch (error) {
        console.log(`error from the user route : ${error}`);
    }
}

// Forgot password
const forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;
        const checkEmail = await userModel.findOne({ email })
        if (!checkEmail) {
            res.status(400).send({ msg: "Email is not exist" })
            return;
        }
        const token = jwt.sign({ id: checkEmail._id }, "jwt_secret_key", { expiresIn: "1d" })
        var transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'vishubalar29@gmail.com',
                pass: 'ygan kqli khki dyze'
            }
        });

        var mailOptions = {
            from: 'vishubalar29@gmail.com',
            to: email,
            subject: 'Reset Password Link',
            text: `http://localhost:5173/reset-password/${checkEmail._id}/${token}`
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                return res.send({ Status: "Success" })
            }
        })
    } catch (error) {
        console.log(`error from forgot-password API :  ${error}`);
    }
}

// reset password
const resetPassword = async (req, res) => {
    const { id, token } = req.params
    const { password } = req.body

    jwt.verify(token, "jwt_secret_key", (err, decoded) => {
        if (err) {
            return res.json({ message: `token error from reser-password API : ${err}` })
        } else {
            bcrypt.hash(password, 10)
                .then(hash => {
                    userModel.findByIdAndUpdate({ _id: id }, { password: hash })
                        .then(u => res.send({ message: "Password Updated" }))
                        .catch(err => res.send({ message: `error from reser-password API : ${err}` }))
                })
                .catch(err => res.send({ Status: err }))
        }
    })
}


module.exports = { home, register, login, user, forgotPassword, resetPassword, otp };
