const sellerModel = require("../models/seller-model");
const bcrypt = require("bcrypt");

const home = async (req,res) =>{
    try {
        res.status(200).send("home page")
    } catch (error) {
        res.status(400).send({msg:"home page not found"});
    }
}

const register = async (req,res,next) =>{
    try {
        const { name,category,turnover,method,address,city,state,country,pincode,title,email,phone,password } = req.body;
        const sellerExist = await sellerModel.findOne({ email : email });

        if(sellerExist){
            res.status(200).json({msg:"email already exist"});
        }

        // hash the pswd      
        const seller = await sellerModel.create({ name,category,turnover,method,address,city,state,country,pincode,title,email,phone,password });
        res.status(200).json({msg : "registration successful",
            token : await seller.generateToken(),
            sellerId:seller._id.toString()
        });
    } 
    catch (error) {
        // res.status(400).send({msg:"register page not found"});
        next(error);
    }
}

module.exports = { home , register};