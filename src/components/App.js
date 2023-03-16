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
                return <Dashboard handleState={handleState}/>
              case "borrowerform":
                return <BorrowerForm/>
              case "archive":
                //Not yet implemented
                return null
              case "settings":
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
