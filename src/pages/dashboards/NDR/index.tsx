import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Grid from '@mui/material/Grid'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'
import NDRReasonTable from 'src/views/pages/overview/NDR/NDRReasonTable'
import SuccessByCuriour from 'src/views/pages/overview/NDR/SuccessByCuriour'
import BuyersResponse from 'src/views/pages/overview/NDR/BuyersResponse'
import NDRSeller from 'src/views/pages/overview/NDR/NDRSeller'
import NDRSales from 'src/views/pages/overview/NDR/NDRSales'
import NDRStatus from 'src/views/pages/overview/NDR/NDRStatus'
import NDRReasonSplit from 'src/views/pages/overview/NDR/NDRReasonSplit'
import NDRfunnel from 'src/views/pages/overview/NDR/NDRfunnel'
import NDRresponse from 'src/views/pages/overview/NDR/NDRresponse'

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
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='0' subtitle='Action Required' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='24' subtitle='Delivered' stats={''} avatarIcon={''} />
        </Grid>
        <Grid item xs={6} sm={4} lg={2}>
          <CardStatsVertical chipText='+12.6%' title='24' subtitle='Post NDR' stats={''} avatarIcon={''} />
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <NDRresponse />
        </Grid>
        <Grid item xs={12} lg={6}>
          <NDRfunnel />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <NDRReasonSplit />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <NDRStatus />
        </Grid>

        <Grid item xs={12} md={4}>
          <NDRSales />
        </Grid>

        <Grid item xs={12} md={4}>
          <NDRSeller />
        </Grid>
        <Grid item xs={12} md={4}>
          <BuyersResponse />
        </Grid>
        <Grid item xs={12} md={8}>
          <SuccessByCuriour />
        </Grid>
        <Grid item xs={12} md={4}>
          <NDRReasonTable />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}
export default Overview
