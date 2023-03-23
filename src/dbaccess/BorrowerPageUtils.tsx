/*
  Contains code to fetch data from the PostgreSQL to the borrower page specifically

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import { ColumnDef } from '@tanstack/react-table';
import React from 'react'
const db = require('./Connection')

interface Payments {
  paymentdate: string;
  paymentval: string;
  paymentstatus: string;
}

export function getBorrowerPaymentsData() {
  const data = React.useMemo(
    () => [
      {
        paymentdate: "2022-03-15",
        paymentval: "$250.00",
        paymentstatus: "paid"
      },
      {
        paymentdate: "2022-04-15",
        paymentval: "$250.00",
        paymentstatus: "not paid"
      },
      {
        paymentdate: "2022-05-15",
        paymentval: "$250.00",
        paymentstatus: "not paid"
      },
      {
        paymentdate: "2022-06-15",
        paymentval: "$250.00",
        paymentstatus: "not paid"
      }
    ],
    []
  )

  return data
}
export function getBorrowerPaymentsColumns() {
  const columns = React.useMemo<ColumnDef<Payments>[]>(
    () => [
      {
        header: 'Payment Date',
        cell: (row) => row.renderValue(),
        accessorKey: 'paymentdate',
        sortType: (a: Payments, b: Payments) => {
          return new Date(a.paymentdate).getTime() - new Date(b.paymentdate).getTime()
        }
      },
      {
        header: 'Payment Amount',
        cell: (row) => row.renderValue(),
        accessorKey: 'paymentval',
      },
      {
        header: 'Status',
        cell: (row) => row.renderValue(),
        accessorKey: 'paymentstatus',
      },
    ],
    []
  )

  return columns
}
