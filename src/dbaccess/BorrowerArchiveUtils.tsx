/*
  Contains code to fetch data from the PostgreSQL to the borrower archive page

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import React from 'react'
import { FullBorrowerInfo, PersonalInfo } from './Interfaces/Interfaces'
import { ColumnDef } from '@tanstack/react-table';
import { GenerateFullBorrowerInfo } from './testingUtils/TestDataGenerator';
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
        header: 'First Name',
        cell: (row) => row.renderValue(),
        accessorKey: 'firstName',
      },
      {
        header: 'Last Name',
        cell: (row) => row.renderValue(),
        accessorKey: 'lastName',
      },
      {
        header: 'Address',
        cell: (row) => row.renderValue(),
        accessorKey: 'address',
      },
    ],
    []
  )
}
