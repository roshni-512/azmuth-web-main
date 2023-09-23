import {Grid} from '@mui/material'
import React from 'react'
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import BuyersDemoGraphics from 'src/views/pages/overview/order/BuyersDemoGraphics'
import PrePaidvsCODOrders from 'src/views/pages/overview/order/PrePaidvsCODOrders'
import TopCustomersTable from 'src/views/pages/overview/order/TopCustomersTable'
import TopTenCustomers from 'src/views/pages/overview/order/TopTenCustomers'
import TopTenCutomers1 from 'src/views/pages/overview/order/TopTenCutomers1'
import CommonTab from "../../views/pages/consignment/CommonTab";
import Box from "@mui/material/Box";

const Shipment = () => {
  return (
    <>
      <Box>
        <CommonTab active={'Ready To Ship'}/>
        <ApexChartWrapper>
          <Grid container spacing={6}>
            {/*<Grid item xs={12} md={6}>*/}
            {/*  <ShipmentTable*/}
            {/*    value={''}*/}
            {/*    clearSearch={() => null}*/}
            {/*    onChange={() => null}*/}
            {/*  />*/}
            {/*</Grid>*/}

            <Grid item xs={12} md={6}>
              <PrePaidvsCODOrders/>
            </Grid>
            <Grid item xs={12} md={6}>
              <BuyersDemoGraphics/>
            </Grid>
            <Grid item xs={12} md={6}>
              <TopCustomersTable/>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <TopTenCustomers/>
            </Grid>
            <Grid item xs={6} md={6} lg={6}>
              <TopTenCutomers1/>
            </Grid>
          </Grid>
        </ApexChartWrapper>
      </Box>
    </>
  )
}


export default Shipment
