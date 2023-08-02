import React, { useMemo } from "react";
import { useColumnOrder, useTable } from "react-table";
import Mockaroo from "./Mockaroo.json";
import { CLOUMNS,GROUPED_COLUMNS } from "./Columns";
import './basictable.css';
import { Checkbox } from './Checkbox'

export const ColumnOrder = () => {
  const columns = useMemo(() => CLOUMNS, [])
  const data = useMemo(() => Mockaroo, [])

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    footerGroups,
    rows,
    prepareRow,
    setColumnOrder
  } = useTable({
    columns,
    data
  }, useColumnOrder)

  const changeOrder = () => {
      setColumnOrder(['id', 'first_name', 'last_name', 'phone', 'country', 'date_of_birth'])
  }

  return (
    <>
    <button onClick={changeOrder}>Change column order</button>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
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