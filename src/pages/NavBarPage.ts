import { Page } from "@playwright/test";

// NavBarPage class encapsulates interactions with the site's navigation bar.
export class NavBarPage {
  private page: Page;

  // Initialize with the Playwright page instance.
  constructor(page: Page) {
    this.page = page;
  }

  // Clicks a navigation link matching the given option name.
  async clickElementinNav(option: string) {
    await this.page.getByRole("link", { name: option }).click();
  }

  // Verifies a logged-in user by waiting for their link to be visible.
  async verifyLoggedInUser(userName: string) {
    const userElement = this.page.getByRole("link", { name: userName });
    await userElement.waitFor({ state: "visible" });
    return userElement;
  }
}
