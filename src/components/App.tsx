import React, { useState } from 'react'
import BorrowerForm from './borrowerform/BorrowerForm'
import Dashboard from './dashboard/Dashboard'
import Navbar from './Navbar/Navbar'
import PaymentArchive from './archive/PaymentArchive'
import BorrowerArchive from './archive/BorrowerArchive'
import BorrowerPageGeneric from './generic/BorrowerPageGeneric'
import { FullBorrowerInfo } from '../dbaccess/Interfaces/Interfaces'

export enum parentPageState {
  "dashboard",
  "borrowerform",
  "borrowerdetails",
  "paymentarchive",
  "borrowerarchive",
  "settings"
}

function App() {

  //State of the main screen, dashboard is the default
  const [mainState, setMainState] = useState<parentPageState>(parentPageState.dashboard)

  //const handleState = (newState) => {setMainState(newState)} example
  const handleState = (newState: parentPageState) => { setMainState(newState) }

  //Stores states for borrower data to be used by the borrower page generic
  const [borrowerRowdata, setRowdataState] = useState(null)

  const handleBorrowerRowDataState = (newState: parentPageState, rowdata: object) => {
    handleState(newState)
    setRowdataState(rowdata)
  }

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <Navbar handleState={handleState} />

        {(() => {
          switch (mainState) {
            case parentPageState.dashboard:
              return (<Dashboard handleBorrowerRowDataState={handleBorrowerRowDataState} />)
            case parentPageState.borrowerform:
              return (<BorrowerForm />)
            case parentPageState.borrowerdetails:
              return (
                <div className="container flex-shrink-1 bg-dark-subtle p-4 ">
                  <BorrowerPageGeneric borrowerRowdata={borrowerRowdata} handleDashboardState={handleBorrowerRowDataState} />
                </div>
              )
            case parentPageState.paymentarchive:
              return (<PaymentArchive />)
            case parentPageState.borrowerarchive:
              return (<BorrowerArchive />)
            case parentPageState.settings:
              //Not yet implemented
              return (<div>NOT IMPLEMENTED</div>)
            default:
              return (<Dashboard handleBorrowerRowDataState={handleBorrowerRowDataState} />)
          }
        })()}

      </div>
    </div>
  )
}

export default App
