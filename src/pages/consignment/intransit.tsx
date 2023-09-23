import React from 'react'
import IntransitTable from '../../views/pages/consignment/InTansit/IntransitTable'
import CommonTab from "../../views/pages/consignment/CommonTab";

const Intransitable = () => {
  return (
    <div>
      <CommonTab active={'In Transit'} />
      <IntransitTable />
    </div>
  )
}

export default Intransitable
