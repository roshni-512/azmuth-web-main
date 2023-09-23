import { Grid } from '@mui/material'
import React from 'react'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import BuyersDemoGraphics from 'src/views/pages/overview/order/BuyersDemoGraphics'
import PrePaidvsCODOrders from 'src/views/pages/overview/order/PrePaidvsCODOrders'
import TopCustomersTable from 'src/views/pages/overview/order/TopCustomersTable'
import TopTenCustomers from 'src/views/pages/overview/order/TopTenCustomers'
import TopTenCutomers1 from 'src/views/pages/overview/order/TopTenCutomers1'
import ShipmentTable from 'src/views/pages/overview/shipments/ShipmentTable'

const index = () => {
  return (
    <div>
      {' '}
      <>
        <ApexChartWrapper>
          <Grid container spacing={6}>
            <Grid item xs={12} md={12}>
              <ShipmentTable
                value={''}
                clearSearch={function (): void {
                  throw new Error('Function not implemented.')
                }}
                onChange={function (e: React.ChangeEvent<Element>): void {
                  throw new Error('Function not implemented.')
                }}
              />
            </Grid>
            <Grid item xs={12} md={3}>
              <PrePaidvsCODOrders />
            </Grid>
            <Grid item xs={12} md={3}>
              <BuyersDemoGraphics />
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <TopCustomersTable />
            </Grid>
            <Grid item xs={12} lg={12}>
              <Grid container spacing={6}>
                <Grid item xs={6} md={6} lg={6}>
                  <TopTenCustomers />
                </Grid>
                <Grid item xs={6} md={6} lg={6}>
                  <TopTenCutomers1 />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </ApexChartWrapper>
      </>
    </div>
  )
}

export default index
