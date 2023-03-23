/*
  Contains code to fetch data from the PostgreSQL to the borrower page specifically

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import { ColumnDef } from '@tanstack/react-table';
import React from 'react'
const db = require('./Connection')

export interface borrowerPersonalInfo {
  firstname: string;
  lastname: string;
  address: string;
  province: string;
  postalcode: string;
  phonenumber: string;
  email: string;
}
export interface borrowerLoanInfo {
  principal: string;
  interest: string;
  term: string;
  paymentperperiod: string;
  startdate: string;
  frequency: string;
  commissioner: string;
  commissioninterest: string;
}

export interface Payments {
  paymentdate: string;
  paymentval: string;
  paymentstatus: string;
}

export function getBorrowerPaymentsData() {
  return React.useMemo(
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
}
export function getBorrowerPaymentsColumns() {
  return React.useMemo<ColumnDef<Payments>[]>(
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
}

export function getBorrowerPersonalInfo(rowdata: object): borrowerPersonalInfo{
  // ... Pass rowdata to db to retrieve borrower info
  return ({
    firstname: "Filbo",
    lastname: "Fiddlepie",
    address: "snaktooth island",
    province: "what",
    postalcode: "123 456",
    phonenumber: "403-292-2902",
    email: "test"
  })
}

export function getBorrowerLoanInfo(rowdata: object): borrowerLoanInfo {
  // ... Pass rowdata to db to retrieve borrower info
  return ({
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
