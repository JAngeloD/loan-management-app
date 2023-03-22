import React from 'react'
import FilterTableGeneric from '../generic/table/FilterTableGeneric'
import * as db from '../../dbaccess/BorrowerPageUtils'




export default function BorrowerPageGeneric({ rowdata, handleDashboardState, setrowdata }) {
  return (
    <div className="card shadow border-0 ps-4 pe-4">
      <div className="rounded bg-white mt-5">
        <button className="btn btn-primary p-2" onClick={() => { handleDashboardState("viewdashboard"); setrowdata("") }}>
          <i className="bi bi-arrow-90deg-left" /> Go Back
        </button>
        <div className="row">
          <div className="col border-right">
            <div className="p-2 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-right">Personal Info</h3>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">First Name</label><input type="text" class="form-control" placeholder={"N/A"} /></div>
                <div className="col-md-6"><label className="labels">Last Name </label><input type="text" className="form-control" placeholder="N/A" /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="N/A" /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4"><label className="labels">Province</label><input type="text" className="form-control" placeholder="N/A" /></div>
                <div className="col-md-4"><label className="labels">Address</label><input type="text" className="form-control" placeholder="N/A" /></div>
                <div className="col-md-4"><label className="labels">Postal Code</label><input type="text" className="form-control" placeholder="N/A" /></div>
              </div>

              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Phone Number</label><input type="text" className="form-control" placeholder="N/A" /></div>
                <div className="col-md-6"><label className="labels">Email</label><input type="text" className="form-control" placeholder="N/A" /></div>
              </div>
              <hr style={{ borderTop: "3px solid" }} />
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-right">Loan Info</h3>
              </div>
              <div className="row mt-2">
                <div className="col-md-3"><label className="labels">Principal</label><input type="text" className="form-control" placeholder="N/A" disabled /></div>
                <div className="col-md-3"><label className="labels">Interest (%)</label><input type="text" className="form-control" placeholder="N/A" disabled /></div>
                <div className="col-md-3"><label className="labels">Term</label><input type="text" className="form-control" placeholder="N/A" disabled /></div>
                <div className="col-md-3"><label className="labels">P.P.P</label><input type="text" className="form-control" placeholder="N/A" disabled /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Start Date</label><input type="text" className="form-control" placeholder="N/A" disabled /></div>
                <div className="col-md-6"><label className="labels">Frequency</label><input type="text" className="form-control" placeholder="N/A" disabled /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Commissioner</label><input type="text" className="form-control" placeholder="N/A" disabled /></div>
                <div className="col-md-6"><label className="labels">Commission Interest (%)</label><input type="text" className="form-control" placeholder="N/A" disabled /></div>
              </div>
              <div className="mt-5"><button className="btn btn-primary profile-button" type="button">Save Borrower Info</button></div>
            </div>
          </div>
          <div className="col">
            <div className="p-2 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-right">Payments</h3>
              </div>
              <FilterTableGeneric data={db.getBorrowerPaymentsData()}
                columns={db.getBorrowerPaymentsColumns()} />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

