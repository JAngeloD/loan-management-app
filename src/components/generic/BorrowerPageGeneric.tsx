import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import FilterTableGeneric from './table/FilterTableGeneric'
import DebouncedInput from './table/DebouncedInput'

import * as db from '../../dbaccess/BorrowerPageUtils'

import { PersonalInfo, LoanInfo, PaymentInfo } from '../../dbaccess/Interfaces/Interfaces';
import { BorrowerOverview } from '../../dbaccess/DashboardUtils';

interface ReactTableProps {
  borrowerRowdata: BorrowerOverview;
  handleDashboardState: (newState: string, borrowerRowdata: object) => any
}

enum Action {
  "add",
  "edit"
}

export default function BorrowerPageGeneric({ borrowerRowdata, handleDashboardState }: ReactTableProps) {

  //Stores data objects for the "Personal" and "Loan" sections in the page
  let personalInfo: PersonalInfo = db.getBorrowerPersonalInfo(borrowerRowdata)
  let loanInfo: LoanInfo = db.getBorrowerLoanInfo(borrowerRowdata)

  //Handles validation for form in modal popup
  const defaultPaymentInfo = {
    paymentID: "1",
    paymentdate: new Date().toISOString().split('T')[0],
    paymentval: 0,
    paymentstatus: false,
  }
  const [validated, setValidated] = useState(false); // Result when adding or editing payments
  const [intent, setIntent] = useState<Action>(); // Stores user intent when altering payments
  const [show, setShow] = useState(false); // Hooks for handling modal viewing
  const [paymentRowdata, setPaymentRowdata] = useState<PaymentInfo>(defaultPaymentInfo); // Stores row data from payment table
  const [formData, setFormData] = useState<PaymentInfo>(defaultPaymentInfo);

  const handleShow = (paymentRowdata: any) => {
    if (paymentRowdata !== null) {
      setPaymentRowdata(paymentRowdata.original);
      setIntent(Action.edit)
      setFormData(paymentRowdata.original)
    }
    else {
      setPaymentRowdata(defaultPaymentInfo);
      setIntent(Action.add)
    }

    setValidated(false)
    setShow(true)
  }

  const handleClose = () => {
    setPaymentRowdata(defaultPaymentInfo)
    setFormData(defaultPaymentInfo)
    setShow(false)
  }

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();

      setValidated(true);
    }
    else {
      switch (intent) {
        case Action.add:
          db.addPaymentToBorrower();
          break;
        case Action.edit:
          db.editPaymentFromBorrower();
          break;
      }

      console.log(formData)

      setValidated(false);
      setShow(false);
    }

    setFormData(defaultPaymentInfo)
  };

  return (
    <div className="card shadow border-0 ps-4 pe-4">
      <div className="rounded bg-white mt-5">
        <button className="btn btn-primary p-2" onClick={() => { handleDashboardState("viewdashboard", null) }}>
          <i className="bi bi-arrow-90deg-left" /> Go Back
        </button>
        <div className="row">
          <div className="col border-right">
            <div className="p-2 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-right">Personal Info</h3>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">First Name</label><input type="text" className="form-control" placeholder={personalInfo.firstName} /></div>
                <div className="col-md-6"><label className="labels">Last Name </label><input type="text" className="form-control" placeholder={personalInfo.lastName} /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder={personalInfo.address} /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4"><label className="labels">Province</label><input type="text" className="form-control" placeholder={personalInfo.province} /></div>
                <div className="col-md-4"><label className="labels">Postal Code</label><input type="text" className="form-control" placeholder={personalInfo.postalCode} /></div>
                <div className="col-md-4"><label className="labels">Apt. #</label><input type="text" className="form-control" placeholder={personalInfo.address} /></div>
              </div>

              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Phone Number</label><input type="text" className="form-control" placeholder={personalInfo.phoneNumber} /></div>
                <div className="col-md-6"><label className="labels">Email</label><input type="text" className="form-control" placeholder={personalInfo.email} /></div>
              </div>
              <hr style={{ borderTop: "3px solid" }} />
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-right">Loan Info</h3>
              </div>
              <div className="row mt-2">
                <div className="col-md-3"><label className="labels">Principal</label><input type="text" className="form-control" placeholder={loanInfo.principal} disabled /></div>
                <div className="col-md-3"><label className="labels">Interest (%)</label><input type="text" className="form-control" placeholder={loanInfo.interest} disabled /></div>
                <div className="col-md-3"><label className="labels">Term</label><input type="text" className="form-control" placeholder={loanInfo.term} disabled /></div>
                <div className="col-md-3"><label className="labels">P.P.P</label><input type="text" className="form-control" placeholder={loanInfo.paymentperperiod} disabled /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Start Date</label><input type="text" className="form-control" placeholder={loanInfo.startdate} disabled /></div>
                <div className="col-md-6"><label className="labels">Frequency</label><input type="text" className="form-control" placeholder={loanInfo.frequency} disabled /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Commissioner</label><input type="text" className="form-control" placeholder={loanInfo.commissioner} disabled /></div>
                <div className="col-md-6"><label className="labels">Commission Interest (%)</label><input type="text" className="form-control" placeholder={loanInfo.interest} disabled /></div>
              </div>
              <div className="mt-5"><button className="btn btn-primary profile-button" type="button">Save Borrower Info</button></div>
            </div>
          </div>
          <div className="col">
            <div className="p-2 py-5">

              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-right">Payments</h3>
                <Button variant="primary" onClick={() => { handleShow(null) }}>Add</Button>
              </div>

              <FilterTableGeneric data={db.getBorrowerPaymentsData()} columns={db.getBorrowerPaymentsColumns()} cellClickFunction={handleShow} />

              <Modal
                show={show}
                onHide={handleClose}
                className="p-5"
                backdrop="static"
                keyboard={false}
                onEnter={null}
              >
                <Modal.Header closeButton>
                  <Modal.Title>{intent === Action.add ? "Add Payment" : "Edit Payment"}</Modal.Title>
                </Modal.Header>

                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                  <Modal.Body>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Payment Date</Form.Label>
                      <DebouncedInput
                        value={new Date(paymentRowdata.paymentdate).toISOString().substring(0, 10)}
                        onChange={(e) => setFormData(formData => ({ ...formData, paymentdate: e.toString() }))}
                        onKeyDown={(e) => {e.key === 'Enter' && e.preventDefault()}}
                        type="date"
                        useReactBTFormControl = {true}
                        required
                      />
                      <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">Please enter a valid date</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Payment Amount</Form.Label>
                      <DebouncedInput
                        value={paymentRowdata.paymentval}
                        onChange={(e) => setFormData(formData => ({ ...formData, paymentval: parseFloat(e.toString())}))}
                        onKeyDown={(e) => {e.key === 'Enter' && e.preventDefault()}}
                        min= {0.00}
                        type="number"
                        useReactBTFormControl = {true}
                        required
                      />
                      <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">Please enter a valid payment amount ({">"}0)</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check defaultChecked={(paymentRowdata.paymentstatus) ? true : false}
                        type="checkbox"
                        label="Paid"
                        onChange={(e) => setFormData(formData => ({ ...formData, paymentstatus: e.target.checked }))}
                        onKeyDown={(e) => {e.key === 'Enter' && e.preventDefault()}}
                      />
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" type="submit">
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Form>
              </Modal>

            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

