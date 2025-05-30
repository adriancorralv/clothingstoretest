import { faker } from "@faker-js/faker";
//Generate a random user object with various properties for the signup process and checkout flow in the application.
const birthDate = faker.date.birthdate({ min: 18, max: 80, mode: "age" });
const allowedCountries = [
  "India",
  "United States",
  "Canada",
  "Australia",
  "Israel",
  "New Zealand",
  "Singapore",
];
export const randomUser = {
  name: faker.person.fullName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
  phone: faker.phone.number(),
  address: {
    street: faker.location.street(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    country: faker.helpers.arrayElement(allowedCountries),
  },
  card: {
    number: faker.finance.creditCardNumber(),
    expiryMonth: faker.date.month(),
    expiryYear: faker.date.future().getFullYear().toString(),
    cvv: faker.finance.creditCardCVV(),
  },
  company: faker.company.name(),
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  dateOfBirth: {
    day: birthDate.getDate().toString(),
    month: birthDate.toLocaleString("en-US", { month: "long" }),
    year: birthDate.getFullYear().toString(),
  },
};
