const {z} = require("zod");
// schema
const registerSchema = z.object({
    username: z
    .string({required_error:"Name is Required"})
    .trim()
    .max(255,{message:"Name must not be more than 255 characters"}),
    email: z
    .string({required_error:"Email is Required"})
    .trim()
    .email({message:"Invalid Email"})
    .max(255,{message:"Email must not be more than 255 characters"}),
    phone: z
    .string({required_error:"Phone is Required"})
    .trim()
    .min(10,{message:"Phone Number must not be more than 10 digits"})
    .max(10,{message:"Phone Number must not be more than 10 digits"}),
    password: z
    .string({required_error:"Name is Required"})
    .trim()
    .min(3,{message:"Password must be at least of 3 characters"})
    .max(255,{message:"Password must not be more than 255 characters"})   
});

module.exports=registerSchema;