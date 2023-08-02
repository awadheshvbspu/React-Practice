import React, { useMemo } from "react";
import { useGlobalFilter, useTable,useFilters } from "react-table";
import Mockaroo from "./Mockaroo.json";
import { CLOUMNS,GROUPED_COLUMNS } from "./Columns";
import './basictable.css';
import {GlobalFilter} from "./GlobalFilter";
// import {ColumnFilter} from './ColumnFilter';

export default function FilteringTable() {
        const columns = useMemo(() => CLOUMNS, [])
        const data = useMemo(() => Mockaroo, [])
      
        const defaultColumn = React.useMemo(
          () => ({
            // Filter: ColumnFilter
          }),
          []
        )
      
        const {
          getTableProps,
          getTableBodyProps,
          headerGroups,
          footerGroups,
          rows,
          prepareRow,
          state,
          setGlobalFilter
        } = useTable(
          {
            columns,
            data,
            // defaultColumn
          },
          useFilters,
          useGlobalFilter
        )
      
        const { globalFilter } = state
      
        return (
          <>
            <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>
                        {column.render('Header')}
                        <div>{column.canFilter ? column.render('Filter') : null}</div>
                      </th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {rows.map(row => {
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
              <tfoot>
                {footerGroups.map(footerGroup => (
                  <tr {...footerGroup.getFooterGroupProps()}>
                    {footerGroup.headers.map(column => (
                      <td {...column.getFooterProps()}>{column.render('Footer')}</td>
                    ))}
                  </tr>
                ))}
              </tfoot>
            </table>
          </>
        )
      }