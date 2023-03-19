import React from 'react'


export default function BorrowerPageGeneric({rowdata, handleDashboardState, setrowdata}) {
  return(
    <>
      <span>
        <button onClick={() => {handleDashboardState("viewdashboard"); setrowdata("")}}>
          {'<'}
        </button>
      </span>
      <hr/>
      <span>
        {JSON.stringify(rowdata)}
      </span>
    </>
  )
}
