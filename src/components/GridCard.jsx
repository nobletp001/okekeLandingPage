import { Grid, Stack, Typography } from '@mui/material'
import React from 'react'

function GridCard() {
  return (
    <Grid container spacing={2} sx={{
        marginTop:4,
        paddingX:{
            xs:5,
            md:0
        }
      
     }}>
     
     <Grid item xs={12} md={3}>
       <Stack  sx={{
        height:'222px',
       backgroundColor:'#1B181A',
        width:'100%',
        borderRadius:'9px',
        padding:2
      
       }}>
        <Stack sx={{
            width:'45px',
            height:'38px',
            border: '1px solid rgba(255, 255, 255, 0.19)',
            borderRadius:'5px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Typography sx={{
            color:'#fff',
            fontSize:'16px',
            
        }}>1</Typography>
        </Stack>
    <Typography  sx={{
        color:'#fff',
        fontSize:'20px',
        fontWeight:'600',
        textAlign:'center',
        paddingTop:"25%"
    }}>Decentralized marketplaces</Typography>
       </Stack>
      </Grid>
      <Grid item xs={12} md={3}>
       <Stack  sx={{
        height:'222px',
       backgroundColor:'#1B181A',
        width:'100%',
        borderRadius:'9px',
        padding:2
      
       }}>
              <Stack sx={{
            width:'45px',
            height:'38px',
            border: '1px solid rgba(255, 255, 255, 0.19)',
            borderRadius:'5px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Typography sx={{
            color:'#fff',
            fontSize:'16px',
            
        }}>2</Typography>
        </Stack>
    <Typography  sx={{
        color:'#fff',
        fontSize:'20px',
        fontWeight:'600',
        textAlign:'center',
        paddingTop:"25%"
    }}>Decentralized Social media Platform</Typography>
       </Stack>
      </Grid>
      <Grid item xs={12} md={3}>
       <Stack  sx={{
        height:'222px',
       backgroundColor:'#1B181A',
        width:'100%',
        borderRadius:'9px',
        padding:2
      
       }}>
        <Stack sx={{
            width:'45px',
            height:'38px',
            border: '1px solid rgba(255, 255, 255, 0.19)',
            borderRadius:'5px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Typography sx={{
            color:'#fff',
            fontSize:'16px',
            
        }}>3</Typography>
        </Stack>
    <Typography  sx={{
        color:'#fff',
        fontSize:'20px',
        fontWeight:'600',
        textAlign:'center',
        paddingTop:"25%"
    }}>Gaming and Virtual worlds</Typography>
       </Stack>
      </Grid> 
      <Grid item xs={12} md={3}>
       <Stack  sx={{
        height:'222px',
       backgroundColor:'#1B181A',
        width:'100%',
        borderRadius:'9px',
        padding:2
      
       }}>
        <Stack sx={{
            width:'45px',
            height:'38px',
            border: '1px solid rgba(255, 255, 255, 0.19)',
            borderRadius:'5px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Typography sx={{
            color:'#fff',
            fontSize:'16px',
            
        }}>4</Typography>
        </Stack>
    <Typography  sx={{
        color:'#fff',
        fontSize:'20px',
        fontWeight:'600',
        textAlign:'center',
        paddingTop:"25%"
    }}>File sharing and storage</Typography>
       </Stack>
      </Grid>
    </Grid>
  )
}

export default GridCard