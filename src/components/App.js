import React, {useState} from 'react'
import BorrowerForm from './borrowerform/BorrowerForm'
import Dashboard from './dashboard/Dashboard'
import Navbar from './Navbar/Navbar'

function App() {

  //State of the main screen, dashboard is the default
  const [mainState, setMainState] = useState("dashboard")
  const handleState = (newState) => {setMainState(newState)}

  return (
    <>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <Navbar handleState={handleState}/>

          {(() => {
            switch (mainState) {
              case "dashboard":
                return <Dashboard/>
              case "borrowerform":
                return <BorrowerForm/>
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
