import React from 'react'
import { Button,  Stack, Typography,} from '@mui/material'

function GroupButton() {
  return (
    <Stack
direction='row'
justifyContent='space-between'
sx={{
    width:{
        xs:'100%',
        md:'40%'
    },
  
}}>
<Button  size="large" variant="outlined" sx={{
  borderRadius:'11px',
   border:'1px solid rgba(255, 255, 255, 0.21)',
   backgroundColor:"#1E1E1E",
width:'47%',
height:"68px",
':hover':{
   border:'1px solid rgba(255, 255, 255, 0.21)',

}
}}>
    <Typography  sx={{
    fontSize:'16px',
    lineHeight:'24px',
    color:'#fff',
    fontWeight:'400',
   textTransform:'capitalize',
   backgroundColor:"transparent",
}}>
WhitePaper
    </Typography>
    </Button>
    <Button 
  className="bg"
    
    variant="contained" sx={{
width:'47%',
height:"68px",
borderRadius:'11px',

}}>
    <Typography  sx={{
    fontSize:'16px',
    lineHeight:'24px',
    color:'#fff',
    fontWeight:'400',
   textTransform:'capitalize',
   backgroundColor:"transparent",
}}>
Launch Dapp
    </Typography>
    </Button>

</Stack>
  )
}

export default GroupButton