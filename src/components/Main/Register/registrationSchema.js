import * as Yup from "yup";

export const registrationSchema = Yup.object({
  username: Yup.string()
    .trim()
    .min(5, 'Vartotojo vardas turi būti bent 5 simbolių ilgio')
    .required("Būtinas laukas"),
  password: Yup.string()
    .trim()
    .min(8, 'Slaptažodis turi būti bent 8 simbolių ilgio')
    .required("Būtinas laukas"),
  repeatPassword: Yup.string()
    .trim()
    .oneOf([Yup.ref('password'), null], 'Slaptažodžiai turi sutapti')
    .required("Būtinas laukas"),
  age: Yup.number()
    .min(12, 'Mažiausias leidžiamas amžius: 12')
    .max(130, 'Didžiausias leidžiamas amžius: 130')
    .required("Būtinas laukas"),
  email: Yup.string().email("Įveskite tinkamą el. paštą").required("Būtinas laukas"),
});
