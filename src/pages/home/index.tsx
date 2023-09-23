import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Grid from '@mui/material/Grid'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'
import ShipmentOverview from 'src/views/pages/overview/ShipmentOverview'
import LastTransaction from 'src/views/pages/overview/LastTransaction'
import SalesByCountries from 'src/views/pages/overview/SalesByCountries'
import Tracking from 'src/views/pages/overview/Tracking'
import OverviewInTansitParcel from 'src/views/pages/overview/OverviewInTansitParcel'
import CrmEarningReportsWithTabs from 'src/views/pages/overview/order/BuyersDemoGraphics'
import RevenueGrowth from 'src/views/pages/overview/RevenueGrowth'

const Overview = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='24.67k' subtitle='Total Order' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='175k' subtitle='Pending Revenue' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='175k' subtitle='Total Shiping' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='24' subtitle='In Transit' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='24' subtitle='Pending Package' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='24' subtitle='Total Delivered' stats={''} avatarIcon={''} />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <RevenueGrowth />
        </Grid>
        <Grid item xs={12} lg={8}>
          <CrmEarningReportsWithTabs />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <OverviewInTansitParcel />
        </Grid>
        <Grid item xs={12} md={6} lg={8}>
          <Tracking />
        </Grid>

        <Grid item xs={12} md={6}>
          <SalesByCountries />
        </Grid>
        <Grid item xs={12} md={6}>
          <LastTransaction />
        </Grid>
        <Grid item xs={12} md={12}>
          <ShipmentOverview />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}
export default Overview
