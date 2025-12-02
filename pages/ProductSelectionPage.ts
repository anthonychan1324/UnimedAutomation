import { Page, Locator, expect } from '@playwright/test';

export class ProductSelectionPage {
  readonly page: Page;
  readonly smartCarePlusCheckbox: Locator;
  readonly smartCareCheckbox: Locator;
  readonly smartCareExcessDropdown: Locator;
  readonly nextButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.smartCarePlusCheckbox = page.getByRole('checkbox').first();
    this.smartCareCheckbox = page.getByRole('checkbox').nth(5);
    this.smartCareExcessDropdown = page.locator('#b7-b1-Dropdown1-container').getByRole('combobox');
    this.nextButton = page.getByRole('button', { name: 'Next' });
  }

  async deselectSmartCarePlus() {
    await this.smartCarePlusCheckbox.click();
  }

  async selectSmartCare() {
    await this.smartCareCheckbox.click();
  }

  async setExcess(excessAmount: string) {
    await this.smartCareExcessDropdown.selectOption([excessAmount]);
  }

  async configureModules(includeSpecialist: boolean = false, includeDentalOptical: boolean = true) {
    // Find the SmartCare section and configure its modules
    const smartCareSection = this.page.locator('div').filter({ hasText: /^SmartCare$/ }).first();
    
    // Configure Specialist module for SmartCare
    const specialistCheckbox = smartCareSection.locator('..').getByText('Specialist module').locator('../..').getByRole('checkbox');
    const isSpecialistChecked = await specialistCheckbox.isChecked();
    
    if (includeSpecialist && !isSpecialistChecked) {
      await specialistCheckbox.click();
    } else if (!includeSpecialist && isSpecialistChecked) {
      await specialistCheckbox.click();
    }
    
    // Configure Dental and Optical module for SmartCare
    const dentalOpticalCheckbox = smartCareSection.locator('..').getByText('Dental and Optical').locator('../..').getByRole('checkbox');
    const isDentalOpticalChecked = await dentalOpticalCheckbox.isChecked();
    
    if (includeDentalOptical && !isDentalOpticalChecked) {
      await dentalOpticalCheckbox.click();
    } else if (!includeDentalOptical && isDentalOpticalChecked) {
      await dentalOpticalCheckbox.click();
    }
  }

  async selectSmartCarePlus() {
    await this.smartCarePlusCheckbox.click();
  }

  async configureSmartCarePlusModules(includeSpecialist: boolean = true, includeDentalOptical: boolean = true) {
    // Find the SmartCare+ section and configure its modules
    const smartCarePlusSection = this.page.locator('div').filter({ hasText: /^SmartCare\+$/ }).first();
    
    // Configure Specialist module for SmartCare+
    const specialistCheckbox = smartCarePlusSection.locator('..').getByText('Specialist module').locator('../..').getByRole('checkbox');
    const isSpecialistChecked = await specialistCheckbox.isChecked();
    
    if (includeSpecialist && !isSpecialistChecked) {
      await specialistCheckbox.click();
    } else if (!includeSpecialist && isSpecialistChecked) {
      await specialistCheckbox.click();
    }
    
    // Configure Dental and Optical module for SmartCare+
    const dentalOpticalCheckbox = smartCarePlusSection.locator('..').getByText('Dental and Optical').locator('../..').getByRole('checkbox');
    const isDentalOpticalChecked = await dentalOpticalCheckbox.isChecked();
    
    if (includeDentalOptical && !isDentalOpticalChecked) {
      await dentalOpticalCheckbox.click();
    } else if (!includeDentalOptical && isDentalOpticalChecked) {
      await dentalOpticalCheckbox.click();
    }
  }

  async setSmartCarePlusExcess(excessAmount: string) {
    // Find SmartCare+ section and set its excess
    const smartCarePlusSection = this.page.locator('div').filter({ hasText: /^SmartCare\+$/ }).first();
    const excessDropdown = smartCarePlusSection.locator('..').getByRole('combobox').first();
    await excessDropdown.selectOption([excessAmount]);
  }

  async proceedToCustomizeQuote() {
    await this.nextButton.click();
  }
}