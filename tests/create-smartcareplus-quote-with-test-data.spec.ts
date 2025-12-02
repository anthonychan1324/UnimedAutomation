// spec: accuro-quote-happy-path.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
import { StartQuotePage } from '../pages/StartQuotePage';
import { ProductSelectionPage } from '../pages/ProductSelectionPage';
import { CustomizeQuotePage } from '../pages/CustomizeQuotePage';
import { smartCarePlusTestData } from '../testdata/smartCarePlusTestData';

test.describe('Quote Application Happy Path - SmartCare+', () => {
  test('Create SmartCare+ Quote with Test Data', async ({ page }) => {
    const startQuotePage = new StartQuotePage(page);
    const productSelectionPage = new ProductSelectionPage(page);
    const customizeQuotePage = new CustomizeQuotePage(page);
    const testData = smartCarePlusTestData;

    // 1. Navigate to the quote application start page
    await startQuotePage.navigateTo();

    // 2-3. Enter personal details
    await startQuotePage.fillPersonalDetails(
      testData.personalDetails.firstName,
      testData.personalDetails.dateOfBirth
    );

    // 4. Select New Zealand citizen/resident status
    await startQuotePage.selectNZCitizenStatus(testData.personalDetails.isNZCitizen);

    // 5. Select smoking/vaping status
    await startQuotePage.selectSmokingStatus(testData.personalDetails.isSmoker);

    // 6. Select Person Type
    await startQuotePage.selectPersonType(testData.personalDetails.personType);

    // 7-9. Enter contact details
    await startQuotePage.fillContactDetails(
      testData.contactDetails.firstName,
      testData.contactDetails.email,
      testData.contactDetails.phone
    );

    // 10. Select Financial Adviser status
    await startQuotePage.selectFinancialAdviserStatus(testData.preferences.hasFinancialAdviser);

    // 11. Proceed to product selection
    await startQuotePage.proceedToProductSelection();

    // 12. SmartCare+ product is pre-selected by default, so we don't need to click it

    // 13. Set excess amount for SmartCare+
    await productSelectionPage.setSmartCarePlusExcess(testData.productSelection.excessAmount);

    // 14-15. Configure SmartCare+ modules
    await productSelectionPage.configureSmartCarePlusModules(
      testData.productSelection.includeSpecialist,
      testData.productSelection.includeDentalOptical
    );

    // 16. Proceed to customize quote screen
    await productSelectionPage.proceedToCustomizeQuote();

    // 17. Verify premium breakdown and modules
    await customizeQuotePage.verifyPremiumBreakdown(
      testData.expectedPremiums.hsaPremium,
      testData.expectedPremiums.totalBeforeDiscounts
    );
    await customizeQuotePage.verifyDentalOpticalIncluded();
  });
});