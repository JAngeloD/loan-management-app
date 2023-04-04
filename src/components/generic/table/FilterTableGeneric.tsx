import React, { useState } from 'react'
import DebouncedInput from './DebouncedInput'
import PaginationInputs from './PaginationInputs'
import { getCoreRowModel, useReactTable, flexRender, getPaginationRowModel, FilterFn, getFilteredRowModel, getSortedRowModel, SortingState } from '@tanstack/react-table';
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
  cellClickFunction = () => null,
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
    <div className="table-responsive">
      {showGlobalFilter ? (
        <DebouncedInput
          value={globalFilter ?? ''}
          onChange={(value) => setGlobalFilter(String(value))}
          className="form-control form-input shadow-none mb-2 p-2"
          placeholder="Search all columns..."
          style={{ width: "50%" }}
        />
      ) : null}
      <table className="table table-responsive table-borderless">
        <thead className="bg-gray-50">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="bg-light">
              {headerGroup.headers.map(header => {
                return (
                  <th key={header.id} colSpan={header.colSpan}>
                    {header.isPlaceholder ? null : (
                      <div
                        {...{
                          style: header.column.getCanSort()
                            ? { cursor: "pointer" }
                            : {},
                          onClick: header.column.getToggleSortingHandler(),
                        }}
                      >
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                        {{
                          asc: <i className="ps-2 bi bi-arrow-up" />,
                          desc: <i className="ps-2 bi bi-arrow-down" />,
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
            <tr
              key={row.id}
              className='border-b" bg-white'
              onClick={() => { cellClickFunction(row) }}
              style={cellClickFunction !== null
                ? {cursor: "pointer"}
                : {}
              }
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {showNavigation ?
        <>
          <PaginationInputs parentTable={table} />
        </>
        : null}
    </div>
  )
}

export default FilterTableGeneric
