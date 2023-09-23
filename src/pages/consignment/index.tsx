import React from 'react'

import AllDataTable from '../../views/pages/consignment/AllDataTable'
import { Box } from "@mui/material";
import CommonTab from "../../views/pages/consignment/CommonTab";

const AllTableConsignment = () => {
  return (
    <Box>
      <CommonTab active={'All'} />
      <AllDataTable />
    </Box>
  )
}

export default AllTableConsignment
