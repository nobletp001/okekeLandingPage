import { Stack } from '@mui/material'
import React from 'react'

function BgImage() {
  return (
    <Stack sx={{
      width:500,
      height:300,
      // backgroundColor:'#fff'
      marginY:10,
      display:{
        xs:'none',
        md:'block'
      }
     }}>
     <img src="../image/bg.png" style={{
      // objectPosition:'center',
      objectFit:"cover"
     }} alt="bg"  h="100%" w="100%" />
     </Stack>
  )
}

export default BgImage