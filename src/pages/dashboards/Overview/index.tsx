import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Grid from '@mui/material/Grid'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'
import Tracking from 'src/views/dashboards/overview/Tracking'
import LastTransaction from 'src/views/dashboards/overview/LastTransaction'
import CrmEarningReportsWithTabs from 'src/views/dashboards/crm/CrmEarningReportsWithTabs'
import CrmRevenueGrowth from 'src/views/dashboards/crm/CrmRevenueGrowth'
import SalesByCountries from 'src/views/dashboards/overview/SalesByCountries'
import ShipmentOverview from 'src/views/dashboards/overview/ShipmentOverview'
import OverviewInTansitParcel from 'src/views/dashboards/overview/OverviewInTansitParcel'
const Overview = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            chipText='+12.6%'
            title='24.67k'
            subtitle='Total Order'
            imageUrl='/images/cards/dashboardcardimage2.png'
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            chipText='+12.6%'
            title='175k'
            subtitle='Pending Revenue'
            imageUrl='/images/cards/dashboardcardimage1.png'
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            chipText='+12.6%'
            title='175k'
            subtitle='Total Shiping'
            imageUrl='/images/cards/dashboardcardimage2.png'
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            chipText='+12.6%'
            title='24'
            subtitle='In Transit'
            imageUrl='/images/cards/dashboardcardimage1.png'
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            chipText='+12.6%'
            title='24'
            subtitle='Pending Package'
            imageUrl='/images/cards/dashboardcardimage2.png'
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            chipText='+12.6%'
            title='24'
            subtitle='Total Delivered'
            imageUrl='/images/cards/dashboardcardimage1.png'
          />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <CrmRevenueGrowth />
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
