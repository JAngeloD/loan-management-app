import React from 'react'
import FilterTableGeneric from '../generic/FilterTableGeneric'
import * as db from '../../dbaccess/DashboardUtils'

export default function BorrowerPageGeneric({ rowdata, handleDashboardState, setrowdata }) {
  return (
    <div className="card shadow border-0 ps-4 pe-4">
      <div className="container rounded bg-white mt-5">
        <button className="btn btn-primary p-2" onClick={() => { handleDashboardState("viewdashboard"); setrowdata("") }}>
          <i className="bi bi-arrow-90deg-left" /> Go Back
        </button>
        <div className="row">
          <div className="col border-right">
            <div className="p-2 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-right">Profile Settings</h3>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Name</label><input type="text" class="form-control" placeholder={"N/A"} /></div>
                <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" placeholder="N/A" value="" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="N/A" value="" /></div>
                <div className="col-md-12"><label className="labels">Address Line 1</label><input type="text" className="form-control" placeholder="N/A" value="" /></div>
                <div className="col-md-12"><label className="labels">Address Line 2</label><input type="text" className="form-control" placeholder="N/A" value="" /></div>
                <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="N/A" value="" /></div>
                <div className="col-md-12"><label className="labels">State</label><input type="text" className="form-control" placeholder="N/A" value="" /></div>
                <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" placeholder="N/A" value="" /></div>
                <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="N/A" value="" /></div>
                <div className="col-md-12"><label className="labels">Education</label><input type="text" className="form-control" placeholder="N/A" value="" /></div>
              </div>
              <div className="row mt-3">
                <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="N/A" value="" /></div>
                <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" placeholder="N/A" value="" /></div>
              </div>
              <div className="mt-5"><button className="btn btn-primary profile-button" type="button">Save Profile</button></div>
            </div>
          </div>
          <div className="col">
            <div className="p-2 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-right">Payments</h3>
              </div>
              <FilterTableGeneric data={db.getBorrowerOverViewListData()}
                columns={db.getBorrowerOverViewListColumns()} />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

