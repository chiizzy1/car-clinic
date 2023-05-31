"use client";

import { FC } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  // { field: "firstName", headerName: "First name", width: 130 },
  // { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "fullName",
    headerName: "Name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 200,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", email: "jonsnow@gmail.com", phone: 12345678901 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", email: "LannisterC@gmail.com", phone: 12345678901 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", email: "lannisterJ@gmail.com", phone: 12345678901 },
  { id: 4, lastName: "Stark", firstName: "Arya", email: "stark@gmail.com", phone: 12345678901 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", email: "daenerys@gmail.com", phone: 12345678901 },
  { id: 6, lastName: "Melisandre", firstName: "fish", email: "fishM@gmail.com", phone: 12345678901 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", email: "cliff2393@gmail.com", phone: 12345678901 },
  { id: 8, lastName: "Frances", firstName: "Rossini", email: "francesR@gmail.com", phone: 12345678901 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", email: "roxie@gmail.com", phone: 12345678901 },
];

interface CustomersTableProps {}

const CustomersTable: FC<CustomersTableProps> = ({}) => {
  const actionColumn: any = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => (
        <div className="flex gap-4 items-center">
          <div className="text-sky-400 p-2 rounded-md cursor-pointer">View</div>
          <div className="p-2 text-red-500 rounded-md cursor-pointer">Delete</div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: 520, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
};

export default CustomersTable;
