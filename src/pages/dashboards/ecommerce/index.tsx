// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import EcommerceProfit from 'src/views/dashboards/ecommerce/EcommerceProfit'
import EcommerceOrders from 'src/views/dashboards/ecommerce/EcommerceOrders'
import EcommerceExpenses from 'src/views/dashboards/ecommerce/EcommerceExpenses'
import EcommerceStatistics from 'src/views/dashboards/ecommerce/EcommerceStatistics'
import EcommerceInvoiceTable from 'src/views/dashboards/ecommerce/EcommerceInvoiceTable'
import EcommerceTransactions from 'src/views/dashboards/ecommerce/EcommerceTransactions'
import EcommerceRevenueReport from 'src/views/dashboards/ecommerce/EcommerceRevenueReport'

import EcommerceGeneratedLeads from 'src/views/dashboards/ecommerce/EcommerceGeneratedLeads'

import EcommerceCongratulationsJohn from 'src/views/dashboards/ecommerce/EcommerceCongratulationsJohn'

// ** Custom Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CrmEarningReportsWithTabs from 'src/views/dashboards/crm/CrmEarningReportsWithTabs'

const EcommerceDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={4}>
          <EcommerceCongratulationsJohn />
        </Grid>
        <Grid item xs={12} md={8}>
          <EcommerceStatistics />
        </Grid>
        <Grid item xs={12} lg={4}>
          <Grid container spacing={6}>
            <Grid item xs={6} md={3} lg={6}>
              <EcommerceExpenses />
            </Grid>
            <Grid item xs={6} md={3} lg={6}>
              <EcommerceProfit />
            </Grid>
            <Grid item xs={12} md={6} lg={12}>
              <EcommerceGeneratedLeads />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} lg={8}>
          <EcommerceRevenueReport />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmEarningReportsWithTabs />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <CrmEarningReportsWithTabs />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EcommerceOrders />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <EcommerceTransactions />
        </Grid>
        <Grid item xs={12} lg={8}>
          <EcommerceInvoiceTable />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default EcommerceDashboard
