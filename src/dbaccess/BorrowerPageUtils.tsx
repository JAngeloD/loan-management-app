/*
  Contains code to fetch data from the PostgreSQL to the borrower page specifically

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import React from 'react'
import { PersonalInfo, LoanInfo, PaymentInfo, FullBorrowerInfo, currencyFormatter} from './Interfaces/Interfaces';
import { ColumnDef } from '@tanstack/react-table';
import { GenerateFullBorrowerInfo } from './testingUtils/TestDataGenerator';
const db = require('./Connection')

export function getBorrowerPaymentsData(borrowerRowdata: FullBorrowerInfo) {
  return React.useMemo<PaymentInfo[]>(
    () => borrowerRowdata.payments,
    []
  )
}
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

export function addPaymentToBorrower() {
  console.log("added payment to borrower")
}

export function editPaymentFromBorrower() {
  console.log("edited payment from borrower")
}
