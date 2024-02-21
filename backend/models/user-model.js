const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        require: true
    },
    email:{
        type:String,
        require: true
    },
    phone:{
        type:String,
        require: true
    },
    password:{
        type:String,
        require: true
    },
    // image:{
    //     data: Buffer,
    //     contentType: String
    // },
    image:{
        type:String,
        require:true
    },
    role:{
        type:String,
        default:"user"
    },
});

userSchema.pre("save",async function(next){
    const user = this;

    if(!user.isModified("password")){
        next();
    }
    try{
        const saltRound = await bcrypt.genSalt(10);
        const hash_password = await bcrypt.hash(user.password,saltRound);
        user.password = hash_password;
    }
    catch(error){
        next(error);
    }
})

// generate token
userSchema.methods.generateToken = async function() {
    try {
        return jwt.sign(
        {
            userId : this._id.toString(),
            email : this.email,
            isAdmin : this.isAdmin,
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
userSchema.methods.comparePswd= async function(password){
    return bcrypt.compare(password,this.password);
}

const userModel = new mongoose.model("User",userSchema);

module.exports = userModel;