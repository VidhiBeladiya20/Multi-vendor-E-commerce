const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const requestSchema=new mongoose.Schema({
    username:{
        type:String,
        require: true
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
    title:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require: true
    },
    turnover:{
        type:Number,
        require: true
    },
    years:{
        type:Number,
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
    image:{
        type:String,
        require:true
    },
    method:{
        type:String,
        require: true
    },
    desc:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"seller"
    },
    status:{
        type:String,
        default:"Decline"
    }
});

requestSchema.pre("save",async function(next){
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
requestSchema.methods.generateToken = async function() {
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
requestSchema.methods.comparePswd= async function(password){
    return bcrypt.compare(password,this.password);
}

const requestModel = new mongoose.model("Seller",requestSchema);

module.exports = requestModel;