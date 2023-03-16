/*
  Exports a table showing payment dates and acts like a portal to a more
  detailed overview of the borrowers in the table.

  - SearchBar: contains jsx for the search bar to filter out data in any column
  - PageNav: contains jsx to traverse through each page of the table. Default size
             of each page is 15
  - BorrowerTable: contains jsx of the table showing payments

  Note:
    This will not be the only way to view borrower information.
    Please see the archive component
*/

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

const PageNav = ({ previousPage, canPreviousPage, nextPage, canNextPage, pageIndex, pageOptions }) => {
  return (
    <div className="pagination">
      <button onClick={() => previousPage()} disabled={!canPreviousPage}>
        {'<'}
      </button>{' '}
      <button onClick={() => nextPage()} disabled={!canNextPage}>
        {'>'}
      </button>{' '}
      <span>
        Page{' '}
        <strong>
          {pageIndex + 1} of {pageOptions.length}
        </strong>{' '}
      </span>
    </div>
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
    page,
    prepareRow,
    pageOptions,
    nextPage,
    canNextPage,
    previousPage,
    canPreviousPage,
    state: { pageIndex, pageSize, globalFilter },
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
        ],
        pageSize: 15,
        pageIndex: 0,
      }
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  )

  return (
    <div class="card shadow border-0 mb-7 p-2 mt-5">
      <div class="card-header bg-dark-subtle">
        <h5 class="mb-0">Payments</h5>
      </div>
      <div class="table-responsive">
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
            {page.map((row, i) => {
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
        <PageNav previousPage={previousPage} canPreviousPage={canPreviousPage} nextPage={nextPage} canNextPage={canNextPage} pageIndex={pageIndex} pageOptions={pageOptions} />
      </div>
    </div>
  )
}

export default BorrowerTable
