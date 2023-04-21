import React from "react";
import FilterTableGeneric from "../generic/table/FilterTableGeneric";
import * as db from "../../dbaccess/BorrowerArchiveUtils";
import { BorrowerPageProps, parentPageState } from "../App";

export default function BorrowerArchive({handleBorrowerRowDataState}: BorrowerPageProps) {

  const viewBorrower = (row: any) => {
    console.log(row)
    handleBorrowerRowDataState(parentPageState.borrowerdetails, row.original)
  }

  return (
    <div className="container flex-shrink-1 bg-dark-subtle p-4 ">
      <div className="card shadow border-0 mb-7 p-4 mt-5">
        <div className="card-header bg-dark-subtle rounded">
          <h5 className="mb-1">Borrower Archive</h5>
        </div>
        <div className="mt-4 p-2">
          <FilterTableGeneric data={db.getAllArchivedPaymentsData()}
                              columns={db.getAllArchivedPaymentsColumns()}
                              cellClickFunction={viewBorrower}
                              showGlobalFilter
          />
        </div>
      </div>
    </div>
  )
}
