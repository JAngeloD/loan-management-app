/*
  Contains code to fetch data from the PostgreSQL for the Dashboard Component
  Split into two sections:
    - Payment/Borrower table
    - Headers

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

const db = require('./Connection')


/************************
  HEADERS
*************************/

//Commission
export function getTotalCommissionAmount() {

  return 0
}

export function getLastCommissionAmount() {

  return ''
}

export function getLastCommissionName() {

  return ''
}


export function getCashOut() {

  return 0
}

export function getProfit() {

  return 0
}

export function getMoneyOnHand() {

  return 0
}
