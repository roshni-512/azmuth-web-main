import React from 'react'
import NDRDeliveredTable from 'src/views/pages/NDRTables/NDRDelivered/NDRDeliveredTable'
import NDRTable from 'src/views/pages/NDRTables/NDRTable'
import WeightDiscrepancies from 'src/views/pages/WeightManagement/WeightDiscrepancies'
import WeightDiscreppanciesCards from 'src/views/pages/WeightManagement/WeightDiscreppanciesCards'

const index = () => {
  return (
    <div>
      <WeightDiscreppanciesCards />

      <WeightDiscrepancies />
    </div>
  )
}

export default index
