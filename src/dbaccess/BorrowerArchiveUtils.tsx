/*
  Contains code to fetch data from the PostgreSQL to the borrower archive page

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import React from 'react'
import { FullBorrowerInfo, PersonalInfo } from './Interfaces/Interfaces'
import { ColumnDef } from '@tanstack/react-table';
import { GenerateFullBorrowerInfo } from './testingUtils/TestDataGenerator';
const db = require('./Connection')



export function getAllArchivedPaymentsData(): FullBorrowerInfo[] {
  return React.useMemo<FullBorrowerInfo[]>(
    /**
     * Get all borrowers from database that have their payments fully paid off
     * See function below on how the return type looks like.
     */


    () => GenerateFullBorrowerInfo(25),
    []
  )
}

//No need to change unless you want to add more columns
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
