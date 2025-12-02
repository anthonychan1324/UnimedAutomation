export interface TestData {
  personalDetails: {
    firstName: string;
    dateOfBirth: string;
    isNZCitizen: boolean;
    isSmoker: boolean;
    personType: string;
  };
  contactDetails: {
    firstName: string;
    email: string;
    phone: string;
  };
  preferences: {
    hasFinancialAdviser: boolean;
  };
  productSelection: {
    excessAmount: string;
    includeSpecialist: boolean;
    includeDentalOptical: boolean;
  };
  expectedPremiums: {
    hsaPremium: string;
    totalBeforeDiscounts: string;
  };
}

export const smartCarePlusTestData: TestData = {
  personalDetails: {
    firstName: 'Jane',
    dateOfBirth: '1985-05-15',
    isNZCitizen: true,
    isSmoker: false,
    personType: 'Main Member'
  },
  contactDetails: {
    firstName: 'Jane',
    email: 'jane.smith@gmail.com',
    phone: '987654321'
  },
  preferences: {
    hasFinancialAdviser: false
  },
  productSelection: {
    excessAmount: '$250',
    includeSpecialist: true,
    includeDentalOptical: true
  },
  expectedPremiums: {
    hsaPremium: '$187.56 /mth',
    totalBeforeDiscounts: '$283.99 /mth'
  }
};