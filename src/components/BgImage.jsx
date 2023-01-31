import { Stack } from '@mui/material'
import React from 'react'

function BgImage() {
  return (
    <Stack sx={{
      width:500,
      height:200,
      // backgroundColor:'#fff'
      marginY:10,
      display:{
        xs:'none',
        md:'flex'
      }
     }}>
     <img src="../image/Backgroung.png" style={{
      // objectPosition:'center',
      objectFit:"cover"
     }} alt="bg"  h="100%" w="100%" />
     </Stack>
  )
}

export default BgImage