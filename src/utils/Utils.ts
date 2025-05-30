import { Page } from "@playwright/test";

export class UtilsClass {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  //Get random integer between min and max
  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  //verify if the modal is visible
  async isModalVisible(): Promise<boolean> {
    const modal = this.page.locator("div.modal-content");
    return await modal.isVisible();
  }
}
