# Accuro Health Insurance Quote Application - Happy Path Test Plan

## Application Overview

This test plan covers the happy path scenario for creating a health insurance quote through the Accuro Health Insurance quote application. The test validates the complete user journey from initial quote request through to the customise quote screen, including personal details entry, product selection, and premium calculation verification.

## Test Scenarios

### 1. Quote Application Happy Path

**Seed:** `tests/seed.spec.ts`

#### 1.1. Create SmartCare Quote with Test Data

**File:** `tests/quote-happy-path/smartcare-quote-creation.spec.ts`

**Steps:**
  1. Navigate to the quote application start page
  2. Enter personal details - First Name: 'John'
  3. Enter personal details - Date of Birth: '1990-01-01'
  4. Select 'Yes' for New Zealand citizen/resident status
  5. Select 'No' for smoking/vaping status
  6. Select 'Main Member' from Person Type dropdown
  7. Enter contact person first name: 'John'
  8. Enter contact person email: 'johndoe@gmail.com'
  9. Enter contact person phone number: '123456789' (NZ +64 selected by default)
  10. Select 'No' for Financial Adviser question
  11. Click 'Next' to proceed to product selection
  12. Uncheck the pre-selected SmartCare+ product
  13. Select SmartCare product checkbox
  14. Change SmartCare excess from '$0' to '$500'
  15. Uncheck the Specialist module (should be checked by default)
  16. Check the Dental and Optical module
  17. Click 'Next' to proceed to customise quote screen
  18. Wait for the customise quote page to load

**Expected Results:**
  - Quote application page loads successfully with all form fields visible
  - First name field accepts and displays 'John'
  - Date field accepts '1990-01-01' in correct format
  - NZ resident status selection enables additional form fields (smoking question and person type)
  - Smoking status selection completes without error
  - Person type dropdown shows and accepts 'Main Member' selection
  - Contact person first name field accepts and displays 'John'
  - Contact person email field accepts and displays 'johndoe@gmail.com'
  - Phone number field accepts '123456789' with +64 NZ country code
  - Financial adviser selection completes and Next button becomes enabled
  - Product selection page loads showing SmartCare+ and SmartCare options
  - SmartCare+ becomes unselected and Next button is disabled
  - SmartCare becomes selected and premium updates to show new pricing
  - Excess dropdown changes to '$500' and monthly premium reduces from ~$201 to ~$169
  - Specialist module becomes unchecked and premium reduces further to ~$128
  - Dental and Optical module becomes checked and premium increases to ~$167
  - Customise quote page loads successfully
  - Premium breakdown shows: H&S Premium: $145.34, Dental and Optical: $39.77, Total before discounts: $185.11, with non-smoker and direct debit discounts applied resulting in final total: $167.16
