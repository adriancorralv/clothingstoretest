import { Page } from "@playwright/test";

// LoginPage class handles actions on the login section of the app.
export class LoginPage {
  private page: Page;

  // Constructor initializes the page instance needed for actions.
  constructor(page: Page) {
    this.page = page;
  }

  // Fills in the email field using its test ID.
  async fillEmail(email: string) {
    await this.page.getByTestId("signup-email").fill(email);
  }

  // Fills in the name field using its test ID.
  async fillName(name: string) {
    await this.page.getByTestId("signup-name").fill(name);
  }

  // Clicks the sign-up button.
  async clickSignUp() {
    await this.page.getByTestId("signup-button").click();
  }

  // Checks if the sign-up button is visible on the page.
  async isSignUpButtonVisible() {
    return await this.page.getByTestId("signup-button").isVisible();
  }
}
