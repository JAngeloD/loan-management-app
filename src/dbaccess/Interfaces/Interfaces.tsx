/*
 Depending on the scope. This may get seperated into different interface files
 */

export interface PersonalInfo{
  borrowerid?: string;
  firstName?: string;
  lastName?: string;
  address?: string;
  province?: string;
  postalCode?: string;
  phoneNumber?: string;
  email?: string;
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
  paymentdate: string;
  paymentval: string;
  paymentstatus: string;
}
