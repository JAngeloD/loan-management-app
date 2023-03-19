/*
  Exports a table showing payment dates and acts like a portal to a more
  detailed overview of the borrowers in the table.
*/

import React from 'react'
import FilterTableGeneric from '../generic/FilterTableGeneric'
import * as db from '../../dbaccess/DashboardUtils'


//Changes start to switch to the borrower info page with the row data passed in the params
export default function BorrowerTable({handleDashboardState}) {

  const viewBorrower = (row) => {
    //alert(JSON.stringify(row.original))
    handleDashboardState("viewborrower", row.original)
  }

  return (
    <>
      <FilterTableGeneric data={db.getBorrowerOverViewListData()}
                          columns={db.getBorrowerOverViewListColumns()}
                          cellClickFunction={viewBorrower}/>
    </>
  )
}

