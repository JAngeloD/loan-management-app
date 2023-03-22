import React, {useState} from 'react'
import BorrowerForm from './borrowerform/BorrowerForm'
import Dashboard from './dashboard/Dashboard'
import Navbar from './Navbar/Navbar'

function App() {

  //State of the main screen, dashboard is the default
  const [mainState, setMainState] = useState("dashboard")

  //const handleState = (newState) => {setMainState(newState)} example
  const handleState = (newState: string) => {setMainState(newState); console.log(mainState)}

  return (
    <>
      <div className="container-fluid">
        <div className="row flex-nowrap">
          <Navbar handleState={handleState}/>

          {(() => {
            switch (mainState) {
              case "dashboard":
                return <Dashboard/>
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