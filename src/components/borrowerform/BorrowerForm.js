import React from 'react'

function BorrowerForm() {
  return (
    <>
      <div class="container flex-shrink-1 bg-dark-subtle p-4 ">
        <div class="card shadow border-0 mb-7 p-4 mt-5">
          <div class="card-header bg-dark-subtle">
            <h5 class="mb-1">Add Borrower</h5>
          </div>
          <div class="p-3">
            <form id="survey-form">

              <div class="row">

                <div class="col-md-6">
                  <div class="form-group">
                    <label id="name-label" for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter borrower's name" class="form-control" required />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label id="email-label" for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" class="form-control" required />
                  </div>
                </div>

              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label id="name-label" for="name">Name</label>
                    <input type="text" name="name" id="name" placeholder="Enter borrower's name" class="form-control" required />
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label id="email-label" for="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" class="form-control" required />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label>Frequency</label>
                    <select id="dropdown" name="role" class="form-control" required>
                      <option disabled selected value>Select</option>
                      <option value="monthly">Monthly</option>
                      <option value="biweekly">Bi-Weekly</option>
                      <option value="biweekly">Weekly</option>
                      <option value="onetime">One-time</option>
                      <option value="balloon">One-time (balloon)</option>
                    </select>
                  </div>
                </div>

                <div class="col-md-6">
                  <div class="form-group">
                    <label id="number-label" for="number">Interest <small>(optional)</small></label>
                    <input type="number" name="age" id="number" min="10" max="99" class="form-control" placeholder="Age" />
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-12 mt-2">
                  <div class="form-group">
                    <label>Remarks</label>
                    <textarea id="remark" class="form-control" name="remark" placeholder="Enter any remarks for this borrower..."></textarea>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-md-4 mt-4">
                  <button type="submit" id="submit" class="btn btn-primary btn-block">Submit Survey</button>
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
