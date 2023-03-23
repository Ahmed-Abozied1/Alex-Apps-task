import React, { useMemo } from "react";
import { useTable } from "react-table";

function TodosTable(props) {
  const data = useMemo(() => props.todos, [props.todos]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: "id",
      },
      {
        Header: "User ID",
        accessor: "user_id",
      },
      {
        Header: "Task",
        accessor: "task",
      },
      {
        Header: "Completed",
        accessor: "completed",
        Cell: ({ value }) => (value ? "Yes" : "No"),
      },
      {
        Header: "Actions",
        accessor: "i",
        Cell: ({ value }) => (
          <button onClick={() => props.onDelete(value)} className="logouotBtn">Delete</button>
        ),
      },
    ],
    [props.onDelete]
  );


  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (
    <table {...getTableProps()} className="table">
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render("Header")}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default TodosTable;
