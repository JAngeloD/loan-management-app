/*
  Contains code to fetch data from the PostgreSQL to the payment archive page

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import React from 'react'
import { ColumnDef } from '@tanstack/react-table';
import { GenerateArchivedPayments, GeneratePayment } from './testingUtils/TestDataGenerator';
import { PaymentInfo, PersonalInfo, ArchivedPayments } from './Interfaces/Interfaces';
const db = require('./Connection')

export function getAllArchivedPaymentsData() {
  return React.useMemo<ArchivedPayments[]>(
    () => GenerateArchivedPayments(25),
    []
  )
}
export function getAllArchivedPaymentsColumns() {
  return React.useMemo<ColumnDef<ArchivedPayments>[]>(
    () => [
      {
        header: 'Payment Date',
        cell: (row) => row.renderValue(),
        accessorKey: 'paymentdate',
        sortType: (a: ArchivedPayments, b: ArchivedPayments) => {
          return new Date(a.paymentdate).getTime() - new Date(b.paymentdate).getTime()
        }
      },
      {
        header: 'Borrower Name',
        cell: (row) => row.renderValue(),
        accessorFn: (row) => {
          return (`${row.firstName} ${row.lastName}`)
        },
      },
      {
        header: 'Payment Amount',
        cell: (row) => row.renderValue(),
        accessorKey: 'paymentval',
      },
    ],
    []
  )
}
