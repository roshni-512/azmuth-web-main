// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Grid, { GridProps } from '@mui/material/Grid'
import { styled, useTheme } from '@mui/material/styles'
import LinearProgress from '@mui/material/LinearProgress'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Type Import
import { ThemeColor } from 'src/@core/layouts/types'

// ** Custom Components Imports
import Icon from 'src/@core/components/icon'
import CustomChip from 'src/@core/components/mui/chip'
import OptionsMenu from 'src/@core/components/option-menu'
import CustomAvatar from 'src/@core/components/mui/avatar'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

// ** Util Import
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'

interface DataType {
  stats: string
  title: string
  progress: number
  avatarIcon: string
  avatarColor?: ThemeColor
  progressColor?: ThemeColor
}

const series = [{ data: [37, 76, 65, 41, 99, 53, 70] }]

const data: DataType[] = [
  {
    progress: 64,
    stats: ' Seller Response',
    title: '1st NDR',
    avatarIcon: 'tabler:currency-dollar'
  },
  {
    progress: 64,
    stats: ' Seller Response',
    title: '1st NDR',
    avatarIcon: 'tabler:currency-dollar'
  },
  {
    progress: 64,
    stats: ' Seller Response',
    title: '1st NDR',
    avatarIcon: 'tabler:currency-dollar'
  },
  {
    progress: 64,
    stats: ' Seller Response',
    title: 'Earnings',
    avatarIcon: 'tabler:currency-dollar'
  },
  {
    progress: 64,
    stats: ' Seller Response',
    title: 'Earnings',
    avatarIcon: 'tabler:currency-dollar'
  },
  {
    progress: 64,
    stats: ' Seller Response',
    title: 'Earnings',
    avatarIcon: 'tabler:currency-dollar'
  },
  {
    progress: 64,
    stats: ' Seller Response',
    title: 'Earnings',
    avatarIcon: 'tabler:currency-dollar'
  },

  {
    progress: 64,
    stats: ' Seller Response',
    title: 'Earnings',
    avatarIcon: 'tabler:currency-dollar'
  },

  {
    progress: 59,
    title: 'Profit',
    stats: ' Seller Response',
    avatarColor: 'info',
    progressColor: 'info',
    avatarIcon: 'tabler:chart-pie-2'
  }
]

const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    paddingTop: '0 !important'
  }
}))

const AnalyticsEarningReports = () => {
  // ** Hook
  const theme = useTheme()

  const options: ApexOptions = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        distributed: true,
        columnWidth: '42%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    legend: { show: false },
    tooltip: { enabled: false },
    dataLabels: { enabled: false },
    colors: [
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 1),
      hexToRGBA(theme.palette.primary.main, 0.16),
      hexToRGBA(theme.palette.primary.main, 0.16)
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    grid: {
      show: false,
      padding: {
        top: -28,
        left: -9,
        right: -10,
        bottom: -12
      }
    },
    xaxis: {
      axisTicks: { show: false },
      axisBorder: { show: false },
      categories: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
      labels: {
        style: {
          colors: theme.palette.text.disabled,
          fontFamily: theme.typography.fontFamily,
          fontSize: theme.typography.body2.fontSize as string
        }
      }
    },
    yaxis: { show: false }
  }

  return (
    <Card>
      <CardHeader
        sx={{ pb: 0 }}
        title='NDR Response'
        action={
          <OptionsMenu
            options={['Last Week', 'Last Month', 'Last Year']}
            iconButtonProps={{ size: 'small', sx: { color: 'text.disabled' } }}
          />
        }
      />
      <CardContent>
        <Box sx={{ mt: 6, borderRadius: 1, p: theme.spacing(4, 5) }}>
          <Grid container spacing={6}>
            {data.map((item: DataType, index: number) => (
              <Grid item xs={12} sm={4} key={index} sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box sx={{ mb: 2.5, display: 'flex', alignItems: 'center' }}>
                  <CustomAvatar
                    skin='light'
                    variant='rounded'
                    color={item.avatarColor}
                    sx={{ mr: 2, width: 40, height: 40 }}
                  >
                    <Icon fontSize='2.125rem' icon={item.avatarIcon} />
                  </CustomAvatar>
                  <Typography variant='h6'>{item.stats}</Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AnalyticsEarningReports
