import React from 'react'

import ConssigmentRTOTable from '../../views/pages/consignment/RTO/ConssigmentRTOTable'
import Box from "@mui/material/Box";
import CommonTab from "../../views/pages/consignment/CommonTab";

const ConssigmentRto = () => {
  return (
    <Box>
      <CommonTab active={'RTO'} />
      <ConssigmentRTOTable />
    </Box>
  )
}

export default ConssigmentRto
