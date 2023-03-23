/*
  Exports a table showing payment dates and acts like a portal to a more
  detailed overview of the borrowers in the table.
*/

import React from 'react'
import {FilterTableGeneric} from '../generic/table/FilterTableGeneric'
import * as db from '../../dbaccess/DashboardUtils'

interface Props {
  handleDashboardState: (params: string, row: object) => any;
}

//Changes start to switch to the borrower info page with the row data passed in the params
export default function BorrowerTable({handleDashboardState}: Props) {

  const viewBorrower = (row: any) => {
    //console.log(JSON.stringify(row.original))
    handleDashboardState("viewborrower", row.original)
  }

  return (
    <>
      <FilterTableGeneric data={db.getBorrowerOverViewListData()}
                          columns={db.getBorrowerOverViewListColumns()}
                          cellClickFunction={viewBorrower}
                          showGlobalFilter
                          />
    </>
  )
}

