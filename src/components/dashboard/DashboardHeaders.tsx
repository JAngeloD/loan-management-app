import React from 'react'
import * as db from '../../dbaccess/DashboardUtils'

export default function () {
  return (
    <>
      <div className="row g-6 mb-6">
        <div className="col-xl-3 col-sm-6 col-12 p-3">
          <div className="card shadow border-0 h-100">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">Commission</span>
                  <span className="h3 font-bold mb-0">{db.getTotalCommissionAmount()}</span>
                </div>
              </div>
              <div className="mt-2 mb-0 text-sm">
                <span className="badge badge-pill bg-success-subtle text-success me-2">
                  <i className="bi bi-arrow-up me-1"></i>{db.getLastCommissionAmount()}
                </span>
                <span className="text-nowrap text-xs text-muted">For {db.getLastCommissionName()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 col-12 p-3">
          <div className="card shadow border-0 h-100">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">Cash Out</span>
                  <span className="h3 font-bold mb-0">{db.getCashOut()}</span>
                </div>
              </div>
              <div className="mt-2 mb-0 text-sm">
                <span className="badge badge-pill bg-success-subtle text-success me-2">
                  <i className="bi bi-plus me-1"></i>{db.getPaymentsLeft()}
                </span>
                <span className="text-nowrap text-xs text-muted">Total more payments from everyone</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 col-12 p-3 ">
          <div className="card shadow border-0 h-100">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">Profit</span>
                  <span className="h3 font-bold mb-0">{db.getProfit()}</span>
                </div>
              </div>
              <div className="mt-2 mb-0 text-sm">
                <span className="badge badge-pill bg-success-subtle text-success me-2">
                  <i className="bi bi-arrow-up me-1"></i><>{db.getLastInterestAmount()} {db.getLastPaymentDate()}</>
                </span>
                <span className="text-nowrap text-xs text-muted">Last payment from {db.getLastPaymentBorrower()}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="col-xl-3 col-sm-6 col-12 p-3">
          <div className="card shadow border-0 h-100">
            <div className="card-body">
              <div className="row">
                <div className="col">
                  <span className="h6 font-semibold text-muted text-sm d-block mb-2">Money on hand</span>
                  <span className="h3 font-bold mb-0">{db.getMoneyOnHand()}</span>
                </div>
              </div>
              <div className="mt-2 mb-0 text-sm">
                <span className="badge badge-pill bg-success-subtle text-success me-2">
                  <i className="bi bi-arrow-up me-1"></i>{db.getLastPaymentAmount()}
                </span>
                <span className="text-nowrap text-xs text-muted">From {db.getLastPaymentBorrower()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
