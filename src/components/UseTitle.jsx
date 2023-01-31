import { Stack } from '@mui/material'
import React from 'react'

function UseTitle() {
  return (
    <Stack sx={{
        marginTop:{
          xs:10,
          md:20
        }
    }}>
     <span style={{
        fontSize:'48px',
        textAlign:'center',
        color:'#5C5C5C',
        fontWeight:'bold' }}>
    Use <span  style={{
        color:'#fff'
    }}> Case</span>
     </span>
    </Stack>
  )
}

export default UseTitle