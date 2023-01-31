import React from 'react'
import { Stack, Typography,  } from '@mui/material'

function Title() {
  return (
    <Stack 
    sx={{
        width:'100%',
        diplay:'flex',
        justifyContent:'center',
        flexWrap:'wrap',
        alignItems:'center',
        marginTop:{
            xs:10,
            md:15
        }
    }}>
<Typography 
sx={{
    color:'#fff',
    fontSize:'48px',
    lineHeight:'60px',
    textAlign:{
        xs:'left',
        md:'center'
    },
    fontWeight:'400',
    width:{
        xs:'100%',
        md:'67%'
    }
}}>Empowering <span className='text'> Decentralized Identity </span>
on the core dao chain.</Typography>
<Stack sx={{
    position:'absolute',
    right:'20%',
    top:'70%',
    display:{
        xs:'none',
        md:'block'
    }
}}>
<img src="../image/long.png" alt="long"  />
</Stack>
    </Stack>
  )
}

export default Title