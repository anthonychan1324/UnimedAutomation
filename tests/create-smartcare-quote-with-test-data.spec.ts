// spec: accuro-quote-happy-path.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
import { StartQuotePage } from '../pages/StartQuotePage';
import { ProductSelectionPage } from '../pages/ProductSelectionPage';
import { CustomizeQuotePage } from '../pages/CustomizeQuotePage';
import { smartCareTestData } from '../testdata/smartCareTestData';

test.describe('Quote Application Happy Path', () => {
  test('Create SmartCare Quote with Test Data', async ({ page }) => {
    const startQuotePage = new StartQuotePage(page);
    const productSelectionPage = new ProductSelectionPage(page);
    const customizeQuotePage = new CustomizeQuotePage(page);
    const testData = smartCareTestData;

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

    // 12. Deselect SmartCare+ product
    await productSelectionPage.deselectSmartCarePlus();

    // 13. Select SmartCare product
    await productSelectionPage.selectSmartCare();

    // 14. Set excess amount
    await productSelectionPage.setExcess(testData.productSelection.excessAmount);

    // 15-16. Configure modules
    await productSelectionPage.configureModules(
      testData.productSelection.includeSpecialist,
      testData.productSelection.includeDentalOptical
    );

    // 17. Proceed to customize quote screen
    await productSelectionPage.proceedToCustomizeQuote();

    // 18. Verify premium breakdown and modules
    await customizeQuotePage.verifyPremiumBreakdown(
      testData.expectedPremiums.hsaPremium,
      testData.expectedPremiums.totalBeforeDiscounts
    );
    await customizeQuotePage.verifyDentalOpticalIncluded();
  });
});