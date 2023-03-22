/*
  Contains code to fetch data from the PostgreSQL to the borrower page specifically

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import React from 'react'
const db = require('./Connection')

interface Payments {
  values: {
    paymentdate: string;
    paymentval: string;
    paymentstatus: number;
  }
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
  const columns = React.useMemo(
    () => [
      {
        Header: 'Payment Date',
        accessor: 'paymentdate',
        sortType: (a: Payments, b: Payments) => {
          return new Date(a.values.paymentdate).getTime() - new Date(b.values.paymentdate).getTime()
        }
      },
      {
        Header: 'Payment Amount',
        accessor: 'paymentval',
      },
      {
        Header: 'Status',
        accessor: 'paymentstatus',
      },
    ],
    []
  )

  return columns
}
