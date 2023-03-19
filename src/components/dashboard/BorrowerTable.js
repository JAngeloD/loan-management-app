/*
  Exports a table showing payment dates and acts like a portal to a more
  detailed overview of the borrowers in the table.
*/

import React from 'react'
import FilterTableGeneric from '../generic/FilterTableGeneric'

function BorrowerTable() {
  const data = React.useMemo(
    () => [
      {
        name: "Filbo",
        nextpaymentdate: "2022-03-27",
        paymentval: "$299.00",
        remainingterm: 12
      },
      {
        name: "Sans",
        nextpaymentdate: "2022-05-14",
        paymentval: "$994.00",
        remainingterm: 3
      },
      {
        name: "Beffica",
        nextpaymentdate: "2022-03-14",
        paymentval: "$939.00",
        remainingterm: 22
      },
      {
        name: "John",
        nextpaymentdate: "2022-10-21",
        paymentval: "$979.00",
        remainingterm: 1
      }
    ],
    []
  )

  const columns = React.useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name', // accessor is the "key" in the data
      },
      {
        Header: 'Next Payment Date',
        accessor: 'nextpaymentdate',
        sortType: (a, b) => {
          return new Date(a.values.nextpaymentdate).getTime() - new Date(b.values.nextpaymentdate).getTime()
        }
      },
      {
        Header: 'Amount expected',
        accessor: 'paymentval',
      },
      {
        Header: 'Remaining Term',
        accessor: 'remainingterm',
      },
    ],
    []
  )

  return (
    <>
      <FilterTableGeneric data={data} columns={columns}/>
    </>
  )
}

export default BorrowerTable
