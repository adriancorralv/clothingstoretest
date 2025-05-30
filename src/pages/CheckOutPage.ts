import { Page } from "@playwright/test";

// Represents the checkout page for order review and placement
export class CheckOutPage {
  private page: Page;

  // Set up the page instance
  constructor(page: Page) {
    this.page = page;
  }

  // Fill in the comments field with the provided text
  async fillComments(comments: string) {
    await this.page.locator('[name="message"]').fill(comments);
  }

  // Click the "Place Order" link to move forward with the order
  async clickPlaceOrder() {
    await this.page.getByRole("link", { name: "Place Order" }).click();
  }

  // Verify the country in the delivery address and return its text
  async verifyCountryDeliveryAddress() {
    const deliveryAddressCountry = await this.page.locator(
      '//ul[@id="address_delivery"]//li[@class="address_country_name"]'
    );
    // Wait until the country element is visible
    await deliveryAddressCountry.waitFor({ state: "visible" });
    return deliveryAddressCountry.textContent();
  }

  // Verify the phone number in the delivery address and return its text
  async verifyPhoneDeliveryAddress() {
    const deliveryAddressPhone = await this.page.locator(
      '//ul[@id="address_delivery"]//li[@class="address_phone"]'
    );
    // Wait until the phone element is visible
    await deliveryAddressPhone.waitFor({ state: "visible" });
    return deliveryAddressPhone.textContent();
  }

  // Verify the country in the billing (invoice) address and return its text
  async verifyCountryBillingAddress() {
    const deliveryAddressCountry = await this.page.locator(
      '//ul[@id="address_invoice"]//li[@class="address_country_name"]'
    );
    // Wait until the billing country element is visible
    await deliveryAddressCountry.waitFor({ state: "visible" });
    return deliveryAddressCountry.textContent();
  }

  // Verify the phone number in the billing (invoice) address and return its text
  async verifyPhoneBillingAddress() {
    const deliveryAddressPhone = await this.page.locator(
      '//ul[@id="address_invoice"]//li[@class="address_phone"]'
    );
    // Wait until the billing phone element is visible
    await deliveryAddressPhone.waitFor({ state: "visible" });
    return deliveryAddressPhone.textContent();
  }
}
