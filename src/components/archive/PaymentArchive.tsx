import React from "react";
import FilterTableGeneric from "../generic/table/FilterTableGeneric";
import * as db from "../../dbaccess/PaymentArchiveUtils";

export default function PaymentArchive() {
  return (
    <div className="container flex-shrink-1 bg-dark-subtle p-4 ">
      <div className="card shadow border-0 mb-7 p-4 mt-5">
        <div className="card-header bg-dark-subtle rounded">
          <h5 className="mb-1">Payment Archive</h5>
        </div>
        <div className="mt-4 p-2">
          <FilterTableGeneric data={db.getAllArchivedPaymentsData()}
                              columns={db.getAllArchivedPaymentsColumns()}
                              showGlobalFilter
          />
        </div>
      </div>
    </div>
  )
}
