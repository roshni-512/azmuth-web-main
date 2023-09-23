// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import { DataGrid, GridColDef } from '@mui/x-data-grid'

// ** Data Import
import { rows } from 'src/@fake-db/table/static-data'

const columns: GridColDef[] = [
  {
    flex: 0.1,
    field: 'id',
    minWidth: 80,
    headerName: 'Date'
  },
  {
    flex: 0.25,
    minWidth: 200,
    field: 'full_name',
    headerName: 'Total Orders'
  },
  {
    flex: 0.25,
    minWidth: 230,
    field: 'email',
    headerName: 'Pickup Unscheduled'
  },
  {
    flex: 0.15,
    type: 'date',
    minWidth: 130,
    headerName: 'Pickup scheduled',
    field: 'start_date',
    valueGetter: params => new Date(params.value)
  },
  {
    flex: 0.15,
    minWidth: 120,
    field: 'experience',
    headerName: 'InTransit'
  },
  {
    flex: 0.1,
    field: 'age',
    minWidth: 80,
    headerName: 'Delivered'
  }
  // {
  //   flex: 0.15,
  //   minWidth: 120,
  //   field: 'experience',
  //   headerName: 'UnDelivered'
  // },
  // {
  //   flex: 0.15,
  //   minWidth: 120,
  //   field: 'experience',
  //   headerName: 'RTO'
  // }
]

const TableBasic = () => {
  return (
    <Card>
      <CardHeader title='Orders Count' />
      <Box sx={{ height: 300 }}>
        <DataGrid columns={columns} rows={rows.slice(0, 5)} />
      </Box>
    </Card>
  )
}

export default TableBasic
