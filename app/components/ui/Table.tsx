"use client"

import { FC } from 'react';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid'


const columnsDraft: GridColDef[] = [
  {
    field: 'col1',
    headerName: 'API key used',
    width: 400,
    renderHeader(params) {
      return (
        <strong className='font-semibold'>{params.colDef.headerName} 🔑</strong>
      )
    },
  },
  { field: 'col2', headerName: 'Path', width: 250 },
  { field: 'col3', headerName: 'Recency', width: 250 },
  { field: 'col4', headerName: 'Duration', width: 150 },
  { field: 'col5', headerName: 'Status', width: 150 },
]

const columns = columnsDraft.map((col) => {
  if (col.field === 'col1') {
    return col
  }

  return {
    ...col,
    renderHeader(params: GridColumnHeaderParams<any, any, any>) {
      return (
        <strong className='font-semibold'>{params.colDef.headerName}</strong>
      )
    },
  }
})

interface TableProps {
  info: carInfo[]
}

export interface carInfo{
  id: number,
    carId: number,
    description: string,
    estimatedCost: number,
    status: string
}

const Table: FC<TableProps> = ({info}) => {

  const rows = info.map(item => ({
    id: item.id,
    col1: item.description,
    col2: item.carId,
    col3: item.estimatedCost,
    col4: item.status,
    col5: item.description,
  }))

  return (
    <DataGrid
        style={{
          backgroundColor: 'cyan',
          fontSize: '1rem',
        }}
        pageSizeOptions={[5]}
        disableRowSelectionOnClick
        autoHeight
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        columns={columns}
        rows={rows}
      />
  )
}

export default Table