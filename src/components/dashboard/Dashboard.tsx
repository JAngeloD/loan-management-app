import React, { useState } from 'react'
import BorrowerTable from './BorrowerTable'
import BorrowerPageGenerics from '../generic/BorrowerPageGeneric'
import DashboardHeaders from './DashboardHeaders'
import { FullBorrowerInfo } from '../../dbaccess/Interfaces/Interfaces'
import { parentPageState } from '../App'

interface Props {
  handleBorrowerRowDataState: (newState: parentPageState, borrowerRowdata: FullBorrowerInfo) => any
}

export default function Dashboard({handleBorrowerRowDataState}: Props) {
  return (
    <div className="container flex-shrink-1 bg-dark-subtle p-4 ">
      <DashboardHeaders />
      <div className="card shadow border-0 mb-7 p-4 mt-5">
        <BorrowerTable handleBorrowerRowDataState={handleBorrowerRowDataState} />
      </div>
    </div>
  )
}


