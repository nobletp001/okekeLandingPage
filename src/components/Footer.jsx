import { Stack, Typography, useTheme } from '@mui/material'
import React from 'react'

function FooterSection() {
 const theme=   useTheme()
  return (
    <Stack  direction={{
        xs:'column',
        md:'row'
    }} alignItems="center" justifyContent="space-between" sx={{
            height:'auto',
            width:'100%',
            backgroundColor:theme.main.navColor,
            border:'1px solid rgba(232, 232, 232, 0.19)',
            paddingX:{
                xs:5,
                md:5
            },
            paddingY:{
                xs:5,
                md:5
            },
            borderRadius:'24px',
            marginBottom:3
        }}>
    <Stack direction="row" sx={{
        flex:1,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'flex-start',
        width:'100%'
    }}>
    <img src="../image/telegram.png" alt="telegram" />
    <img src="../image/facebook.png" alt="facebook" />
    <img src="../image/twitter.png" alt="twitter" />
    <img src="../image/youtube.png" alt="youtube" />
    <img src="../image/github.png" alt="github" />
    <img src="../image/instagram.png" alt="instagram" />
    <img src="../image/linkedin.png" alt="linkedin" />
    
    
    
    
    
    </Stack>
    <Stack sx={{
        flex:{
            xs:1,
            md:2
        },
        marginTop:{
    xs:2,
    md:0
        },
    display:'flex',
    justifyContent:{
        xs:'center',
        md:'flex-end'
    },
    alignItems:{
        xs:'center',
        md:'flex-end'
    }
    }}>
    <Typography sx={{
        color:'#ECEBEF',
        fontSize:{
            xs:'15px',
            md:'16px'
        },
        fontWeight:'400'
    }}>
    All Rights Reserved 2023 | Crest Protocol
    </Typography>
    </Stack>
        </Stack>
  )
}

export default FooterSection