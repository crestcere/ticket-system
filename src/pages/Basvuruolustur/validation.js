import { object, string } from "yup";

let validation = object({
  title: string()
    .required("Bu alan zorunludur.")
    .min(3, "En az 3 karakter olmalıdır."),
  email: string().email().required("Bu alan zorunludur.").min(4),
  description: string()
    .required("Bu alan zorunludur.")
    .min(10, "En az 10 karakter olmalıdır."),
});
export default validation;
