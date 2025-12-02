import { Page, Locator, expect } from '@playwright/test';

export class CustomizeQuotePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async verifyPremiumBreakdown(hsaPremium: string, totalBeforeDiscounts: string) {
    // Verify H&S Premium in the module breakdown section
    await expect(this.page.getByText(hsaPremium)).toBeVisible();
    
    // Verify total before discounts - use nth(1) to get the second occurrence which is in the summary section
    await expect(this.page.getByText(totalBeforeDiscounts).nth(1)).toBeVisible();
  }

  async verifyModuleIncluded(moduleName: string) {
    await expect(this.page.getByText(moduleName)).toBeVisible();
  }

  async verifyDentalOpticalIncluded() {
    await this.verifyModuleIncluded('Dental and Optical');
  }
}