import { Page } from "@playwright/test";

// PaymentPage class handles actions on the payment page.
export class PaymentPage {
  private page: Page;

  // Constructor initializes the page instance.
  constructor(page: Page) {
    this.page = page;
  }

  // Fills in the name on card field.
  async fillNameOnCard(name: string) {
    await this.page.getByTestId("name-on-card").fill(name);
  }

  // Fills in the card number field.
  async fillCardNumber(cardNumber: string) {
    await this.page.getByTestId("card-number").fill(cardNumber);
  }

  // Fills in the expiry month field.
  async fillExpiryMonth(expiryMonth: string) {
    await this.page.getByTestId("expiry-month").fill(expiryMonth);
  }

  // Fills in the expiry year field.
  async fillExpiryYear(expiryYear: string) {
    await this.page.getByTestId("expiry-year").fill(expiryYear);
  }

  // Fills in the CVV field.
  async fillCvv(cvv: string) {
    await this.page.getByTestId("cvc").fill(cvv);
  }

  // Clicks the "Pay Now" button to submit the payment.
  async clickPayNow() {
    await this.page.getByTestId("pay-button").click();
  }
}
