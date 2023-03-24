import React from 'react'
import { parentPageState } from '../App';

interface Props {
  handleState: (params: parentPageState) => any;
}

export default function Navbar({handleState}: Props) {
  return (
    <>
      <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark shadow-lg">
        <div className="d-flex flex-column align-items-center align-items-sm-start px-4 pt-4 text-white min-vh-100">
          <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span className="fs-5 d-none d-sm-inline">Loan App</span>
          </a>
          <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">

            <li onClick={() => handleState(parentPageState.dashboard)}>
              <a href="#" className="nav-link align-middle px-0">
                <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline ">Dashboard</span>
              </a>
            </li>

            <li onClick={() => handleState(parentPageState.borrowerform)}>
              <a href="#" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Add Borrower</span>
              </a>
            </li>

            <li onClick={() => handleState(parentPageState.paymentarchive)}>
              <a href="#" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-cash"></i> <span className="ms-1 d-none d-sm-inline">Payment Archive</span>
              </a>
            </li>

            <li onClick={() => handleState(parentPageState.borrowerarchive)}>
              <a href="#" className="nav-link px-0 align-middle">
                <i className="fs-4 bi-archive"></i> <span className="ms-1 d-none d-sm-inline">Borrower Archive</span>
              </a>
            </li>

            <hr className="hr" style={{ width: "100%" }} />

            <li onClick={() => handleState(parentPageState.settings)}>
              <a href="#" className="nav-link px-0 align-middle">
                <i className="fs-4 bi bi-gear"></i> <span className="ms-1 d-none d-sm-inline">Settings</span>
              </a>
            </li>

          </ul>
        </div>
      </div>
    </>
  )
}
