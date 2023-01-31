import { Stack, Typography } from '@mui/material'
import React from 'react'

function BenefitTitle() {
  return (
<Stack sx={{
    marginTop:30
}}>
    <Typography sx={{
        color:'#fff',
        fontSize:'48px',
        fontWeight:'600',
        textAlign:'center'
    }}>Benefits</Typography>
</Stack>
  )
}

export default BenefitTitle