import { Page } from "@playwright/test";

// This class represents the product page.
export class ProductPage {
  private page: Page;

  // The constructor initializes the Playwright page instance.
  constructor(page: Page) {
    this.page = page;
  }

  // Returns an XPath selector string for a product based on its item number.
  productSelector(itemnumber: number): string {
    return `//div[@class="features_items"]//div[@class="col-sm-4"][${itemnumber}]`;
  }

  // Clicks on the "View Product" link for the given product item.
  async clickOnProduct(itemnumber: number) {
    const product = this.productSelector(itemnumber);
    await this.page
      .locator(product)
      .getByRole("link", { name: "View Product" })
      .click();
  }
}
