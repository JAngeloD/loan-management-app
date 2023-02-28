import React from 'react'
import Navbar from '../navbar/Navbar'

import '../../assets/css/dashboard/dashboard.css'

function Dashboard() {
  return (
    <>
      <Navbar></Navbar>
    </>
  )
}

export default Dashboard


{/* <div className='nav-bar'>
      <h1>Loan App</h1>
      <div onClick={() => {
          setNavChoice("dashboard")
      }}
      >Dashboard</div>
      <div onClick={() => {
          setNavChoice("borrowers")
      }}>Borrowers</div>
</div> */}
