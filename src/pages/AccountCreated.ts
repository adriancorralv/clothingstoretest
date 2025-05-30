import { Page } from "@playwright/test";

// This class represents the "Account Created" page in the application
export class AccountCreatedPage {
  private page: Page;

  // Initialize the page with the Playwright page instance
  constructor(page: Page) {
    this.page = page;
  }

  // Method to click the "Continue" button on the page
  async clickContinue() {
    await this.page.getByTestId("continue-button").click();
  }

  // Method to verify that the account creation confirmation is visible
  async verifyAccountCreated() {
    return await this.page.getByTestId("account-created").isVisible();
  }
}
