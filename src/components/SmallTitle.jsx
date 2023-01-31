import { Stack, Typography } from '@mui/material'
import React from 'react'

function SmallTitle() {
   

  return (
    <Stack 
    sx={{
      width:'100%',
      diplay:'flex',
      justifyContent:'center',
      alignItems:'center',
      marginTop:{
          xs:4,
          md:3
      }
  }}
  >
      <Typography 
      sx={{
          color:'#949494',
          fontSize:'18px',
          lineHeight:'20px',
          fontWeight:'400',
          textAlign:{
              xs:'left',
              md:'center'
          },
          width:{
              xs:'100%',
              md:'50%'
          }
      }}
      >
      A decentralized domain naming service on core dao chain that allows users to easily discover and access decentralized services and application.
      </Typography>

  </Stack>
  )
}

export default SmallTitle