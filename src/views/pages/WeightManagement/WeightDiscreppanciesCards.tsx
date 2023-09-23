import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Grid from '@mui/material/Grid'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

const Overview = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={4} lg={3}>
          <CardStatsVertical chipText='+12.6%' title='24.67k' subtitle='Total Order' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <CardStatsVertical chipText='+12.6%' title='175k' subtitle='Pending Revenue' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <CardStatsVertical chipText='+12.6%' title='175k' subtitle='Total Shiping' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={3}>
          <CardStatsVertical chipText='+12.6%' title='24' subtitle='In Transit' stats={''} avatarIcon={''} />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}
export default Overview
