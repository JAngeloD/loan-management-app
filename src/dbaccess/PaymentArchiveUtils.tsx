/*
  Contains code to fetch data from the PostgreSQL to the payment archive page

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import React from 'react'
import { ColumnDef } from '@tanstack/react-table';
import { GenerateFullBorrowerInfo } from './testingUtils/TestDataGenerator';
import { FullBorrowerInfo } from './Interfaces/Interfaces';
const db = require('./Connection')

export function getAllArchivedPaymentsData() {
  return React.useMemo<FullBorrowerInfo[]>(
    () => GenerateFullBorrowerInfo(25),
    []
  )
}
export function getAllArchivedPaymentsColumns() {
  return React.useMemo<ColumnDef<FullBorrowerInfo>[]>(
    () => [
      {
        header: 'Payment Date',
        cell: (row) => row.renderValue(),
        accessorKey: 'paymentdate',
        sortType: (a: FullBorrowerInfo, b: FullBorrowerInfo) => {
          return new Date(a.payments[a.payments.length - 1].paymentdate).getTime() - new Date(b.payments[b.payments.length - 1].paymentdate).getTime()
        },
        accessorFn: (row) => {
          return row.payments.sort(function(a, b) {
            return new Date(a.paymentdate).getTime() - new Date(b.paymentdate).getTime();
          })[row.payments.length - 1].paymentdate
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
        accessorKey: 'paymentval',
      },
    ],
    []
  )
}
