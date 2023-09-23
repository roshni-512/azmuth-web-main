import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import Grid from '@mui/material/Grid'
import CardStatsVertical from 'src/@core/components/card-statistics/card-stats-vertical'

import { GetStaticPaths } from 'next/types'
import NDRReasonSplit from 'src/views/pages/overview/NDR/NDRReasonSplit'
import WhatsappSatusTable from 'src/views/pages/overview/WhatsappComm/WhatsappSatusTable'
import CourierForms from 'src/views/pages/overview/Courier/CourierForms'

const Overview = () => {
  return <CourierForms />
}
export default Overview
