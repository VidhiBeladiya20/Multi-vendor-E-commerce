const { z } = require("zod");
// const ACCEPTED_IMAGE_MIME_TYPES = [
//   "image/jpeg",
//   "image/jpg",
//   "image/png",
//   "image/webp",
// ];
// const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];

const loginSchema = z.object({
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  password: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Password must be at least of 3 characters" })
    .max(255, { message: "Password must not be more than 255 characters" })
})

const registerSchema = z.object({
  username: z
    .string({ required_error: "Name is Required" })
    .trim()
    .max(255, { message: "Name must not be more than 255 characters" }),
  email: z
    .string({ required_error: "Email is Required" })
    .trim()
    .email({ message: "Invalid Email" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  phone: z
    .string({ required_error: "Phone is Required" })
    .trim()
    .min(10, { message: "Phone Number must not be more than 10 digits" })
    .max(10, { message: "Phone Number must not be more than 10 digits" }),
  password: z
    .string({ required_error: "Name is Required" })
    .trim()
    .min(3, { message: "Password must be at least of 3 characters" })
    .max(255, { message: "Password must not be more than 255 characters" }),
  // image: z
  //   .any()
  //   .refine(
  //     (files) => ACCEPTED_IMAGE_MIME_TYPES.includes(files?.[0]?.type),
  //       "Only .jpg, .jpeg, .png and .webp formats are supported."
  //     ),
});

module.exports = { registerSchema, loginSchema };
