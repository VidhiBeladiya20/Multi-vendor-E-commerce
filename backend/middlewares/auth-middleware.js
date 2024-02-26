const jwt = require("jsonwebtoken");
const userModel = require("../models/user-model");
const sellerModel = require("../models/seller-model");

const authMiddleware = async (req,res,next) =>{
    const token = req.header('Authorization');
    if(!token){
        return res.status(400).json({message:"Unauthorized HTTP, Token not provided"});
    }
    
    const jwtToken = token.replace("Bearer", "").trim();
    console.log('token from auth middleware', jwtToken);

    try {

        const isVerified = jwt.verify(jwtToken,"multi-vendor");
        // console.log(isVerified);
        const userData = await userModel.findOne({email : isVerified.email})
        const sellerData = await sellerModel.findOne({email : isVerified.email})
        if(userData){
            console.log(userData);
            req.user = userData;
            req.token = token;
            req.userID = userData._id
        }else{
            console.log(sellerData);
            req.user = sellerData;
            req.token = token;
            req.userID = sellerData._id
        }
        next();
    } catch (error) {
        return res.status(400).json({message:"Unauthorized HTTP, Token not provided"});
    }
    
}

module.exports = authMiddleware;