/*
  Contains code to fetch data from the PostgreSQL to the borrower page specifically

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import React from 'react'
import { PersonalInfo, LoanInfo, PaymentInfo } from './Interfaces/Interfaces';
import { ColumnDef } from '@tanstack/react-table';
import { BorrowerOverview } from './DashboardUtils';
const db = require('./Connection')

export function getBorrowerPaymentsData() {
  return React.useMemo<PaymentInfo[]>(
    () => [
      {
        paymentdate: "2022-03-15",
        paymentval: "$250.00",
        paymentstatus: true
      },
      {
        paymentdate: "2022-04-15",
        paymentval: "$250.00",
        paymentstatus: false
      },
      {
        paymentdate: "2022-05-15",
        paymentval: "$250.00",
        paymentstatus: false
      },
      {
        paymentdate: "2022-06-15",
        paymentval: "$250.00",
        paymentstatus: false
      }
    ],
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
}

export function getBorrowerPersonalInfo(rowdata: BorrowerOverview): PersonalInfo {
  // ... Pass rowdata to db to retrieve borrower info

  return ({
    borrowerid: "1",
    firstName: "Filbo",
    lastName: "Fiddlepie",
    address: "snaktooth island",
    province: "what",
    postalCode: "123 456",
    phoneNumber: "403-292-2902",
    email: "test"
  })
}

export function getBorrowerLoanInfo(rowdata: BorrowerOverview): LoanInfo {
  // ... Pass rowdata to db to retrieve borrower info
  return ({
    loanid: "1",
    principal: "69",
    interest: "69",
    term: "69",
    paymentperperiod: "69",
    startdate: "69",
    frequency: "69",
    commissioner: "69",
    commissioninterest: "69"
  })
}

