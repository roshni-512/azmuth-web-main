import React from 'react'
import {useRouter} from 'next/router';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const DEFAULT_KEY = [
  {
    title: 'All',
    path: '/consignment'
  },
  {
    title: 'New',
    path: '/consignment/new'
  },
  {
    title: 'Ready To Ship',
    path: '/consignment/ship'
  },
  {
    title: 'Pickups',
    path: '/consignment/pickup'
  },
  {
    title: 'In Transit',
    path: '/consignment/intransit'
  },
  {
    title: 'Delivered',
    path: '/consignment/delivered'
  },
  {
    title: 'RTO',
    path: '/consignment/rto'
  },
]

interface Props {
  active: string
}

const CommonTab = ({active}: Props) => {
  const router = useRouter();

  return (
    <Box sx={{display: 'flex', alignItems: 'center', gap: 5, my: 5}}>
      {DEFAULT_KEY.map((list, index) => {
        return (
          <Button variant={active === list.title ? 'contained' : 'outlined'} key={index}
                  onClick={() => router.push(list.path)}>{list.title}</Button>
        )
      })}
    </Box>
  )
}

export default CommonTab
