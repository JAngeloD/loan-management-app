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
  comments:string;
}
export const personalInfoDefaults: PersonalInfo = {
  borrowerid: "",
  firstName: "",
  lastName: "",
  address: "",
  province: "",
  postalCode: "",
  phoneNumber: "",
  email: "",
  comments: ""
}

export interface LoanInfo {
  loanid: string;
  principal: number;
  interest: number;
  term: number;
  paymentperperiod: string;
  startdate: string;
  frequency: string;
  commissioner: string;
  commissioninterest: number;
}

export const loanInfoDefaults: LoanInfo = {
  loanid: "",
  principal: 0,
  interest: 0,
  term: 0,
  paymentperperiod: "",
  startdate: "",
  frequency: "",
  commissioner: "",
  commissioninterest: 0
}

export interface PaymentInfo {
  paymentID: string;
  paymentdate: string;
  paymentval: number;
  paymentstatus: boolean;
}

export const paymentInfoDefaults: PaymentInfo = {
  paymentID: "",
  paymentdate: new Date().toISOString().split('T')[0],
  paymentval: 0,
  paymentstatus: false
}

export const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
