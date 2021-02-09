import { string, boolean, number, date, array } from "yup";

export const username = string("Enter your username").required("Username is required");
export const title = string().required("The full name is required");
export const content = string().required("The full name is required");

export const email = string("Enter your email")
  .email("Enter a valid email")
  .required("Email is required");

export const password = string("Enter your password")
  .min(8, "Password should be minimum of 8 characters length")
  .required("Password is required");