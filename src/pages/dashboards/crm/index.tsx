// ** MUI Import
import Grid from '@mui/material/Grid'

// ** Demo Component Imports
import CrmSessions from 'src/views/dashboards/crm/CrmSessions'
import CrmRevenueGrowth from 'src/views/dashboards/crm/CrmRevenueGrowth'
import CrmBrowserStates from 'src/views/dashboards/crm/CrmBrowserStates'
import CrmProjectStatus from 'src/views/dashboards/crm/CrmProjectStatus'
import CrmActiveProjects from 'src/views/dashboards/crm/CrmActiveProjects'
import CrmLastTransaction from 'src/views/dashboards/overview/LastTransaction'
import CrmActivityTimeline from 'src/views/dashboards/crm/CrmActivityTimeline'
import CrmSalesWithAreaChart from 'src/views/dashboards/crm/CrmSalesWithAreaChart'
// import CrmSalesWithRadarChart from 'src/views/dashboards/crm/CrmIntransitParcel'
import CrmEarningReportsWithTabs from 'src/views/dashboards/crm/CrmEarningReportsWithTabs'

// ** Custom Component Imports
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'
import AnalyticsProject from 'src/views/dashboards/overview/Tracking'
// import AnalyticsSalesByCountries from 'src/views/dashboards/crm/AnalyticsSalesByCountries'

const CrmDashboard = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            chipText='+12.6%'
            title='24.67k'
            subtitle='Total Order'
            imageUrl='../cards/dashboardcardimage1'
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='175k' subtitle='Pending Revenue' />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='175k' subtitle='Total Shiping' />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='24' subtitle='In Transit' />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='24' subtitle='Pending Package' />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='24' subtitle='Total Delivered' />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CrmRevenueGrowth />
        </Grid>
        <Grid item xs={12} lg={8}>
          <CrmEarningReportsWithTabs />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          {/* <CrmSalesWithRadarChart /> */}
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <AnalyticsProject />
        </Grid>

        <Grid item xs={12} md={6}>
          {/* <AnalyticsSalesByCountries /> */}
        </Grid>
        <Grid item xs={12} md={6}>
          <CrmLastTransaction />
        </Grid>
        {/* <Grid item xs={12} md={12}>
          <CrmShipmentOverview />
        </Grid> */}
      </Grid>
    </ApexChartWrapper>
  )
}

export default CrmDashboard
