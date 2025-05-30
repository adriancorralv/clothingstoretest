import { Page } from "@playwright/test";

// SignUpPage handles interactions on the sign-up form.
export class SignUpPage {
  private page: Page;

  // Initialize the page instance.
  constructor(page: Page) {
    this.page = page;
  }

  // Returns the current value of the email field.
  async isEmailFilledCorrectly() {
    const emailField = this.page.getByTestId("email");
    return await emailField.inputValue();
  }

  // Selects the gender option by checking the corresponding radio button.
  async chooseGender(gender: string) {
    await this.page.getByRole("radio", { name: gender }).check();
  }

  // Fills in the full name field.
  async fillName(name: string) {
    await this.page.getByTestId("name").fill(name);
  }

  // Fills in the email field.
  async fillEmail(email: string) {
    await this.page.getByTestId("email").fill(email);
  }

  // Fills in the password field.
  async fillPassword(password: string) {
    await this.page.getByTestId("password").fill(password);
  }

  // Select the day of birth from a dropdown.
  async selectDayOfBirth(day: string) {
    await this.page.getByTestId("days").selectOption(day);
  }

  // Select the month of birth from a dropdown.
  async selectMonthOfBirth(month: string) {
    await this.page.getByTestId("months").selectOption(month);
  }

  // Select the year of birth from a dropdown.
  async selectYearOfBirth(year: string) {
    await this.page.getByTestId("years").selectOption(year);
  }

  // Check the checkbox for newsletter subscription.
  checkNewsletter() {
    return this.page.getByLabel("Sign up for our newsletter!").check();
  }

  // Check the checkbox to receive special offers.
  checkSpecialOffers() {
    return this.page
      .getByLabel("Receive special offers from our partners!")
      .check();
  }

  // Fill in the first name field.
  async fillFirstName(firstName: string) {
    await this.page.getByTestId("first_name").fill(firstName);
  }

  // Fill in the last name field.
  async fillLastName(lastName: string) {
    await this.page.getByTestId("last_name").fill(lastName);
  }

  // Fill in the company name field.
  async fillCompany(company: string) {
    await this.page.getByTestId("company").fill(company);
  }

  // Fill in the primary address field.
  async fillAddress(address: string) {
    await this.page.getByTestId("address").fill(address);
  }

  // Fill in the secondary address field.
  async fillAddress2(address2: string) {
    await this.page.getByTestId("address2").fill(address2);
  }

  // Select the country from the dropdown list.
  async selectCountry(country: string) {
    await this.page.getByTestId("country").selectOption(country);
  }

  // Fill in the state field.
  async fillState(state: string) {
    await this.page.getByTestId("state").fill(state);
  }

  // Fill in the city field.
  async fillCity(city: string) {
    await this.page.getByTestId("city").fill(city);
  }

  // Fill in the zipcode field.
  async filleZipcode(zipcode: string) {
    await this.page.getByTestId("zipcode").fill(zipcode);
  }

  // Fill in the mobile phone number field.
  async fillMobileNumber(mobileNumber: string) {
    await this.page.getByTestId("mobile_number").fill(mobileNumber);
  }

  // Clicks the "Create Account" button to submit the sign-up form.
  async clickCreateAccount() {
    await this.page.getByTestId("create-account").click();
  }
}
