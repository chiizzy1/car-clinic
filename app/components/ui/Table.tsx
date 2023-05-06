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
  repairs: carRepairs[]
}

export interface carRepairs{
  id: number,
    carId: number,
    description: string,
    estimatedCost: number,
    status: string
}

const Table: FC<TableProps> = ({repairs}) => {

  if(!repairs?.length){
    return(
      <div>
        <h1>No users found</h1>
      </div>
    );
  }

  return <div>
    {repairs.map(item => <p key={item.id}>{item.description}</p>)}
  </div>
}

export default Table