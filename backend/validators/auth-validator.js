const { z } = require("zod");
// schema
// const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
// const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

const MAX_FILE_SIZE = 1024 * 1024 * 5;
const ACCEPTED_IMAGE_MIME_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const ACCEPTED_IMAGE_TYPES = ["jpeg", "jpg", "png", "webp"];


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
  // image: z
  // .any()
  // .refine((files) => files?.length == 1, "Image is required.")
  // .refine(
  //   (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
  //   ".jpg, .jpeg, .png and .webp files are accepted."
  // )
  // .refine(
  //   (files) => files?.[0]?.size <= MAX_FILE_SIZE,
  //   `Max file size is 5MB.`
  // ),
  image : z.string().refine(value => ACCEPTED_IMAGE_TYPES.includes(value), {
    message: '.jpg, .jpeg, .png, and .webp files are accepted.',
  }),
}).refine(value => value.size <= MAX_FILE_SIZE, {
  message: 'Max file size is 5MB.',
  
  password: z
    .string({ required_error: "Name is Required" })
      .trim()
      .min(3, { message: "Password must be at least of 3 characters" })
      .max(255, { message: "Password must not be more than 255 characters" })   
});

module.exports = { registerSchema, loginSchema };