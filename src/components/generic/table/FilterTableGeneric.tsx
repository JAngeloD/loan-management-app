import React, { useState } from 'react'
import DebouncedInput from './DebouncedInput'
import PaginationInputs from './PaginationInputs'
import { getCoreRowModel, useReactTable, flexRender, getPaginationRowModel, FilterFn, getFilteredRowModel, getSortedRowModel, SortingState, Pagination } from '@tanstack/react-table';
import type { ColumnDef, ColumnSort } from '@tanstack/react-table';
import { filterFns } from './FuzzyFilter'


interface ReactTableProps<T extends object> {
  data: T[];
  columns: ColumnDef<T>[];
  cellClickFunction?: (args: any) => any;
  sortState?: ColumnSort[];
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
  cellClickFunction = () => void 0,
  sortState = null,
  showNavigation = true,
  showGlobalFilter = false,
  filterFn = filterFns.fuzzy,
}: ReactTableProps<T>) => {

  const [globalFilter, setGlobalFilter] = useState('');
  const [sorting, setSorting] = React.useState<SortingState>(sortState)

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
                  <tr key={row.id} className='border-b" bg-white'
                      onClick={() => {cellClickFunction(row)}}>
                    {row.getVisibleCells().map((cell) => (
                      <td  className="whitespace-nowrap px-6 py-4 text-sm font-light text-gray-900" key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {showNavigation ?
            <>
              <PaginationInputs parentTable={table} />
            </>
            : null}
        </div>
      </div>
    </div>

  )
}

export default FilterTableGeneric
