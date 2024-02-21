const userModel = require("../models/user-model");
const bcrypt = require("bcrypt");
const multer = require("multer");

const home = async (req,res) =>{
    try {
        res.status(200).send("home page")
    } catch (error) {
        res.status(400).send({msg:"home page not found"});
    }
}

const register = async (req,res) =>{
    try {
        const { username,email,phone,password } = req.body;
        const image = req.file.filename;
        const userExist = await userModel.findOne({ email : email });

        if(userExist){
            res.status(200).json({msg:"email already exist"});
        }

        // hash the pswd      
        const user = await userModel.create({ username, email,phone,image,password });
        res.status(200).json({msg : "registration successful",
            token : await user.generateToken(),
            userId:user._id.toString()
        });
    } 
    catch (error) {
        // res.status(400).send({msg:"register page not found"});
        next(error);
    }
}
const login = async (req,res) =>{
    try {
        const {email,password,username}=req.body;
        const checkEmail = await userModel.findOne({$or:[{email},{username}]});
        if (!checkEmail) {
            res.status(400).send({msg:"Invalid Credentials"});
        }
        const checkPswd = await checkEmail.comparePswd(password);
        if(checkPswd){
            res.status(200).send({msg:"Login successfully",
            token: await checkEmail.generateToken(),
            userId: checkEmail._id.toString()
        })}
        else{
            res.status(400).send({msg:"Invalid Credentials"});  
        }

    } 
    catch (error) {
        res.status(400).send({msg:"register page not found"});
    }
}

module.exports = { home , register,login};