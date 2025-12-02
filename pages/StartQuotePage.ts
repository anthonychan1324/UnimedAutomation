import { Page, Locator, expect } from '@playwright/test';

export class StartQuotePage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly dateOfBirthInput: Locator;
  readonly nzCitizenYesRadio: Locator;
  readonly smokingNoRadio: Locator;
  readonly personTypeDropdown: Locator;
  readonly contactFirstNameInput: Locator;
  readonly emailInput: Locator;
  readonly phoneInput: Locator;
  readonly financialAdviserNoRadio: Locator;
  readonly nextButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('#b5-FirstNameInput');
    this.dateOfBirthInput = page.locator('input[type="date"]');
    this.nzCitizenYesRadio = page.locator('#b5-RadioButton3-input');
    this.smokingNoRadio = page.locator('#b5-RadioButton2-input');
    this.personTypeDropdown = page.locator('#b5-PersonRelationshipType');
    this.contactFirstNameInput = page.locator('#Input_TextVar9');
    this.emailInput = page.getByRole('textbox', { name: 'Enter Email' });
    this.phoneInput = page.getByRole('textbox', { name: 'Enter Phone Number (optional)' });
    this.financialAdviserNoRadio = page.locator('#b10-RadioButton2-input');
    this.nextButton = page.getByRole('button', { name: 'Next' });
  }

  async navigateTo() {
    await this.page.goto('https://accuro-tst.outsystemsenterprise.com/QuoteApply/StartQuote');
    await this.page.waitForTimeout(3000); // Wait for page to load completely
  }

  async fillPersonalDetails(firstName: string, dateOfBirth: string) {
    await this.firstNameInput.fill(firstName);
    await this.dateOfBirthInput.fill(dateOfBirth);
  }

  async selectNZCitizenStatus(isNZCitizen: boolean = true) {
    if (isNZCitizen) {
      await this.nzCitizenYesRadio.click();
    }
  }

  async selectSmokingStatus(isSmoker: boolean = false) {
    if (!isSmoker) {
      await this.smokingNoRadio.click();
    }
  }

  async selectPersonType(personType: string = 'Main Member') {
    await this.personTypeDropdown.selectOption([personType]);
  }

  async fillContactDetails(firstName: string, email: string, phone: string) {
    await this.contactFirstNameInput.fill(firstName);
    await this.emailInput.fill(email);
    await this.phoneInput.fill(phone);
  }

  async selectFinancialAdviserStatus(hasAdviser: boolean = false) {
    if (!hasAdviser) {
      await this.financialAdviserNoRadio.click();
    }
  }

  async proceedToProductSelection() {
    await this.nextButton.click();
    await this.page.waitForTimeout(3000); // Wait for product selection page to load
  }
}