import { Page } from "@playwright/test";

// ViewCartPage manages the actions on the shopping cart page.
export class ViewCartPage {
  private page: Page;

  // Initialize the page instance.
  constructor(page: Page) {
    this.page = page;
  }

  // Clicks on the "Proceed To Checkout" button.
  async clickProceedToCheckout() {
    await this.page.getByText("Proceed To Checkout").click();
  }

  // Clicks on the "Register / Login" link.
  async clickRegisterLogin() {
    await this.page.getByRole("link", { name: "Register / Login" }).click();
  }

  // Retrieves the text of the first product's name in the cart.
  async getTextFirstProductInCart() {
    const firstProduct = this.page.locator(
      '//td[@class="cart_description"]//h4//a[1]'
    );
    // Wait until the product name is visible
    await firstProduct.waitFor({ state: "visible" });
    return firstProduct.textContent();
  }

  // Retrieves the quantity of the first product in the cart.
  async getQuantityOfFirstProductInCart() {
    const firstProductQuantity = this.page.locator(
      '//td[@class="cart_quantity"]//button[1]'
    );
    // Wait until the quantity element is visible
    await firstProductQuantity.waitFor({ state: "visible" });
    return firstProductQuantity.textContent();
  }
}
