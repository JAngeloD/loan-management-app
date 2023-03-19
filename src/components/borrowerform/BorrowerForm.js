import React from 'react'

function BorrowerForm() {
  return (
    <>
      <div className="container flex-shrink-1 bg-dark-subtle p-4 ">
        <div className="card shadow border-0 mb-7 p-4 mt-5">
          <div className="card-header bg-dark-subtle">
            <h5 className="mb-1">Add Borrower</h5>
          </div>
          <div className="p-3 fs-5 fw-semibold">
            <form className="">
              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label id="name-label" for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter borrower's name" className="form-control bg-secondary-subtle mt-1 p-3" required />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label for="startdate">Starting date</label>
                    <input type="date" name="startdate" id="startdate" className="form-control bg-secondary-subtle mt-1 p-3"  required />
                  </div>
                </div>
              </div>

              <div className="row">
              <div className="col-md-6">
                  <div className="form-group">
                    <label for="loanamount">Loan Amount</label>
                    <input type="number" name="loanamount" id="loanamount" min="1" className="form-control bg-secondary-subtle mt-1 p-3" placeholder="$0.00" />
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label for="term">Term</label>
                    <input type="number" name="term" id="term" min="1" className="form-control bg-secondary-subtle mt-1 p-3" placeholder="0"/>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label>Frequency</label>
                    <select id="dropdown" name="frequency" className="form-control bg-secondary-subtle mt-1 p-3" required>
                      <option disabled selected value>Select</option>
                      <option value="monthly">Monthly</option>
                      <option value="biweekly">Bi-Weekly</option>
                      <option value="biweekly">Weekly</option>
                      <option value="onetime">One-time</option>
                      <option value="balloon">One-time (balloon)</option>
                    </select>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label for="interest">Interest</label>
                    <input type="number" name="interest" id="interest" min="1" max="100" className="form-control bg-secondary-subtle mt-1 p-3 "  placeholder="#%" />
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-12 mt-2">
                  <div className="form-group">
                    <label>Remarks</label>
                    <textarea id="remark" className="form-control bg-secondary-subtle mt-1 p-3" name="remark" placeholder="Enter any remarks for this borrower..." style={{height: "200px"}}></textarea>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 mt-4">
                  <button type="submit" id="submit" className="btn btn-primary btn-block">Add</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default BorrowerForm
