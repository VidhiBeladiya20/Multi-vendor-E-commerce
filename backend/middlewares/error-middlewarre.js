const errorMiddleware=(err,req,res,next)=>{
    const status = err.status || 400;
    const message = err.message || "Backend error";
    const extraDetails = err.extraDetails || "Error from Backend";

    const errors={
            status,
            message,
            extraDetails
        
    }
    return res.status(status).json(errors);
}

module.exports=errorMiddleware
