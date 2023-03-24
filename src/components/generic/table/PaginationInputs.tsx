import React from 'react'
import type { Table } from '@tanstack/react-table';

interface PaginationProps<T extends object> {
  parentTable: Table<T>
  sizeControl?: boolean;
  freeTypePageNumControl?: boolean;
}

export const PaginationInputs = <T extends object>({ parentTable, sizeControl = false, freeTypePageNumControl = false }: PaginationProps<T>) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="overflow-hidden p-2">
          <div className="flex items-center">
            <div>
              <button
                className="cursor-pointer shadow-none ps-1 pe-1 me-1"
                onClick={() => parentTable.setPageIndex(0)}
                disabled={!parentTable.getCanPreviousPage()}
              >
                <i className="bi bi-chevron-double-left" />
              </button>
              <button
                className="cursor-pointer shadow-none ps-1 pe-1 me-1"
                onClick={() => parentTable.previousPage()}
                disabled={!parentTable.getCanPreviousPage()}
              >
                <i className="bi bi-chevron-left" />
              </button>
              <button
                className="cursor-pointer shadow-none ps-1 pe-1 me-1"
                onClick={() => parentTable.nextPage()}
                disabled={!parentTable.getCanNextPage()}
              >
                <i className="bi bi-chevron-right" />
              </button>
              <button
                className="cursor-pointer shadow-none ps-1 pe-1 me-1"
                onClick={() => parentTable.setPageIndex(parentTable.getPageCount() - 1)}
                disabled={!parentTable.getCanNextPage()}
              >
                <i className="bi bi-chevron-double-right" />
              </button>
              <strong className='ms-3'>
                Page {parentTable.getState().pagination.pageIndex + 1} of {parentTable.getPageCount()}
              </strong>
            </div>

            {freeTypePageNumControl ?
              <>
                <span className="flex items-center gap-1">
                  | Go to page:
                  <input
                    type="number"
                    defaultValue={parentTable.getState().pagination.pageIndex + 1}
                    onChange={(e) => {
                      const page = e.target.value ? Number(e.target.value) - 1 : 0;
                      parentTable.setPageIndex(page);
                    }}
                    className="w-16 rounded border p-1"
                  />
                </span>
              </>
              : null
            }

            {sizeControl ?
              <>
                <select
                  value={parentTable.getState().pagination.pageSize}
                  onChange={(e) => {
                    parentTable.setPageSize(Number(e.target.value));
                  }}
                >
                  {[10, 20, 30, 40, 50].map((pageSize) => (
                    <option key={pageSize} value={pageSize}>
                      Show {pageSize}
                    </option>
                  ))}
                </select>
              </>
              : null}

          </div>
        </div>
      </div>
    </div>
  );
}

export default PaginationInputs
