import React from 'react'
import { Button,  Stack, Typography, useTheme} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { toast } from 'react-toastify';
import { AnimatePresence, motion } from 'framer-motion';
function Header({closeNav, setcloseNav}) {
    const theme = useTheme()
const handleAbout =()=>{
    const element = document.getElementById('about')
    if(element){
        element.scrollIntoView({
            behavior:'smooth'
        })
    }
}
const RoadMapFunc =()=>{
    const element = document.getElementById('roadmap')
    if(element){
        element.scrollIntoView({
            behavior:'smooth'
        })
    }
}
const FeatureFunc =()=>{
    const element = document.getElementById('feature')
    if(element){
        element.scrollIntoView({
            behavior:'smooth'
        })
    }
}

const NavFunc =()=>{
    const element = document.getElementById('nav')
    if(element){
        element.scrollIntoView({
            behavior:'smooth'
        })
    }
}

  return (
<>

<Stack  id="nav" direction='row' alignItems="center" justifyContent="space-between" sx={{
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
<Stack 
onClick={NavFunc}
sx={{
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
onClick={handleAbout}
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
<Typography 
onClick={RoadMapFunc}

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
}}>Roadmap</Typography>
<Typography 
onClick={FeatureFunc}

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
}}>Features</Typography>

<Button 

onClick={()=>{
    toast.info('Coming soon!', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
}}
variant="outlined" sx={{
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

{
    !closeNav && <MenuIcon 
    onClick={()=>{
        setcloseNav(!closeNav)
    }}
    sx={{
        color:'#fff',
        fontSize:'2.5rem',
        display:{
            xs:'inline-block',
            md:'none'
        },
        cursor:'pointer'
    }}/>
    
}
{
    closeNav  && <CloseIcon
    onClick={()=>{
        setcloseNav(!closeNav)
    }}
    sx={{
        color:'#fff',
        fontSize:'2.5rem',
        display:{
            xs:'inline-block',
            md:'none'
        },
        cursor:'pointer'
    }}/>
    
}
    </Stack>
    
<AnimatePresence existBeforeEnter>
{
    closeNav &&<Stack 
    component={motion.div}
    initial={{ y: "-100%" }}
    animate={{ y: 0 }}
    exit={{ y: "-100%" }}
    transition={{ ease: "easeOut", duration: 0.3 }}
    sx={{
       width:'100%',
       height:'auto',
       display:{
           xs:closeNav ?'flex':'flex',
           md:'none'
       },
       justifyContent:'center',
       flexDirection:'column' ,
       alignItems:'center',
       backgroundColor:theme.main.navColor,
       borderRadius:'20px',
      
      
   
    }}>
   <Typography 
   onClick={()=>{
       handleAbout()
       setcloseNav(!closeNav)
   }}
   sx={{
       fontSize:'20px',
       lineHeight:'24px',
       color:'#fff',
       fontWeight:'400',
       cursor:'pointer',
       padding:2
   }}>About</Typography>
   
   <Typography 
   onClick={()=>{
       RoadMapFunc()
       setcloseNav(!closeNav)
   }}
   sx={{
       fontSize:'20px',
       lineHeight:'24px',
       color:'#fff',
       fontWeight:'400',
       cursor:'pointer',
       padding:2
   }}>Roadmap</Typography>
   <Typography 
   onClick={()=>{
       FeatureFunc()
       setcloseNav(!closeNav)
   }}
   sx={{
       fontSize:'20px',
       lineHeight:'24px',
       color:'#fff',
       fontWeight:'400',
       cursor:'pointer',
       padding:2
   }}>Features</Typography>
   
   <Button 
   onClick={()=>{
       toast.info('Coming soon!', {
           position: "top-right",
           autoClose: 2000,
           hideProgressBar: false,
           closeOnClick: true,
           pauseOnHover: true,
           draggable: true,
           progress: undefined,
           theme: "light",
           });
   }}
   
   
   variant="outlined" sx={{
      border:'1px solid rgba(255, 255, 255, 0.21)',
   
       ":hover":{
           border:'1px solid rgba(255, 255, 255, 0.21)',
       },
   height:'43px',
   borderRadius:'8px',
   margin:2
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
    </Stack>
}

</AnimatePresence>
 
</>
  )
}

export default Header