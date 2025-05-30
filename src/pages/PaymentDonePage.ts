import { Page } from "@playwright/test";

// PaymentDonePage class handles interactions on the final payment confirmation page.
export class PaymentDonePage {
  private page: Page;

  // Constructor initializes the page instance.
  constructor(page: Page) {
    this.page = page;
  }

  // Retrieves the confirmation message text from the element with test ID "order-placed".
  async getPaymentDoneMessage() {
    return await this.page.getByTestId("order-placed").textContent();
  }

  // Clicks the "Continue" button to move forward after payment is complete.
  async clickContinue() {
    await this.page.getByTestId("continue-button").click();
  }
}
