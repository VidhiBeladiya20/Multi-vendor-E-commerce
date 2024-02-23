const mongoose = require("mongoose");
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
    brand:{
        type:String,
        require: true
    },
    style:{
        type:String,
        require: true
    },
    price:{
        type:Number,
        require: true
    },
    quantity:{
        type:Number,
        require: true
    },
    size:{
        type:String,
        require: true
    },
    colour:{
        type:String,
        require: true
    },
    sellerId:{
        type:String,
        default : "id"
    },
    date:{
        type:Date,
        default: () => Date.now()
    }
});



// generate token
productSchema.methods.generateToken = async function() {
    try {
        return jwt.sign(
        {
            productId : this._id.toString(),
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

const productModel = new mongoose.model("Product",productSchema);

module.exports = productModel;