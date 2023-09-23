import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Grid from '@mui/material/Grid'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'
import RtoMainTable from 'src/views/pages/overview/Rto/RtoMainTable'
import RtoTable1 from 'src/views/pages/overview/Rto/RtoTable1'
import RtoTable2 from 'src/views/pages/overview/Rto/RtoTable2'
import RtoTavle3 from 'src/views/pages/overview/Rto/RtoTavle3'
import RtoTable4 from 'src/views/pages/overview/Rto/RtoTable4'
import RtoTable5 from 'src/views/pages/overview/Rto/RtoTable5'
import RtoTable6 from 'src/views/pages/overview/Rto/RtoTable6'
import AllDataTable from 'src/views/pages/Cossigment/AllDataTable'

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

        <Grid item xs={12} md={12} lg={12}>
          <AllDataTable />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <RtoTable1 />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <RtoTable2 />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <RtoTavle3 />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <RtoTable4 />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <RtoTable5 />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <RtoTable6 />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}
export default Overview
