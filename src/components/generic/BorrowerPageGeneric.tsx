import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { PaymentInfo, paymentInfoDefaults, FullBorrowerInfo, } from '../../dbaccess/Interfaces/Interfaces';
import FilterTableGeneric from './table/FilterTableGeneric'
import { parentPageState } from '../App';

import * as db from '../../dbaccess/BorrowerPageUtils'


interface ReactTableProps {
  borrowerRowdata: FullBorrowerInfo;
  handleDashboardState: (newState: parentPageState, borrowerRowdata: FullBorrowerInfo) => any
  returnState?: parentPageState
}

enum Action {
  "add",
  "edit"
}

export default function BorrowerPageGeneric({ borrowerRowdata, handleDashboardState, returnState = parentPageState.dashboard }: ReactTableProps) {

  const [validated, setValidated] = useState(false); // Result when adding or editing payments
  const [intent, setIntent] = useState<Action>(); // Stores user intent when altering payments
  const [show, setShow] = useState(false); // Hooks for handling modal viewing
  const [paymentRowdata, setPaymentRowdata] = useState<PaymentInfo>(paymentInfoDefaults); // Stores row data from payment table
  const [formData, setFormData] = useState<PaymentInfo>(paymentInfoDefaults);

  const handleShow = (paymentRowdata: any) => {
    if (paymentRowdata !== null) {
      setPaymentRowdata(paymentRowdata.original);
      setIntent(Action.edit)
      setFormData(paymentRowdata.original)
    }
    else {
      setPaymentRowdata(paymentInfoDefaults);
      setIntent(Action.add)
    }

    setValidated(false)
    setShow(true)
  }

  const handleClose = () => {
    setPaymentRowdata(paymentInfoDefaults)
    setFormData(paymentInfoDefaults)
    setShow(false)
  }

  const handleChange = (event: any) => {
    const name = event.target.name
    let val = event.target.value
    if (event.target.type === "checkbox") val = event.target.checked

    setFormData(formData => ({ ...formData, [name]: val }))
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

    setFormData(paymentInfoDefaults)
  };

  return (
    <div className="card shadow border-0 ps-4 pe-4">
      <div className="rounded bg-white mt-5">
        <button className="btn btn-primary p-2" onClick={() => { handleDashboardState(returnState, null) }}>
          <i className="bi bi-arrow-90deg-left" /> Go Back
        </button>
        <div className="row">
          <div className="col border-right">
            <div className="p-2 py-5">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-right">Personal Info</h3>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">First Name</label><input type="text" className="form-control" placeholder={borrowerRowdata.firstName} /></div>
                <div className="col-md-6"><label className="labels">Last Name </label><input type="text" className="form-control" placeholder={borrowerRowdata.lastName} /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder={borrowerRowdata.address} /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-4"><label className="labels">Province</label><input type="text" className="form-control" placeholder={borrowerRowdata.province} /></div>
                <div className="col-md-4"><label className="labels">Postal Code</label><input type="text" className="form-control" placeholder={borrowerRowdata.postalCode} /></div>
                <div className="col-md-4"><label className="labels">Apt. #</label><input type="text" className="form-control" placeholder={borrowerRowdata.address} /></div>
              </div>

              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Phone Number</label><input type="text" className="form-control" placeholder={borrowerRowdata.phoneNumber} /></div>
                <div className="col-md-6"><label className="labels">Email</label><input type="text" className="form-control" placeholder={borrowerRowdata.email} /></div>
              </div>
              <hr style={{ borderTop: "3px solid" }} />
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h3 className="text-right">Loan Info</h3>
              </div>
              <div className="row mt-2">
                <div className="col-md-3"><label className="labels">Principal</label><input type="text" className="form-control" placeholder={borrowerRowdata.principal.toString()} disabled /></div>
                <div className="col-md-3"><label className="labels">Interest (%)</label><input type="text" className="form-control" placeholder={borrowerRowdata.interest.toString()} disabled /></div>
                <div className="col-md-3"><label className="labels">Term</label><input type="text" className="form-control" placeholder={borrowerRowdata.term.toString()} disabled /></div>
                <div className="col-md-3"><label className="labels">P.P.P</label><input type="text" className="form-control" placeholder={borrowerRowdata.paymentperperiod.toString()} disabled /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Start Date</label><input type="text" className="form-control" placeholder={borrowerRowdata.startdate} disabled /></div>
                <div className="col-md-6"><label className="labels">Frequency</label><input type="text" className="form-control" placeholder={borrowerRowdata.frequency} disabled /></div>
              </div>
              <div className="row mt-2">
                <div className="col-md-6"><label className="labels">Commissioner</label><input type="text" className="form-control" placeholder={borrowerRowdata.commissioner} disabled /></div>
                <div className="col-md-6"><label className="labels">Commission Interest (%)</label><input type="text" className="form-control" placeholder={borrowerRowdata.interest.toString()} disabled /></div>
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

              <FilterTableGeneric data={db.getBorrowerPaymentsData(borrowerRowdata)}
                                  columns={db.getBorrowerPaymentsColumns()}
                                  cellClickFunction={handleShow}
                                  sortState={[{
                                    id: "paymentdate",
                                    desc: false
                                  }]}/>

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
                      <Form.Control
                        name="paymentdate"
                        defaultValue={new Date(paymentRowdata.paymentdate).toISOString().substring(0, 10)}
                        onChange={handleChange}
                        onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                        type="date"
                        required
                      />
                      <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">Please enter a valid date</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Payment Amount</Form.Label>
                      <Form.Control
                        name="paymentval"
                        defaultValue={paymentRowdata.paymentval}
                        onChange={handleChange}
                        onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                        min={0.00}
                        type="number"
                        required
                      />
                      <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
                      <Form.Control.Feedback type="invalid">Please enter a valid payment amount ({">"}0)</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                      <Form.Check defaultChecked={(paymentRowdata.paymentstatus) ? true : false}
                        name="paymentstatus"
                        type="checkbox"
                        label="Paid"
                        onChange={handleChange}
                        onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                      />
                    </Form.Group>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant='danger'>
                      Delete Payment
                    </Button>
                    <Button variant="primary" type="submit">
                      Save Payment
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

