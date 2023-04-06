/*
  Exports a table showing payment dates and acts like a portal to a more
  detailed overview of the borrowers in the table.
*/

import React from 'react'
import { FilterTableGeneric } from '../generic/table/FilterTableGeneric'
import * as db from '../../dbaccess/DashboardUtils'
import { ShowBorrower } from '../App';


//Changes start to switch to the borrower info page with the row data passed in the params
export default function BorrowerTable({ viewBorrower }: ShowBorrower) {


  return (
    <FilterTableGeneric data={db.getBorrowerOverViewListData()}
                        columns={db.getBorrowerOverViewListColumns()}
                        cellClickFunction={viewBorrower}
                        sortState={[{
                          id: "nextpaymentdate",
                          desc: false
                        }]}
                        showGlobalFilter
    />
  )
}

