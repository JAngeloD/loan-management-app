import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap';
import { PersonalInfo, personalInfoDefaults, LoanInfo, loanInfoDefaults } from '../../dbaccess/Interfaces/Interfaces';
import DebouncedInput from '../generic/table/DebouncedInput';

export default function BorrowerForm() {
  const [validated, setValidated] = useState(false)
  const [personalData, setPersonalData] = useState<PersonalInfo>(personalInfoDefaults)
  const [loanData, setLoanData] = useState<LoanInfo>(loanInfoDefaults)

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
              <DebouncedInput
                value={personalData.firstName}
                onChange={(e) => setPersonalData(personalData => ({ ...personalData, firstName: e.toString()}))}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                type="text"
                required
              />
              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-6" >
              <Form.Label className="fw-semibold">Last Name</Form.Label>
              <DebouncedInput
                value={personalData.lastName}
                onChange={(e) => setPersonalData(personalData => ({ ...personalData, lastName: e.toString()}))}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                type="text"
                required
              />
              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-12" >
              <Form.Label className="fw-semibold">Address</Form.Label>
              <DebouncedInput
                value={personalData.address}
                onChange={(e) => setPersonalData(personalData => ({ ...personalData, address: e.toString()}))}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                type="text"
                required
              />
              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-4" >
              <Form.Label className="fw-semibold">Province</Form.Label>
              <DebouncedInput
                value={personalData.province}
                onChange={(e) => setPersonalData(personalData => ({ ...personalData, province: e.toString()}))}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                type="text"
                required
              />
              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-4" >
              <Form.Label className="fw-semibold">Postal Code</Form.Label>
              <DebouncedInput
                value={personalData.postalCode}
                onChange={(e) => setPersonalData(personalData => ({ ...personalData, postalCode: e.toString()}))}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                type="text"
                required
              />
              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-4" >
              <Form.Label className="fw-semibold">Apt. #</Form.Label>
              <DebouncedInput
                disabled
                value={""}
                onChange={(e) => { }}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                type="text"
                required
              />
              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-6" >
              <Form.Label className="fw-semibold">Phone Number</Form.Label>
              <DebouncedInput
                value={personalData.phoneNumber}
                onChange={(e) => setPersonalData(personalData => ({ ...personalData, phoneNumber: e.toString()}))}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                type="phoneNumber"
                required
              />
              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-6" >
              <Form.Label className="fw-semibold">Email</Form.Label>
              <DebouncedInput
                value={personalData.email}
                onChange={(e) => setPersonalData(personalData => ({ ...personalData, email: e.toString()}))}
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
              <DebouncedInput
                value={""}
                onChange={(e) => setLoanData(loanData => ({ ...loanData, principal: parseFloat(e.toString())}))}
                onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }}
                type="number"
                required
              />
              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-4" >
              <Form.Label className="fw-semibold">Interest</Form.Label>
              <DebouncedInput
                value={""}
                onChange={(e) => setLoanData(loanData => ({ ...loanData, interest: parseFloat(e.toString())}))}
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
              <DebouncedInput
                value={""}
                onChange={(e) => setLoanData(loanData => ({ ...loanData, term: parseInt(e.toString())}))}
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
              <DebouncedInput
                value={""}
                onChange={(e) => setLoanData(loanData => ({ ...loanData, startdate: e.toString()}))}
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
                defaultValue={""}
                onChange={(e) => setLoanData(loanData => ({ ...loanData, frequency: e.toString()}))}
                required>
                <option disabled value="">Select</option>
                <option value="monthly">Monthly</option>
                <option value="biweekly">Bi-Weekly</option>
                <option value="biweekly">Weekly</option>
                <option value="onetime">One-time</option>
                <option value="balloon">One-time (balloon)</option>
              </Form.Select>

              <Form.Control.Feedback type="valid">Valid</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">Invalid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="col-md-12 mt-4 mb-2" >
              <Form.Label className="fw-semibold">Remarks</Form.Label>
              <DebouncedInput
                value={personalData.comments}
                onChange={(e) => setPersonalData(personalData => ({ ...personalData, comments: e.toString()}))}
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
