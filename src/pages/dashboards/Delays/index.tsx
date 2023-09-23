import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Grid from '@mui/material/Grid'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'
import DelaysTable1 from 'src/views/pages/overview/Delays/DelaysTable1'
import DelaysTable2 from 'src/views/pages/overview/Delays/DelaysTable2'
import DelaysRadarChart from 'src/views/pages/overview/Delays/DelaysRadarChart'
import DeliveryDelaychart from 'src/views/pages/overview/Delays/DeliveryDelaychart'
import RTOdelay from 'src/views/pages/overview/Delays/RTOdelay'

const Overview = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='0' subtitle='NDR Raised' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical
            chipText='+12.6%'
            title='0%'
            subtitle='NDR Raised Percentage %'
            stats={''}
            avatarIcon={''}
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='0' subtitle='Action Required' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='24' subtitle='Delivered' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='24' subtitle='Delivered' stats={''} avatarIcon={''} />
        </Grid>

        <Grid item xs={12} md={12} lg={6}>
          <DelaysTable1 />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <DelaysTable2 />
        </Grid>

        <Grid item xs={12} md={6} lg={4}>
          <DelaysRadarChart />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <DeliveryDelaychart />
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <RTOdelay />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}
export default Overview
