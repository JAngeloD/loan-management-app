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

const PageNav = ({ previousPage, canPreviousPage, nextPage, canNextPage, pageIndex, pageOptions}) => {
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
    state: {pageIndex, pageSize, globalFilter},
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
      <PageNav previousPage={previousPage} canPreviousPage={canPreviousPage} nextPage={nextPage} canNextPage={canNextPage} pageIndex={pageIndex} pageOptions={pageOptions}/>
    </>
  )
}

export default BorrowerTable
