import { Page } from "@playwright/test";

// This class handles actions on the product detail page.
export class ProductDetailPage {
  private page: Page;

  // The constructor initializes the page instance.
  constructor(page: Page) {
    this.page = page;
  }

  // Fills the quantity field with the given number.
  async fillQuantity(quantity: number) {
    await this.page.locator("#quantity").fill(quantity.toString());
  }

  // Clicks the "Add to cart" button.
  async clickAddToCart() {
    await this.page.getByRole("button", { name: "Add to cart" }).click();
  }

  // Clicks the "View Cart" link.
  async clickViewCart() {
    await this.page.getByRole("link", { name: "View Cart" }).click();
  }

  // Retrieves and returns the product name text.
  async getProductName(): Promise<string> {
    const productName = this.page.locator(
      '//div[@class="product-information"]//h2'
    );
    // Wait until the product name element is visible
    await productName.waitFor({ state: "visible" });
    return (await productName.textContent()) || "";
  }
}
