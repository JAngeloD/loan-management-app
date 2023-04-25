import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { FullBorrowerInfo, fullBorrowerInfoDefaults } from '../../dbaccess/Interfaces/Interfaces';
import { AddBorrower } from '../../dbaccess/BorrowerFormUtils'

interface BorrowerFormProps {
  borrowerRowdata?: FullBorrowerInfo;
}

export const BorrowerFormTemplate = ({ borrowerRowdata = fullBorrowerInfoDefaults }: BorrowerFormProps) => {
  const [validated, setValidated] = useState(false)
  const [borrowerData, setBorrowerData] = useState<FullBorrowerInfo>(borrowerRowdata)

  const handleFormChange = (event: any) => {
    setBorrowerData(borrowerData => ({ ...borrowerData, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();

      setValidated(true);
      return
    }

    AddBorrower(borrowerData)

    setValidated(false);
  };

  return (
    <Form className="row gy-2" noValidate validated={validated} onSubmit={handleSubmit}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="text-right">Personal Info</h3>
      </div>

      <Form.Group className="col-md-6" >
        <Form.Label className="fw-semibold">First Name</Form.Label>
        <Form.Control
          name="firstName"
          defaultValue={borrowerData.firstName}
          onChange={handleFormChange}
          onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
          type="text"
          required
        />
        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="col-md-6" >
        <Form.Label className="fw-semibold">Last Name</Form.Label>
        <Form.Control
          name="lastName"
          defaultValue={borrowerData.lastName}
          onChange={handleFormChange}
          onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
          type="text"
          required
        />
        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="col-md-12" >
        <Form.Label className="fw-semibold">Address</Form.Label>
        <Form.Control
          name="address"
          defaultValue={borrowerData.address}
          onChange={handleFormChange}
          onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
          type="text"
        />
        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="col-md-6" >
        <Form.Label className="fw-semibold">Province</Form.Label>
        <Form.Control
          name="province"
          defaultValue={borrowerData.province}
          onChange={handleFormChange}
          onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
          type="text"
        />
        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="col-md-6" >
        <Form.Label className="fw-semibold">Postal Code</Form.Label>
        <Form.Control
          name="postalCode"
          defaultValue={borrowerData.postalCode}
          onChange={handleFormChange}
          onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
          type="text"
        />
        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="col-md-6" >
        <Form.Label className="fw-semibold">Phone Number</Form.Label>
        <Form.Control
          name="phoneNumber"
          defaultValue={borrowerData.phoneNumber}
          onChange={handleFormChange}
          onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
          type="Phone"
        />
        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="col-md-6" >
        <Form.Label className="fw-semibold">Email</Form.Label>
        <Form.Control
          name="email"
          defaultValue={borrowerData.email}
          onChange={handleFormChange}
          onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
          type="email"
        />
        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <hr className="mt-4" style={{ borderTop: "3px solid" }} />
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3 className="text-right">Loan Info</h3>
      </div>

      <Form.Group className="col-md-4" >
        <Form.Label className="fw-semibold">Loan Amount</Form.Label>
        <Form.Control
          name="principal"
          defaultValue={borrowerData.principal}
          onChange={handleFormChange}
          onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
          type="number"
          required
        />
        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="col-md-4" >
        <Form.Label className="fw-semibold">Interest</Form.Label>
        <Form.Control
          name="interest"
          defaultValue={borrowerData.interest}
          onChange={handleFormChange}
          onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
          type="number"
          min={0.00}
          max={100.00}
          step={0.01}
          required
        />
        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="col-md-4" >
        <Form.Label className="fw-semibold">Term</Form.Label>
        <Form.Control
          name="term"
          defaultValue={borrowerData.term}
          onChange={handleFormChange}
          onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
          type="number"
          min={1}
          required
        />
        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="col-md-6" >
        <Form.Label className="fw-semibold">Starting date</Form.Label>
        <Form.Control
          name="startdate"
          defaultValue={borrowerData.startdate}
          onChange={handleFormChange}
          onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
          type="date"
          required
        />
        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="col-md-6">
        <Form.Label className="fw-semibold">Frequency</Form.Label>
        <Form.Select className="col-md-6"
          name="frequency"
          defaultValue={((borrowerRowdata === fullBorrowerInfoDefaults) ? "Select" : borrowerData.frequency)}
          onChange={handleFormChange}
          required>
          <option disabled defaultValue="">Select</option>
          <option defaultValue="monthly">Monthly</option>
          <option defaultValue="biweekly">Bi-Weekly</option>
          <option defaultValue="biweekly">Weekly</option>
          <option defaultValue="onetime">One-time</option>
          <option defaultValue="balloon">One-time (balloon)</option>
        </Form.Select>

        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="col-md-6" >
        <Form.Label className="fw-semibold">Commissioner</Form.Label>
        <Form.Control
          name="commissioner"
          defaultValue={borrowerData.commissioner}
          onChange={handleFormChange}
          onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
          type="text"
        />
        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="col-md-6" >
        <Form.Label className="fw-semibold">Commissioner's Interest</Form.Label>
        <Form.Control
          name="commissioninterest"
          defaultValue={borrowerData.commissioninterest}
          onChange={handleFormChange}
          onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
          type="number"
          min={0.00}
          max={100.00}
          step={0.01}
        />
        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="col-md-12 mt-4 mb-2" >
        <Form.Label className="fw-semibold">Remarks</Form.Label>
        <Form.Control
          name="comments"
          defaultValue={borrowerData.comments}
          onChange={handleFormChange}
          onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
          as="textarea"
          style={{ height: '200px' }}
        />
        <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
        <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
      </Form.Group>

      <Button className="mt-4" variant="primary" type="submit">
        {((borrowerRowdata === fullBorrowerInfoDefaults) ? "Add Borrower" : "Edit Borrower")}
      </Button>
    </Form>
  )
}


export default function BorrowerForm() {

  return (
    <div className="container flex-shrink-1 bg-dark-subtle p-4 ">
      <div className="card shadow border-0 mb-7 p-4 mt-5">
        <div className="card-header bg-dark-subtle">
          <h5 className="mb-1">Add Borrower</h5>
        </div>
        <div className="p-3">
          <BorrowerFormTemplate/>
        </div>
      </div>
    </div>
  )
}
