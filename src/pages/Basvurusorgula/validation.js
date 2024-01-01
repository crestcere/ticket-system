import { object, string, number, date, InferType } from "yup";

let validation = object({
  sorguid: string()
    .required("Bu alan zorunludur.")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(1, "Must be exactly 1 digits")
    .max(2, "Must be exactly 4 digits"),
});
export default validation;
