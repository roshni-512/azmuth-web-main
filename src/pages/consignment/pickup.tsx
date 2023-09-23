import React from 'react'


import PickupconssigmentTable from '../../views/pages/consignment/Pickups/PickupconssigmentTable'
import Box from "@mui/material/Box";
import CommonTab from "../../views/pages/consignment/CommonTab";


const PickUp = () => {
  return (
    <Box>
      <CommonTab active={'Pickups'} />
      <PickupconssigmentTable />
    </Box>
  )
}

export default PickUp
