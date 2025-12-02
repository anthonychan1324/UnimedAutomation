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

export const smartCareTestData: TestData = {
  personalDetails: {
    firstName: 'John',
    dateOfBirth: '1990-01-01',
    isNZCitizen: true,
    isSmoker: false,
    personType: 'Main Member'
  },
  contactDetails: {
    firstName: 'John',
    email: 'johndoe@gmail.com',
    phone: '123456789'
  },
  preferences: {
    hasFinancialAdviser: false
  },
  productSelection: {
    excessAmount: '$500',
    includeSpecialist: false,
    includeDentalOptical: true
  },
  expectedPremiums: {
    hsaPremium: '$145.34 /mth',
    totalBeforeDiscounts: '$185.11 /mth'
  }
};