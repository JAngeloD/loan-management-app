/*
  Exports a table showing payment dates and acts like a portal to a more
  detailed overview of the borrowers in the table.
*/

import React from 'react'
import FilterTableGeneric from '../generic/FilterTableGeneric'
import * as db from '../../dbaccess/DashboardUtils'


function viewBorrower() {
  alert("TEST")
}

function BorrowerTable() {
  return (
    <>
      <FilterTableGeneric data={db.getBorrowerOverViewListData()} columns={db.getBorrowerOverViewListColumns()} cellClickFunction={viewBorrower}/>
    </>
  )
}

export default BorrowerTable
