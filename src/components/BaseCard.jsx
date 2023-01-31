import { Button, Stack, Typography } from '@mui/material'
import React from 'react'

function BaseCard() {
  return (
    <Stack sx={{
        width:'100%',
        height:{
            xs:'auto',
            md:'510px'
        },
        backgroundColor:'#110E10',
        border:'1px solid rgba(255, 255, 255, 0.16)',
        borderRadius:'24px',
        marginX:10,
        paddingY:5,
        marginBottom:4,
        display:'flex',
        flexDirection:'column',
        justifyContent:{
            xs:'flex-start',
            // md:'center'
        },
        alignItems:{
            xs:'flex-start',
            md:'center'
        }
    }}>
    <Typography sx={{
        fontSize:'48px',
        color:'#fff',
        fontWeight:'600',
        textAlign:'center',
        width:'100%'
    }}>Features</Typography>
    <Stack direction={{
        xs:'column',
        md:"row"
    }} sx={{
        marginTop:{
            xs:5,
            md:10
        },
        justifyContent:'center',
        width:{
            md:'80%',
            xs:'100%'
        },
        mx:{
            md:0,
            xs:5
        },
    
        flexWrap:'wrap',
        gap:5,
      
    }}>
    <Button 
     sx={{
        border: '1px solid #FEC625',
        backgroundColor:'#231B16',
        maxWidth:150,
    borderRadius:'9px'

     }}
         >
        <Typography  sx={{
        fontSize:'16px',
        lineHeight:'24px',
        color:'#fff',
        fontWeight:'400',
       textTransform:'capitalize',
       backgroundColor:"transparent",
       padding:1
    }}>
    Decentralization
        </Typography>
        </Button>
        <Button 
     sx={{
        border: '1px solid #FEC625',
        backgroundColor:'#231B16',
        maxWidth:200,
    borderRadius:'9px'

    
     }}
         >
        <Typography  sx={{
        fontSize:'16px',
        lineHeight:'24px',
        color:'#fff',
        fontWeight:'400',
       textTransform:'capitalize',
       backgroundColor:"transparent",
       padding:1
    }}>
    Smooth user interface
        </Typography>
        </Button>
        <Button 
     sx={{
        border: '1px solid #FEC625',
        backgroundColor:'#231B16',
        maxWidth:200,
    borderRadius:'9px'

    
     }}
         >
        <Typography  sx={{
        fontSize:'16px',
        lineHeight:'24px',
        color:'#fff',
        fontWeight:'400',
       textTransform:'capitalize',
       backgroundColor:"transparent",
       padding:1
    }}>
    Social identity
        </Typography>
        </Button>
        <Button 
     sx={{
        border: '1px solid #FEC625',
        backgroundColor:'#231B16',
        maxWidth:200,
    borderRadius:'9px'

    
     }}
         >
        <Typography  sx={{
        fontSize:'16px',
        lineHeight:'24px',
        color:'#fff',
        fontWeight:'400',
       textTransform:'capitalize',
       backgroundColor:"transparent",
       padding:1
    }}>
    Stability
        </Typography>
        </Button>
        <Button 
     sx={{
        border: '1px solid #FEC625',
        backgroundColor:'#231B16',
        maxWidth:200,
    borderRadius:'9px'

    
     }}
         >
        <Typography  sx={{
        fontSize:'16px',
        lineHeight:'24px',
        color:'#fff',
        fontWeight:'400',
       textTransform:'capitalize',
       backgroundColor:"transparent",
       padding:1
    }}>
    Pentested
        </Typography>
        </Button>
        <Button 
     sx={{
        border: '1px solid #FEC625',
        backgroundColor:'#231B16',
       width:{
        md:'auto',
        xs:'70%'
       },
    borderRadius:'9px'
     }}
         >
        <Typography  sx={{
        fontSize:'16px',
        lineHeight:'24px',
        color:'#fff',
        fontWeight:'400',
       textTransform:'capitalize',
       backgroundColor:"transparent",
       padding:1
    }}>
    24/7 Administrative support
        </Typography>
        </Button>
    
    </Stack>
    </Stack>
  )
}

export default BaseCard