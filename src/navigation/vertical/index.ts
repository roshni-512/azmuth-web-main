// ** Type import
import { title } from 'process'
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Overview',
      path: '/home',
      icon: 'tabler:smart-home',
      children: [
        {
          title: 'Overview',
          path: '/home'
        },
        {
          title: 'Order',
          path: '/dashboards/Order'
        },
        {
          title: 'Shipments',
          path: '/dashboards/Shipments'
        },
        {
          title: 'NDR',
          path: '/dashboards/NDR'
        },
        {
          title: 'Whatsapp Comm',
          path: '/dashboards/WhatsappComm'
        },
        {
          title: 'RTO',
          path: '/dashboards/RTO'
        },
        {
          title: 'Courior',
          path: '/dashboards/Courior'
        },
        {
          title: 'Delays',
          path: '/dashboards/Delays'
        }
      ]
    },
    {
      title: 'Cossignment',
      icon: 'tabler:table',
      children: [
        {
          title: 'All',
          path: '/dashboards/AllTableConsigment'
        },
        {
          title: 'New',
          path: '/dashboards/NewDataConssigment'
        },
        {
          title: 'Ready To Ship',
          path: '/dashboards/Readytoship'
        },
        {
          title: 'Pickups',
          path: '/dashboards/Pickups'
        },
        {
          title: 'In Transit',
          path: '/dashboards/InTransitconssigment'
        },
        {
          title: 'Delivered',
          path: '/dashboards/Deliveredconssigment'
        },
        {
          title: 'RTO',
          path: '/dashboards/ConssigmentRTO'
        }
      ]
    },
    {
      title: 'Return',
      icon: 'tabler:file-dollar',
      children: [
        {
          title: 'All',
          path: '/dashboards/ReturnTable'
        },
        {
          title: 'Return Requests',
          path: '/dashboards/ReturnTable/ReturnRequests'
        },
        {
          title: 'New Returns',
          path: '/dashboards/ReturnTable/NewReturnRequest'
        },
        {
          title: 'Return Pickup Scheduled',
          path: '/dashboards/ReturnTable/ReturnPickup'
        },
        {
          title: 'In Transit',
          path: '/dashboards/ReturnTable/ReturnInTransit'
        },
        {
          title: 'Return Received',
          path: '/dashboards/ReturnTable/ReturnReceived'
        },
        {
          title: 'Return Pending',
          path: '/dashboards/ReturnTable/ReturnPending'
        }
      ]
    },
    {
      title: 'NDR',
      icon: 'tabler:settings',
      children: [
        {
          title: 'Action Required',
          path: '/dashboards/NDRTables'
        },
        {
          title: 'Action Request',
          path: '/dashboards/NDRTables/ActionRequested'
        },
        {
          title: 'Delivered',
          path: '/dashboards/NDRTables/NDRDelivered'
        },
        {
          title: 'RTO',
          path: '/dashboards/NDRTables/NDRRto'
        }
      ]
    },
    {
      title: 'Weight Management',
      icon: 'tabler:file',
      children: [
        {
          title: 'Weight Discrepancies',
          path: '/dashboards/WeightManagement/WeightDiscreppancies'
        },
        {
          title: 'Weight Freeze',
          path: '/dashboards/WeightManagement/WeightFreeze'
        }
      ]
    },
    {
      title: 'SetUp & Manage',
      icon: 'tabler:file',
      children: [
        {
          title: 'Weight Discrepancies',
          path: '/dashboards/WeightManagement/WeightDiscreppancies'
        },
        {
          title: 'Weight Freeze',
          path: '/dashboards/WeightManagement/WeightFreeze'
        }
      ]
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'tabler:shield'
    }
  ]
}

export default navigation
