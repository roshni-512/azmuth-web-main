import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Grid from '@mui/material/Grid'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

import { GetStaticPaths } from 'next/types'
import NDRReasonSplit from 'src/views/pages/overview/NDR/NDRReasonSplit'
import WhatsappSatusTable from 'src/views/pages/overview/WhatsappComm/WhatsappSatusTable'

const Overview = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='0' subtitle='NDR Raised' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={4}>
          <CardStatsVertical
            chipText='+12.6%'
            title='0%'
            subtitle='NDR Raised Percentage %'
            stats={''}
            avatarIcon={''}
          />
        </Grid>
        <Grid item xs={6} sm={4} lg={4}>
          <CardStatsVertical chipText='+12.6%' title='0' subtitle='Action Required' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='24' subtitle='Delivered' stats={''} avatarIcon={''} />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <NDRReasonSplit />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <WhatsappSatusTable />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}
export default Overview
