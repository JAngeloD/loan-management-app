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

/********
 * Both parameters must use "useMemo"
 ********/
export default function FilterTableGeneric({data, columns}) {
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
