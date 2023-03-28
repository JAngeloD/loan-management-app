/*
  Contains code to fetch data from the PostgreSQL to the borrower archive page

  Note: If you're seeing this, this means this is just a skeleton for now.
*/

import React from 'react'
import { PersonalInfo } from './Interfaces/Interfaces'
import { ColumnDef } from '@tanstack/react-table';
const db = require('./Connection')


export interface ArchivedBorrowers extends Pick<PersonalInfo, "firstName" | "lastName" | "address">  {
  archiveddate: string; //last payment date
}

export function getAllArchivedPaymentsData() {
  return React.useMemo<ArchivedBorrowers[]>(
    () => [
      {
        archiveddate: "2022-03-15",
        firstName: "Filbo ",
        lastName: "FiddlePie",
        address: "Snaktooth Island",
      },
      {
        archiveddate: "2022-04-15",
        firstName: "Filbo",
        lastName: "FiddlePie",
        address: "Snaktooth Island",
      },
      {
        archiveddate: "2022-05-15",
        firstName: "Filbo",
        lastName: "FiddlePie",
        address: "Snaktooth Island",
      },
    ],
    []
  )
}
export function getAllArchivedPaymentsColumns() {
  return React.useMemo<ColumnDef<ArchivedBorrowers>[]>(
    () => [
      {
        header: 'Payment Date',
        cell: (row) => row.renderValue(),
        accessorKey: 'archiveddate',
        sortType: (a: ArchivedBorrowers, b: ArchivedBorrowers) => {
          return new Date(a.archiveddate).getTime() - new Date(b.archiveddate).getTime()
        }
      },
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
