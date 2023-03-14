import React from 'react'
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table'


const SearchBar = ({ filter, setFilter }) => {
  return (
    <span className='filter'>
      <input value={filter || ''}
        onChange={e => setFilter(e.target.value)}
        placeholder='Search...'
      />
    </span>
  );
}

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

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    row,
    prepareRow,
    state: {globalFilter},
    setGlobalFilter
  } = useTable(
    {
      columns,
      data,
      initialState: {
        sortBy: [
          {
            id: 'nextpaymentdate',
            autoResetSortBy: false,
            desc: false
          }
        ]
      }
    },
    useGlobalFilter,
    useSortBy
  )

  return (
    <>
      <SearchBar filter={globalFilter} setFilter={setGlobalFilter} />
      <table class="table table-hover table-nowrap" {...getTableProps()}>
        <thead class="thead-light">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {row.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default BorrowerTable
