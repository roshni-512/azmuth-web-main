import React from 'react'
import NewDataconssigment from '../../views/pages/consignment/NewDataconssigment/NewDataconssigment'
import CommonTab from "../../views/pages/consignment/CommonTab";
import Box from "@mui/material/Box";

const NewConsignment = () => {
  return (
    <Box>
      <CommonTab active={'New'} />
      <NewDataconssigment />
    </Box>
  )
}

export default NewConsignment
