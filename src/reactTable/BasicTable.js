import React, { useMemo } from "react";
import { useTable } from "react-table";
import Mockaroo from "./Mockaroo.json";
import { CLOUMNS,GROUPED_COLUMNS } from "./Columns";
import './basictable.css';

export default function BasicTable() {
  const columns = useMemo(() => GROUPED_COLUMNS, []);
  const data = useMemo(() => Mockaroo, []);
  const tableInstance = useTable({
    columns,
    data: Mockaroo,
  });

  const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow,footerGroups} = tableInstance
  return (
    <>
      <table {...getTableProps()}>
        <thead >
        
            {headerGroups.map((headerGroup) =>(
                <tr{...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column)=>(

                    <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
                </tr>
            ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {
            rows.map(row =>{
                prepareRow(row)
                return(
                    <tr{...row.getRowProps()}>
                    {row.cells.map((cell) =>{
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    })}
                    </tr>
                )
            })
        }
        </tbody>
        <tfoot>
            {
                footerGroups.map(footerGroup =>(
                    <tr {...footerGroup.getFooterGroupProps()}>
                    {
                        footerGroup.headers.map((column) =>(
                            <td {...column.getFooterProps()}>
                            {
                                column.render('Footer')
                            }

                            </td>
                        ))
                    }

                    </tr>
                ))
            }
        </tfoot>
      </table>
    </>
  );
}
