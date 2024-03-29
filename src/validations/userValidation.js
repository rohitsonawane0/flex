import * as Yup from "yup";

export const userSignUpSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z_ ]*$/, "No special characters allowed")
    .min(3, "Name must be between 3 to 16 characters")
    .max(16, "Name must be between 3 to 16 characters"),
  phone: Yup.string().min(10, "Must be a number").max(10, "Must be a number"),

  email: Yup.string()
    .required("Email is required")
    .email("Must be a valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must have 6 length")
    .max(16, "Password cannot  have 16 more than length"),
});

export const userSignInSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Must be a valid email"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must have 6 length")
    .max(16, "Password cannot  have 16 more than length"),
});
