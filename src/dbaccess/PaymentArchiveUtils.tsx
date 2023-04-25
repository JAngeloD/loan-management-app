/*
  Contains code to fetch data from the PostgreSQL to the payment archive page

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import React from 'react'
import { ColumnDef } from '@tanstack/react-table';
import { GenerateArchivedPayments } from './testingUtils/TestDataGenerator';
import { ArchivedPayments } from './Interfaces/Interfaces';
const db = require('./Connection')




export function getAllArchivedPaymentsData(): ArchivedPayments[] {
  return React.useMemo<ArchivedPayments[]>(
    /**
     * Get all payments from database that have been paid off
     * See function below on how the return type looks like.
     */

    () => GenerateArchivedPayments(25),
    []
  )
}

//No need to change unless you want to add more columns
export function getAllArchivedPaymentsColumns() {
  return React.useMemo<ColumnDef<ArchivedPayments>[]>(
    () => [
      {
        header: 'Payment Date',
        cell: (row) => row.renderValue(),
        accessorKey: 'paymentdate',
        sortType: (a: ArchivedPayments, b: ArchivedPayments) => {
          return new Date(a.paymentdate).getTime() - new Date(b.paymentdate).getTime()
        },
        accessorFn: (row) => {
          return (`$${row.paymentdate}`)
        },
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
        accessorFn: (row) => {
          return (`$${row.paymentval}`)
        },
      },
    ],
    []
  )
}
