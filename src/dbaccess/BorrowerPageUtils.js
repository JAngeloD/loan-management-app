/*
  Contains code to fetch data from the PostgreSQL to the borrower page specifically

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import React from 'react'
const db = require('./Connection')

export function getBorrowerPaymentsData() {
  const data = React.useMemo(
    () => [
      {
        nextpaymentdate: "2022-03-15",
        paymentval: "$250.00",
        paymentstatus: "paid"
      },
      {
        nextpaymentdate: "2022-04-15",
        paymentval: "$250.00",
        paymentstatus: "not paid"
      },
      {
        nextpaymentdate: "2022-05-15",
        paymentval: "$250.00",
        paymentstatus: "not paid"
      },
      {
        nextpaymentdate: "2022-06-15",
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
        accessor: 'nextpaymentdate',
        sortType: (a, b) => {
          return new Date(a.values.nextpaymentdate).getTime() - new Date(b.values.nextpaymentdate).getTime()
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
