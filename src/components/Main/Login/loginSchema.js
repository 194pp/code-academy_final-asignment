import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string()
    .trim()
    .min(5, 'Vartotojo vardas turi būti bent 5 simbolių ilgio')
    .required("Būtinas laukas"),
  password: Yup.string()
    .trim()
    .min(8, 'Slaptažodis turi būti bent 8 simbolių ilgio')
    .required("Būtinas laukas"),
});
