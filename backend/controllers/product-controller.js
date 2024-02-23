const productModel = require("../models/product-model");

const addProduct = async (req,res,next) =>{
    try {
        const { name,category,brand,style,price,quantity,size,colour } = req.body;
        const product = await productModel.create({ name,category,brand,style,price,quantity,size,colour });
        res.status(200).json({msg : "Product Add successful",
            token : await product.generateToken(),
            productId:product._id.toString()
        });
    } 
    catch (error) {
        // res.status(400).send({msg:"register page not found"});
        next(error);
    }
}


module.exports = { addProduct};