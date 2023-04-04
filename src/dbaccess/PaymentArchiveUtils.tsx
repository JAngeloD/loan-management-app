/*
  Contains code to fetch data from the PostgreSQL to the payment archive page

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import React from 'react'
import { ColumnDef } from '@tanstack/react-table';
const db = require('./Connection')

export interface ArchivedPayments {
  paymentdate: string;
  fullname: string;
  paymentval: string;
}

export function getAllArchivedPaymentsData() {
  return React.useMemo<ArchivedPayments[]>(
    () => [
      {
        paymentdate: "2022-03-15",
        fullname: "Filbo Fiddlepie",
        paymentval: "$250.00",
      },
      {
        paymentdate: "2022-04-15",
        fullname: "Filbo Fiddlepie",
        paymentval: "$250.00",
      },
      {
        paymentdate: "2022-05-15",
        fullname: "Filbo Fiddlepie",
        paymentval: "$250.00",
      },
      {
        paymentdate: "2022-06-15",
        fullname: "Filbo Fiddlepie",
        paymentval: "$250.00",
      }
    ],
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
        accessorKey: 'fullname',
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
