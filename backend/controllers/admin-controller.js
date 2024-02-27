const requestModel = require("../models/request-model");
const userModel = require("../models/user-model");
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
            if (requestExist) {
                res.status(400).json({ msg: "email already exist" });
                return;
            }
            else if (userExist) {
                res.status(400).json({ msg: "This email id is already exist as a user" });
                return;
            }
            else {
                // hash the pswd  
                const user = await requestModel.create({
                    username: username,
                    email: email,
                    phone: phone,
                    password: password,
                    title: title,
                    catrgoty: category,
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
                if (user) {
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
                        text: `Wellcome ${username}..`
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
                        userId: user._id.toString()
                    });
                    return;
                }
                else {
                    res.status(400).json({ msg: "registration not done", });
                    return;
                }
            }
        }
        else {
            return res.status(400).json({ msg: 'File type must be .jpg,.jpeg or .png ' });
        }
    } catch (error) {
        return res.status(400).json({ msg: `error from request API : ${error}` });
    }
}

module.exports = { request };