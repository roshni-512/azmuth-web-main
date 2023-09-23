import React from 'react'
import Drawer from 'src/views/pages/WeightManagement/WeightFreeze/Drawer'

import WeightfreezeTable from 'src/views/pages/WeightManagement/WeightFreeze/WeightfreezeTable'

const index = () => {
  return (
    <div>
      <WeightfreezeTable />
      <Drawer />
    </div>
  )
}

export default index
