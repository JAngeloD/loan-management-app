/*
  Contains code to fetch data from the PostgreSQL for Dashboard Components
  Split into two sections:
    - Payment/Borrower table
    - Headers
    - (THIS FILE DOESN'T CONTAIN FUNCTIONS FOR THE BORROWER PAGE, PLEASE LOOK AT BorrowerPage.js)

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import React from 'react'
const db = require('./Connection')


/************************************************************************************************
  HEADERS
*************************************************************************************************/

////////////////
//Commission
////////////////
export function getTotalCommissionAmount() {
  //Should return the total amount of commission accrued
  //From all commisioners
  //RETURN TYPE: Currency, two decimal places with dollar sign ($)
  //EXAMPLE: $5.00

  return 0
}

export function getLastCommissionAmount() {
  //Should return the commissioned amount of the last payment where a middle-man is present
  //If the last payment from a borrower didn't have a middle-man attached, pull until there is one
  //RETURN TYPE: Currency, two decimal places with dollar sign ($)
  //EXAMPLE: $5.00

  return 0
}

export function getLastCommissionName() {
  //Should return the middle-mans full name attached to the last commission amount (above function)
  //RETURN TYPE: String
  //EXAMPLE: John Doe

  return ""
}

////////////////
//Cash Out
////////////////
export function getCashOut() {
  //Return all borrower's loan amount excluding interest and commission value.
  //RETURN TYPE: Currency, two decimal places with dollar sign ($)
  //EXAMPLE: $5.00

  return 0
}
export function getPaymentsLeft() {
  //Return the total term left for all borrowers
  //RETURN TYPE: Integer
  //EXAMPLE: 25

  return 0
}

////////////////
//Profit
////////////////
export function getProfit() {
  //Return the total interest amount gained from all past payments
  //Upcoming payments don't count, do not count commission
  //RETURN TYPE: Currency, two decimal places with dollar sign ($)
  //EXAMPLE: $5.00

  return 0
}

export function getLastInterestAmount() {
  //Return the last interest amount gained from the most recent payment, do not count commission
  //RETURN TYPE: Currency, two decimal places with dollar sign ($)
  //EXAMPLE: $5.00

  return 0
}

export function getLastPaymentDate() {
  //Get the date of when the last interest amount was taken
  //RETURN TYPE: Date (YYYY,MM,DD)
  //EXAMPLE: 2023/03/18

  return new Date().toDateString
}

export function getLastPaymentBorrower() {
  //Get the name of the borrower responsible for the last payment date (above function)
  //RETURN TYPE: String
  //EXAMPLE: John Doe

  return ""
}

////////////////
//Money on hand
////////////////
export function getMoneyOnHand() {
  //Return the total money loaned out from all prior payments
  //This does not include interest or commission.
  //RETURN TYPE: Currency, two decimal places with dollar sign ($)
  //EXAMPLE: $5.00

  return 0
}
export function getLastPaymentAmount() {
  //Return the last payment amount gained from the most recent payment
  //Do not include interest
  //RETURN TYPE: Currency, two decimal places with dollar sign ($)
  //EXAMPLE: $5.00

  return 0
}

/************************************************************************************************
  PAYMENT/BORROWER TABLE
*************************************************************************************************/

export function getBorrowerOverViewListData() {
  const data = React.useMemo(
    () => [
      {
        name: "Filbo",
        nextpaymentdate: "2022-03-27",
        paymentval: "$299.00",
        remainingterm: 12
      },
      {
        name: "Sans",
        nextpaymentdate: "2022-05-14",
        paymentval: "$994.00",
        remainingterm: 3
      },
      {
        name: "Beffica",
        nextpaymentdate: "2022-03-14",
        paymentval: "$939.00",
        remainingterm: 22
      },
      {
        name: "John",
        nextpaymentdate: "2022-10-21",
        paymentval: "$979.00",
        remainingterm: 1
      }
    ],
    []
  )

  return data
}
export function getBorrowerOverViewListColumns() {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Next Payment Date',
        accessor: 'nextpaymentdate',
        sortType: (a, b) => {
          return new Date(a.values.nextpaymentdate).getTime() - new Date(b.values.nextpaymentdate).getTime()
        }
      },
      {
        Header: 'Amount expected',
        accessor: 'paymentval',
      },
      {
        Header: 'Remaining Term',
        accessor: 'remainingterm',
      },
    ],
    []
  )

  return columns
}