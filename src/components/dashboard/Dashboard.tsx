import React, { useState } from 'react'
import BorrowerTable from './BorrowerTable'
import DashboardHeaders from './DashboardHeaders'
import { BorrowerPageProps, parentPageState } from '../App'

export default function Dashboard({handleBorrowerRowDataState}: BorrowerPageProps) {

  const viewBorrower = (row: any) => {
    handleBorrowerRowDataState(parentPageState.borrowerdetails, row.original)
  }

  return (
    <div className="container flex-shrink-1 bg-dark-subtle p-4 ">
      <DashboardHeaders />
      <div className="card shadow border-0 mb-7 p-4 mt-5">
        <BorrowerTable viewBorrower={viewBorrower} />
      </div>
    </div>
  )
}


