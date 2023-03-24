import React, {useState} from 'react'
import BorrowerForm from './borrowerform/BorrowerForm'
import Dashboard from './dashboard/Dashboard'
import Navbar from './Navbar/Navbar'
import PaymentArchive from './archive/PaymentArchive'
import BorrowerArchive from './archive/BorrowerArchive'

export enum parentPageState {
  "dashboard",
  "borrowerform",
  "paymentarchive",
  "borrowerarchive",
  "settings"
}

function App() {

  //State of the main screen, dashboard is the default
  const [mainState, setMainState] = useState<parentPageState>(parentPageState.dashboard)

  //const handleState = (newState) => {setMainState(newState)} example
  const handleState = (newState: parentPageState) => {setMainState(newState); console.log(mainState)}

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Navbar handleState={handleState}/>

          {(() => {
            switch (mainState) {
              case parentPageState.dashboard:
                return <Dashboard/>
              case parentPageState.borrowerform:
                return <BorrowerForm/>
              case parentPageState.paymentarchive:
                return <PaymentArchive/>
              case parentPageState.borrowerarchive:
                return <BorrowerArchive/>
              case parentPageState.settings:
                //Not yet implemented
                return null
              default:
                return <Dashboard/>
            }
          })()}
        </div>
      </div>
    </>
  )
}

export default App
