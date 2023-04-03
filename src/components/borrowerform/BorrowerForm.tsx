import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { PersonalInfo, personalInfoDefaults, LoanInfo, loanInfoDefaults } from '../../dbaccess/Interfaces/Interfaces';

export default function BorrowerForm() {
  const [validated, setValidated] = useState(false)
  const [personalData, setPersonalData] = useState<PersonalInfo>(personalInfoDefaults)
  const [loanData, setLoanData] = useState<LoanInfo>(loanInfoDefaults)

  const handleFormChange = (event: any) => {
    const namePair = event.target.name.split("_")

    if (namePair[0] === "personal") {
      setPersonalData(personalData => ({ ...personalData, [namePair[1]]: event.target.value}))
    }
    else if (namePair[0] === "loan") {
      setLoanData(loanData => ({ ...loanData, [namePair[1]]: event.target.value}))
    }
  }

  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    event.preventDefault();

    if (form.checkValidity() === false) {
      event.stopPropagation();

      setValidated(true);
      return
    }

    setValidated(false);
  };

  return (
    <div className="container flex-shrink-1 bg-dark-subtle p-4 ">
      <div className="card shadow border-0 mb-7 p-4 mt-5">
        <button onClick={()=> {console.log(personalData)}}>TEST</button>
        <div className="card-header bg-dark-subtle">
          <h5 className="mb-1">Add Borrower</h5>
        </div>
        <div className="p-3">
          <Form className="row gy-2" noValidate validated={validated} onSubmit={handleSubmit}>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h3 className="text-right">Personal Info</h3>
            </div>

            <Form.Group className="col-md-6" >
              <Form.Label className="fw-semibold">First Name</Form.Label>
              <Form.Control
                name="personal_firstName"
                defaultValue={personalData.firstName}
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
                name="personal_lastName"
                defaultValue={personalData.lastName}
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
                name="personal_address"
                defaultValue={personalData.address}
                onChange={handleFormChange}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                type="text"
                required
              />
              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-4" >
              <Form.Label className="fw-semibold">Province</Form.Label>
              <Form.Control
                name="personal_province"
                defaultValue={personalData.province}
                onChange={handleFormChange}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                type="text"
                required
              />
              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-4" >
              <Form.Label className="fw-semibold">Postal Code</Form.Label>
              <Form.Control
                name="personal_postalCode"
                defaultValue={personalData.postalCode}
                onChange={handleFormChange}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                type="text"
                required
              />
              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-4" >
              <Form.Label className="fw-semibold">Apt. #</Form.Label>
              <Form.Control
                disabled
                defaultValue={""}
                onChange={handleFormChange}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                type="text"
                required
              />
              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-6" >
              <Form.Label className="fw-semibold">Phone Number</Form.Label>
              <Form.Control
                name="personal_phoneNumber"
                defaultValue={personalData.phoneNumber}
                onChange={handleFormChange}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                type="Phone"
                required
              />
              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-6" >
              <Form.Label className="fw-semibold">Email</Form.Label>
              <Form.Control
                name="personal_email"
                defaultValue={personalData.email}
                onChange={handleFormChange}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                type="email"
                required
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
                name="loan_principal"
                defaultValue={""}
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
                name="loan_interest"
                defaultValue={""}
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
                name="loan_term"
                defaultValue={""}
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
                name="loan_startdate"
                defaultValue={""}
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
                name="loan_frequency"
                defaultValue={""}
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

            <Form.Group className="col-md-12 mt-4 mb-2" >
              <Form.Label className="fw-semibold">Remarks</Form.Label>
              <Form.Control
                name="personal_comments"
                defaultValue={personalData.comments}
                onChange={handleFormChange}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                as="textarea"
                style={{ height: '200px' }}
                required
              />
              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Button className="mt-4" variant="primary" type="submit">
              Add Borrower
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}
