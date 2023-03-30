import React, { useState } from 'react'
import BorrowerTable from './BorrowerTable'
import BorrowerPageGenerics from '../generic/BorrowerPageGeneric'
import DashboardHeaders from './DashboardHeaders'



export default function Dashboard() {

  const [dashboardState, setDashboardState] = useState("viewdashboard")
  const [borrowerRowdata, setRowdataState] = useState(null) //Don't call ".original" already is the JSON object
  const handleDashboardState = (newState: string, rowdata: object) => {
    setDashboardState(newState)
    setRowdataState(rowdata)
  }

  return (
    <div className="container flex-shrink-1 bg-dark-subtle p-4 ">
      {(() => {
        switch (dashboardState) {
          case "viewborrower":
            if (borrowerRowdata !== null) {
              return <BorrowerPageGenerics borrowerRowdata={borrowerRowdata} handleDashboardState={handleDashboardState} />
            }
            else {
              alert("Error, could not fetch row data, please contact admin")
            }
          case "viewdashboard":
            return (
              <>
                <DashboardHeaders />
                <div className="card shadow border-0 mb-7 p-4 mt-5">
                  <BorrowerTable handleDashboardState={handleDashboardState} />
                </div>
              </>
            )
        }
      })()}
    </div>
  )
}


