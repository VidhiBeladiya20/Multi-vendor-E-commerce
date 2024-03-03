const requestModel = require("../models/request-model");
const userModel = require("../models/user-model");
const otpModel = require("../models/otp-model");
const bcrypt = require("bcrypt");
const fs = require('fs');
const path = require('path');
const nodemailer = require('nodemailer');

const request = async (req, res) => {
    try {
        const { username, email, phone, password, title, category, turnover, years, address, city, state, country, pincode, desc } = req.body;
        // console.log(req.body);

        const image = req.file.filename;
        const uploadedFile = req.file;
        if (!uploadedFile) {
            return res.status(400).json({ msg: 'No file uploaded' });
            return;
        }
        const originalExtension = path.extname(uploadedFile.originalname);
        if (originalExtension == ".jpg" || originalExtension == ".jpeg" || originalExtension == ".png") {
            const newFileName = `${Date.now()}${originalExtension}`;
            req.file.filename = newFileName;
            const newFilePath = path.join(__dirname, '../sellerLogo', newFileName)
            fs.renameSync(uploadedFile.path, newFilePath);

            const requestExist = await requestModel.findOne({ email: email });
            const userExist = await userModel.findOne({ email: email });
            if (requestExist && requestExist.status == "Pending") {
                res.status(400).json({ msg: "This email id request in pending stage" });
                return;
            }
            else if (requestExist && requestExist.status == "Approved") {
                res.status(400).json({ msg: "This email id is already exist as a seller" });
                return;
            } 
            else if (userExist) {
                res.status(400).json({ msg: "This email id is already exist as a user" });
                return;
            }
            else {
                // generate OTP
                var otp = Math.random();
                otp = otp * 1000000;
                otp = parseInt(otp);
                console.log(otp);

                // hash the pswd  
                const user = await requestModel.create({
                    username: username,
                    email: email,
                    phone: phone,
                    password: password,
                    title: title,
                    category: category,
                    turnover: turnover,
                    years: years,
                    address: address,
                    city: city,
                    state: state,
                    country: country,
                    pincode: pincode,
                    desc: desc,
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
                            res.status(400).json({ msg: "error from nodemailer in register API", });
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
                }
                else {
                    res.status(400).json({ message: "registration not done", });
                    return;
                }
            }
        }
        else {
            return res.status(400).json({ message: 'File type must be .jpg,.jpeg or .png ' });
        }
    } catch (error) {
        return res.status(400).json({ message: `error from request API : ${error}` });
    }
}

const otp = async (req,res) => {
    try {
        const { email, sentOtp, userOtp } = req.body;
        // console.log(req.body);
        const checkEmail = await requestModel.findOne({email});
        const checkOtp = await otpModel.findOne({email});
        if(checkOtp){
            if(sentOtp == userOtp){
                await requestModel.updateOne({email:email},{$set:{isActive:"true"}});
                return res.status(200).json({ msg:"request sent" });
            }
            else{
                return res.status(400),json({message:"OTP doesn't match...try again"});
            }
        }
        else{
            await requestModel.deleteOne({email});
            return res.status(400).json({message:"OTP Expired"});
        }       
    } catch (error) {
        return res.status(400).json({ msg: 'Not Found' });
    }
}

const getRequest = async (req, res) => {
    try {
        const data = await requestModel.find();
        if (!data) {
            return res.status(200).json({ message: `error from getRequest API : No data found` });
        }
        return res.status(200).json({ message: data });
    } catch (error) {
        return res.status(400).json({ message: `error from getRequest API : ${error}` });
    }
}


module.exports = { request, getRequest, otp };
