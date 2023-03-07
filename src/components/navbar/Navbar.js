import React from 'react'

function Navbar() {
  return (
    <>
      <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark shadow-lg">
        <div class="d-flex flex-column align-items-center align-items-sm-start px-4 pt-4 text-white min-vh-100">
          <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
            <span class="fs-5 d-none d-sm-inline">Loan App</span>
          </a>
          <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
            <li onClick={() => {

            }}>
              <a href="#" class="nav-link align-middle px-0">
                <i class="fs-4 bi-house"></i> <span class="ms-1 d-none d-sm-inline ">Dashboard</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-people"></i> <span class="ms-1 d-none d-sm-inline">Add Borrower</span>
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-0 align-middle">
                <i class="fs-4 bi-book"></i> <span class="ms-1 d-none d-sm-inline">Archive</span>
              </a>
            </li>
            <hr class="hr" style={{ width: "100%" }} />
            <li>
              <a href="#" class="nav-link px-0 align-middle">
                <i class="fs-4 bi bi-gear"></i> <span class="ms-1 d-none d-sm-inline">Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar
