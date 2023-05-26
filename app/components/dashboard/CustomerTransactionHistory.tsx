"use client";

import { FC } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "carInfo", headerName: "Car Info", width: 130 },
  { field: "diagnosis", headerName: "Car Diagnosis", width: 130 },
  {
    field: "cost",
    headerName: "Repair cost",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.id || ""} ${params.row.cost || ""}`,
  },
];

const rows = [
  { id: 1, carInfo: "Mercedes benz 2022", diagnosis: "Service", cost: 35 },
  { id: 2, carInfo: "G wagon", diagnosis: "Breakpad", cost: 42 },
  { id: 3, carInfo: "Ferarri", diagnosis: "Gear Box", cost: 45 },
  { id: 4, carInfo: "RangeRover sport", diagnosis: "alternator", cost: 16 },
  { id: 5, carInfo: "mustang", diagnosis: "propeller", cost: null },
  { id: 6, carInfo: "Rolls Royce", diagnosis: null, cost: 150 },
];

interface CustomerTransactionHistoryProps {
    customerId: string
}

const CustomerTransactionHistory: FC<
  CustomerTransactionHistoryProps
> = ({customerId}) => {
  const actionColumn: any = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: () => (
        <div className="flex gap-4 items-center">
          <div className="text-sky-400 p-2 rounded-md ">View</div>
          <div className="p-2 text-red-500 rounded-md">Delete</div>
        </div>
      ),
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
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

export default CustomerTransactionHistory;
