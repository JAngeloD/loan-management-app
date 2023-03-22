import React, { useState } from 'react'
import DebouncedInput from './DebouncedInput'
import { getCoreRowModel, useReactTable, flexRender, getPaginationRowModel, FilterFn, getFilteredRowModel, getSortedRowModel, SortingState } from '@tanstack/react-table';
import type { ColumnDef } from '@tanstack/react-table';
import { filterFns } from './FuzzyFilter'


interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  showNavigation?: boolean;
  showGlobalFilter?: boolean;
  filterFn?: FilterFn<T>;
}


/**
 * TODO: You better put something here A
 * @param param0
 * @returns
 */
export const FilterTableGeneric = <T extends object>({
  data,
  columns,
  showNavigation = true,
  showGlobalFilter = false,
  filterFn = filterFns.fuzzy,
}: ReactTableProps<T>) => {

  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = React.useState<SortingState>([
    {
      id: "nextpaymentdate",
      desc: false
    }
  ])

  const table = useReactTable({
    data,
    columns,
    state: {
      sorting,
      globalFilter
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: filterFn,
  });

  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
          <button onClick={() => { console.log(sorting) }} >Sort State</button>
          <div className="overflow-hidden p-2">
            {showGlobalFilter ? (
              <DebouncedInput
                value={globalFilter ?? ''}
                onChange={(value) => setGlobalFilter(String(value))}
                className="font-lg border-block border p-2 shadow mb-2"
                placeholder="Search all columns..."
              />
            ) : null}
            <table className="min-w-full text-center">
              <thead className="border-b bg-gray-50">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(header => {
                      return (
                        <th key={header.id} colSpan={header.colSpan}>
                          {header.isPlaceholder ? null : (
                            <div
                              {...{
                                className: header.column.getCanSort()
                                  ? 'cursor-pointer select-none'
                                  : '',
                                onClick: header.column.getToggleSortingHandler(),
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {{
                                asc: ' 🔼',
                                desc: ' 🔽',
                              }[header.column.getIsSorted() as string] ?? null}
                            </div>
                          )}
                        </th>
                      )
                    })}
                  </tr>
                ))}
              </thead>
              <tbody>
                {table.getRowModel().rows.map((row) => (
                  <tr key={row.id} className='border-b" bg-white'>
                    {row.getVisibleCells().map((cell) => (
                      <td className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900" key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-4 sm:px-6 lg:px-8">
                <div className="overflow-hidden p-2">
                  {/* ... */}
                  {showNavigation ? (
                    <>
                      <div className="h-2 mt-5" />
                      <div className="flex items-center gap-2">
                        <button
                          className="cursor-pointer rounded border p-1"
                          onClick={() => table.setPageIndex(0)}
                          disabled={!table.getCanPreviousPage()}
                        >
                          {'<<'}
                        </button>
                        <button
                          className="cursor-pointer rounded border p-1"
                          onClick={() => table.previousPage()}
                          disabled={!table.getCanPreviousPage()}
                        >
                          {'<'}
                        </button>
                        <button
                          className="cursor-pointer rounded border p-1"
                          onClick={() => table.nextPage()}
                          disabled={!table.getCanNextPage()}
                        >
                          {'>'}
                        </button>
                        <button
                          className="cursor-pointer rounded border p-1"
                          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
                          disabled={!table.getCanNextPage()}
                        >
                          {'>>'}
                        </button>
                        <span className="flex cursor-pointer items-center gap-1">
                          <div>Page</div>
                          <strong>
                            {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                          </strong>
                        </span>
                        <span className="flex items-center gap-1">
                          | Go to page:
                          <input
                            type="number"
                            defaultValue={table.getState().pagination.pageIndex + 1}
                            onChange={(e) => {
                              const page = e.target.value ? Number(e.target.value) - 1 : 0;
                              table.setPageIndex(page);
                            }}
                            className="w-16 rounded border p-1"
                          />
                        </span>
                        <select
                          value={table.getState().pagination.pageSize}
                          onChange={(e) => {
                            table.setPageSize(Number(e.target.value));
                          }}
                        >
                          {[10, 20, 30, 40, 50].map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                              Show {pageSize}
                            </option>
                          ))}
                        </select>
                        <div className="h-4" />
                      </div>
                    </>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default FilterTableGeneric
