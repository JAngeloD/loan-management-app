import React, { useState } from 'react'
import BorrowerTable from './BorrowerTable'
import BorrowerPageGenerics from '../generic/BorrowerPageGeneric'
import DashboardHeaders from './DashboardHeaders'

function Dashboard() {

  const [dashboardState, setDashboardState] = useState("viewdashboard")
  const [rowdataState, setRowdataState] = useState("") //Don't call ".original" already is the JSON object
  const handleDashboardState = (newState, rowdata) => {
    setDashboardState(newState)
    setRowdataState(rowdata)
  }

  return (
    <div className="container flex-shrink-1 bg-dark-subtle p-4 ">
      {(() => {
          switch (dashboardState) {
            case "viewborrower":
              if (Object.keys(rowdataState) !== 0) {
                return <BorrowerPageGenerics rowdata={rowdataState} setrowdata={setRowdataState} handleDashboardState={handleDashboardState}/>
              }
              else {
                alert("Error, could not fetch row data, please contact admin")
              }
            case "viewdashboard":
              return (
                <>
                  <DashboardHeaders/>
                  <BorrowerTable handleDashboardState={handleDashboardState}/>
                </>
              );
          }
        })()}
    </div>
  )
}

export default Dashboard

