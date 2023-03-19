import React from 'react'


export default function BorrowerPageGeneric({rowdata}) {
  return(
    <>
      <span>
        <button onClick={() => alert(JSON.stringify(rowdata))} >
          {'<'}
        </button>
      </span>
    </>
  )
}
