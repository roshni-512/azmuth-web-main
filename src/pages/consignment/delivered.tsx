import React from 'react'
import DeliveredTable from '../../views/pages/consignment/DeliveredConssigment/DeliveredTable'
import CommonTab from "../../views/pages/consignment/CommonTab";


const deliveredTable = () => {
  return (
    <div>
      <CommonTab active={'Delivered'} />
      <DeliveredTable />
    </div>
  )
}

export default deliveredTable
