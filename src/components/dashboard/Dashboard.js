import React from 'react'
import BorrowerTable from './BorrowerTable'


function Dashboard() {
  const testdata = {
    data: [{
      name: "Ramesh",
      nextpaymentdate: "Fadatare",
      paymentval: "$99.00"
    },
    {
      name: "Tom",
      nextpaymentdate: "Cruise",
      paymentval: "$99.00"
    },
    {
      name: "Tony",
      nextpaymentdate: "Stark",
      paymentval: "$99.00"
    },
    {
      name: "John",
      nextpaymentdate: "Cena",
      paymentval: "$99.00"
    }]
  }


  return (
    <>
      <div class="container flex-shrink-1 bg-dark-subtle p-4 ">
        <div class="row g-6 mb-6">
          <div class="col-xl-3 col-sm-6 col-12 p-3">
            <div class="card shadow border-0 h-100">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Commission</span>
                    <span class="h3 font-bold mb-0">$105.00</span>
                  </div>
                </div>
                <div class="mt-2 mb-0 text-sm">
                  <span class="badge badge-pill bg-success-subtle text-success me-2">
                    <i class="bi bi-arrow-up me-1"></i>$12.00
                  </span>
                  <span class="text-nowrap text-xs text-muted">For commissioner Terry</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 col-12 p-3">
            <div class="card shadow border-0 h-100">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Cash Out</span>
                    <span class="h3 font-bold mb-0">$4024.25</span>
                  </div>
                </div>
                <div class="mt-2 mb-0 text-sm">
                  <span class="badge badge-pill bg-success-subtle text-success me-2">
                    <i class="bi bi-plus me-1"></i>25
                  </span>
                  <span class="text-nowrap text-xs text-muted">Total more payments from everyone</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 col-12 p-3 ">
            <div class="card shadow border-0 h-100">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Profit</span>
                    <span class="h3 font-bold mb-0">$4750.90</span>
                  </div>
                </div>
                <div class="mt-2 mb-0 text-sm">
                  <span class="badge badge-pill bg-success-subtle text-success me-2">
                    <i class="bi bi-arrow-up me-1"></i>$250.20 (03/02)
                  </span>
                  <span class="text-nowrap text-xs text-muted">Last payment from John</span>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-sm-6 col-12 p-3">
            <div class="card shadow border-0 h-100">
              <div class="card-body">
                <div class="row">
                  <div class="col">
                    <span class="h6 font-semibold text-muted text-sm d-block mb-2">Next Payment</span>
                    <span class="h3 font-bold mb-0">April 2, 2022</span>
                  </div>
                </div>
                <div class="mt-2 mb-0 text-sm">
                  <span class="badge badge-pill bg-success-subtle text-success me-2">
                    <i class="bi bi-arrow-up me-1"></i>$250.22
                  </span>
                  <span class="text-nowrap text-xs text-muted">From John Doe</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="card shadow border-0 mb-7 p-2 mt-5">
          <div class="card-header bg-dark-subtle">
            <h5 class="mb-0">Borrowers</h5>
          </div>
          <div class="table-responsive">
            <BorrowerTable></BorrowerTable>
          </div>
        </div>
      </div>
    </>
  )
}



export default Dashboard

