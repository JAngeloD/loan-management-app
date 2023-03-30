/*
 Depending on the scope. This may get seperated into different interface files
 */

export interface PersonalInfo{
  borrowerid: string;
  firstName: string;
  lastName: string;
  address: string;
  province: string;
  postalCode: string;
  phoneNumber: string;
  email: string;
}

export interface LoanInfo {
  loanid: string;
  principal: string;
  interest: string;
  term: string;
  paymentperperiod: string;
  startdate: string;
  frequency: string;
  commissioner: string;
  commissioninterest: string;
}

export interface PaymentInfo {
  paymentID: string;
  paymentdate: string;
  paymentval: number;
  paymentstatus: boolean;
}

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
