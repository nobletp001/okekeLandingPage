import React from 'react'
import { Stack, Typography,  } from '@mui/material'
import { motion } from 'framer-motion'

function Title({closeNav}) {
  return (
    <Stack 
    id="about"
    sx={{
        width:'100%',
        diplay:'flex',
        justifyContent:'center',
        flexWrap:'wrap',
        alignItems:'center',
        marginTop:{
            xs: closeNav?0: 10,
            md:15
        }
    }}>
<Typography 
component={motion.div}
initial={{ x:-100,   }}
whileInView={{ x:0 }}
viewport={{ }}
transition={{ ease: "easeOut", duration: 1 }}
sx={{
    color:'#fff',
    fontSize:'48px',
    lineHeight:'60px',
    textAlign:'center',
    fontWeight:'bold',
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