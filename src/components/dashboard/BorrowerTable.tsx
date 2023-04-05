/*
  Exports a table showing payment dates and acts like a portal to a more
  detailed overview of the borrowers in the table.
*/

import React from 'react'
import { FilterTableGeneric } from '../generic/table/FilterTableGeneric'
import * as db from '../../dbaccess/DashboardUtils'
import { parentPageState } from '../App';
import { FullBorrowerInfo } from '../../dbaccess/Interfaces/Interfaces';

interface Props {
  handleBorrowerRowDataState: (newState: parentPageState, borrowerRowdata: FullBorrowerInfo) => any;
}

//Changes start to switch to the borrower info page with the row data passed in the params
export default function BorrowerTable({ handleBorrowerRowDataState }: Props) {

  const viewBorrower = (row: any) => {
    handleBorrowerRowDataState(parentPageState.borrowerdetails, row.original)
  }

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

