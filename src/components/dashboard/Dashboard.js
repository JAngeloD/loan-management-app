import React from 'react'
import BorrowerTable from './BorrowerTable'
import DashboardHeaders from './DashboardHeaders'

function Dashboard() {
  return (
    <>
      <div className="container flex-shrink-1 bg-dark-subtle p-4 ">
        <DashboardHeaders/>
        <BorrowerTable/>
      </div>
    </>
  )
}

export default Dashboard

