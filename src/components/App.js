import React from 'react'
import BorrowerForm from './borrowerform/BorrowerForm'
import Dashboard from './dashboard/Dashboard'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <>
      <div class="container-fluid">
        <div class="row flex-nowrap">
          <Navbar></Navbar>
          <BorrowerForm></BorrowerForm>
        </div>
      </div>
    </>
  )
}

export default App
