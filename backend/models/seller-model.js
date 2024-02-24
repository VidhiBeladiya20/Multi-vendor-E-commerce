const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const sellerSchema=new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    category:{
        type:String,
        require: true
    },
    turnover:{
        type:Number,
        require: true
    },
    method:{
        type:String,
        require: true
    },
    address:{
        type:String,
        require: true
    },
    city:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    },
    pincode:{
        type:Number,
        require:true
    },
    title:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"seller"
    },
});

sellerSchema.pre("save",async function(next){
    const seller = this;

    if(!seller.isModified("password")){
        next();
    }
    try{
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(seller.password,saltRound);
        seller.password = hash_password;
    }
    catch(error){
        next(error);
    }
})

// generate token
sellerSchema.methods.generateToken = async function() {
    try {
        return jwt.sign(
        {
            sellerId : this._id.toString(),
            email : this.email,
            role : this.role,
        },
        "multi-vendor",
        {
            expiresIn : "30d",
        }
    );
    } catch (error) {
        console.log(error);
    }
}
sellerSchema.methods.comparePswd= async function(password){
    return bcrypt.compare(password,this.password);
}

const sellerModel = new mongoose.model("Seller",sellerSchema);

module.exports = sellerModel;