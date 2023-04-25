/*
  Contains code to fetch data from the PostgreSQL to the borrower page specifically

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import React from 'react'
import { PaymentInfo, FullBorrowerInfo, currencyFormatter} from './Interfaces/Interfaces';
import { ColumnDef } from '@tanstack/react-table';
const db = require('./Connection')

/************************************************************************************************
  PAYMENTS TABLE
*************************************************************************************************/

export function addPaymentToBorrower(payment: PaymentInfo, borrower: FullBorrowerInfo) {
  //Add payment to database for the borrower

  console.log("added payment to borrower")
  console.log(payment)
  console.log(borrower)
}

export function editPaymentFromBorrower(payment: PaymentInfo, borrower: FullBorrowerInfo) {
  //Edit the payment for the borrower in the database

  console.log("edited payment from borrower")
  console.log(payment)
  console.log(borrower)
}

//No need to edit this, populates the table using the rowdata retreived from the dashboard
export function getBorrowerPaymentsData(borrowerRowdata: FullBorrowerInfo) {
  return React.useMemo<PaymentInfo[]>(
    () => borrowerRowdata.payments,
    []
  )
}

//No need to edit this, just more columns, add more if you think it needs it
export function getBorrowerPaymentsColumns() {
  return React.useMemo<ColumnDef<PaymentInfo>[]>(
    () => [
      {
        header: 'Payment Date',
        cell: (row) => row.renderValue(),
        accessorKey: 'paymentdate',
        sortType: (a: PaymentInfo, b: PaymentInfo) => {
          return new Date(a.paymentdate).getTime() - new Date(b.paymentdate).getTime()
        }
      },
      {
        header: 'Payment Amount',
        cell: (row) => currencyFormatter.format(row.getValue<number>()),
        accessorKey: 'paymentval',
      },
      {
        header: 'Status',
        cell: (row) => row.getValue() ? "Paid" : "Not Paid",
        accessorKey: 'paymentstatus',
      },
    ],
    []
  )
}