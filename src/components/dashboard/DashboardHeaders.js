import React from 'react'
import '../../dbaccess/DashboardUtils'

export default function () {
  return (
    <>
      <div class="row g-6 mb-6">
        <div class="col-xl-3 col-sm-6 col-12 p-3">
          <div class="card shadow border-0 h-100">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <span class="h6 font-semibold text-muted text-sm d-block mb-2">Commission</span>
                  <span class="h3 font-bold mb-0">{getTotalCommissionAmount()}</span>
                </div>
              </div>
              <div class="mt-2 mb-0 text-sm">
                <span class="badge badge-pill bg-success-subtle text-success me-2">
                  <i class="bi bi-arrow-up me-1"></i>{getLastCommissionAmount()}
                </span>
                <span class="text-nowrap text-xs text-muted">For {getLastCommissionName()}</span>
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
                  <span class="h3 font-bold mb-0">{getCashOut()}</span>
                </div>
              </div>
              <div class="mt-2 mb-0 text-sm">
                <span class="badge badge-pill bg-success-subtle text-success me-2">
                  <i class="bi bi-plus me-1"></i>{getPaymentsLeft()}
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
                  <span class="h3 font-bold mb-0">{getProfit()}</span>
                </div>
              </div>
              <div class="mt-2 mb-0 text-sm">
                <span class="badge badge-pill bg-success-subtle text-success me-2">
                  <i class="bi bi-arrow-up me-1"></i>{getLastInterestAmount()} ({getLastPaymentDate()})
                </span>
                <span class="text-nowrap text-xs text-muted">Last payment from {getLastPaymentBorrower()}</span>
              </div>
            </div>
          </div>
        </div>

        <div class="col-xl-3 col-sm-6 col-12 p-3">
          <div class="card shadow border-0 h-100">
            <div class="card-body">
              <div class="row">
                <div class="col">
                  <span class="h6 font-semibold text-muted text-sm d-block mb-2">Money on hand</span>
                  <span class="h3 font-bold mb-0">{getMoneyOnHand()}</span>
                </div>
              </div>
              <div class="mt-2 mb-0 text-sm">
                <span class="badge badge-pill bg-success-subtle text-success me-2">
                  <i class="bi bi-arrow-up me-1"></i>{getLastPaymentAmount()}
                </span>
                <span class="text-nowrap text-xs text-muted">From {getLastPaymentBorrower()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
