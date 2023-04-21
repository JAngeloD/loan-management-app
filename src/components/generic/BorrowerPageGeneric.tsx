import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { PaymentInfo, paymentInfoDefaults, FullBorrowerInfo, } from '../../dbaccess/Interfaces/Interfaces';
import FilterTableGeneric from './table/FilterTableGeneric'
import { parentPageState } from '../App';

import * as db from '../../dbaccess/BorrowerPageUtils'
import { BorrowerFormTemplate } from '../borrowerform/BorrowerForm';


interface ReactTableProps {
  borrowerRowdata: FullBorrowerInfo;
  handleDashboardState: (newState: parentPageState, borrowerRowdata: FullBorrowerInfo) => any
  returnState?: parentPageState
}

type PaymentsSectionProps = Pick<ReactTableProps, "borrowerRowdata">

enum Action {
  "add",
  "edit"
}

const PaymentsSection = ({borrowerRowdata} : PaymentsSectionProps) => {

  const [validated, setValidated] = useState(false); // Result when adding or editing payments
  const [intent, setIntent] = useState<Action>(); // Stores user intent when altering payments
  const [show, setShow] = useState(false); // Hooks for handling modal viewing
  const [paymentRowdata, setPaymentRowdata] = useState<PaymentInfo>(paymentInfoDefaults); // Stores row data from payment table
  const [paymentsFormData, setPaymentsFormData] = useState<PaymentInfo>(paymentInfoDefaults);

  const handleShow = (paymentRowdata: any) => {
    if (paymentRowdata !== null) {
      setPaymentRowdata(paymentRowdata.original);
      setIntent(Action.edit)
      setPaymentsFormData(paymentRowdata.original)
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
    setPaymentsFormData(paymentInfoDefaults)
    setShow(false)
  }

  const handleChange = (event: any) => {
    const name = event.target.name
    let val = event.target.value
    if (event.target.type === "checkbox") val = event.target.checked

    setPaymentsFormData(paymentsFormData => ({ ...paymentsFormData, [name]: val }))
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

      console.log(paymentsFormData)

      setValidated(false);
      setShow(false);
    }

    setPaymentsFormData(paymentInfoDefaults)
  };

  return (


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
        }]} />

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
  )
}

export default function BorrowerPageGeneric({ borrowerRowdata, handleDashboardState, returnState = parentPageState.dashboard }: ReactTableProps) {
  return (
    <div className="card shadow border-0 ps-4 pe-4">
      <div className="rounded bg-white mt-5">
        <button className="btn btn-primary p-2" onClick={() => { handleDashboardState(returnState, null) }}>
          <i className="bi bi-arrow-90deg-left" /> Go Back
        </button>
        <div className="row">
          <div className="col border-right">
            <div className="p-2 py-5">
              <BorrowerFormTemplate borrowerRowdata={borrowerRowdata}/>
            </div>
          </div>
          <div className="col">
            <PaymentsSection borrowerRowdata={borrowerRowdata}/>
          </div>
        </div>
      </div>
    </div >
  )
}

