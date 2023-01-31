import React from 'react'
import { Button,  Stack, Typography, useTheme} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
function Header() {
    const theme = useTheme()
  return (
    <Stack  direction='row' alignItems="center" justifyContent="space-between" sx={{
        height:'90px',
        width:'100%',
        backgroundColor:theme.main.navColor,
        border:'1px solid rgba(232, 232, 232, 0.19)',
        paddingX:{
            xs:3,
            md:5
        },
        borderRadius:'20px'
    }}>
<Stack direction="row" alignItems="center" justifyContent='center'>
<Stack sx={{
    paddingRight:1
}}>
    <img src="../image/logo.png" alt='logo'  />
</Stack>
<Typography  sx={{
    fontSize:'20px',
    lineHeight:'24px',
    color:'#fff',
    fontWeight:'400',
    cursor:'pointer',
    display:{
        xs:'none',
        md:'inline-block'
    }
   
}}>
Crest Protocol
</Typography>
</Stack>
<Typography 
sx={{
    fontSize:'20px',
    lineHeight:'24px',
    color:'#fff',
    fontWeight:'400',
    cursor:'pointer',
    display:{
        md:'block',
        xs:'none'
    }
}}>About</Typography>
<Typography  sx={{
    fontSize:'20px',
    lineHeight:'24px',
    color:'#fff',
    fontWeight:'400',
    cursor:'pointer',
    display:{
        md:'block',
        xs:'none'
    }
}}>Roadmap</Typography>
<Typography  sx={{
    fontSize:'20px',
    lineHeight:'24px',
    color:'#fff',
    fontWeight:'400',
    cursor:'pointer',
    display:{
        md:'block',
        xs:'none'
    }
}}>Features</Typography>
<Button   variant="outlined" sx={{
   border:'1px solid rgba(255, 255, 255, 0.21)',
 display:{
        md:'block',
        xs:'none'
    },
    ":hover":{
        border:'1px solid rgba(255, 255, 255, 0.21)',
    },
height:'43px',
borderRadius:'8px'
}}>
    <Typography  sx={{
    fontSize:'20px',
    lineHeight:'24px',
    color:'#fff',
    fontWeight:'400',
   textTransform:'capitalize',
   backgroundColor:"transparent",
}}>
Launch Dapp
    </Typography>
    </Button>

<MenuIcon  sx={{
    color:'#fff',
    fontSize:'2.5rem',
    display:{
        xs:'inline-block',
        md:'none'
    },
    cursor:'pointer'
}}/>

    </Stack>
  )
}

export default Header