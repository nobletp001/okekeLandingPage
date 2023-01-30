import { Box, Button, CssBaseline, Paper, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid';
import { maxWidth } from '@mui/system';
function Page() {
    const theme = useTheme()
  return (
   <Box sx={{
backgroundColor:theme.main.bgBlack,
width:'100%',
minHeight:'100vh',
paddingX:{
    xs:3.5,
    md:6
},
paddingTop:{
    xs:2,
    md:4
}
   }}>
    <CssBaseline/>
    <Stack  direction='row' alignItems="center" justifyContent="space-between" sx={{
        height:'90px',
        width:'100%',
        backgroundColor:theme.main.navColor,
        border:'1px solid rgba(232, 232, 232, 0.19)',
        paddingX:{
            xs:3,
            md:5
        }
    }}>
<Stack direction="row" alignItems="center" justifyContent='center'>
<Stack sx={{
    paddingRight:1
}}>
    <img src="../image/logo.png"  />
</Stack>
<Typography  sx={{
    fontSize:'20px',
    lineHeight:'24px',
    color:'#fff',
    fontWeight:'400',
    cursor:'pointer',
   
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
    }

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
    </Stack>
    <Stack 
      sx={{
        width:'100%',
        diplay:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:{
            xs:3,
            md:2
        }
    }}
    >
        <Typography 
        sx={{
            color:' #949494',
            fontSize:'18px',
            lineHeight:'20px',
            opacity:0.7,
            fontWeight:'200',
            textAlign:{
                xs:'left',
                md:'center'
            },
            width:{
                xs:'100%',
                md:'50%'
            }
        }}
        >
        A decentralized domain naming service on core dao chain that allows users to easily discover and access decentralized services and application.
        </Typography>

    </Stack>
    <Stack  sx={{
        width:'100%',
       display:'flex',
       flexDirection:'column',
       justifyContent:'center',
       alignItems:'center',
       marginTop:4
    }}>
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
   border:'1px solid rgba(255, 255, 255, 0.21)',
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
<Stack sx={{
    marginTop:10
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
<Grid container spacing={2} sx={{
    marginTop:2,
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
    <Typography sx={{
        color:'#fff',
        fontSize:'16px'
    }}>1</Typography>
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
    <Typography sx={{
        color:'#fff',
        fontSize:'16px'
    }}>2</Typography>
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
    <Typography sx={{
        color:'#fff',
        fontSize:'16px'
    }}>3</Typography>
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
    <Typography sx={{
        color:'#fff',
        fontSize:'16px'
    }}>4</Typography>
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

<Stack sx={{
    width:'744px',
    height:'744px',
    borderRadius:'400px',
    border:'2px dashed rgba(255, 255, 255, 0.22)',
    position:'relative',
    marginY:30,
    display:{
        xs:'none',
        md:'block'
    }
}}>
   <Stack sx={{
    position:'absolute',
    left:'35%',
    top:'35%'
   }}>
   <img src="../image/LogoCircle.png" alt="logoCircle" />
   </Stack>
<Stack sx={{
    width:'221px',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
    position:'absolute',
    top:'-20%',
    left:'34%',
   padding:2,
   border:'0.5px solid gold'
}}>
    <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>1</Typography>
<Typography sx={{
    color:'#fff',
    textAlign:'center',
    paddingTop:5,
    fontSize:'14px',
    fontWeight:'400',
    padding:5
}}>Seamless and user-friendly experience for discovering and accessing decentralized service</Typography>
</Stack>
<Stack sx={{
    width:'221px',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
    position:'absolute',
  
    right:-60,
    top:200,
   padding:2,
   border:'0.5px solid gold'
}}>
    <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>3</Typography>
<Typography sx={{
    color:'#fff',
    textAlign:'center',
    paddingTop:5,
    fontSize:'14px',
    fontWeight:'400',
    padding:5
}}>Enabling the decentralized web to reach its full potential</Typography>
</Stack>
<Stack sx={{
    width:'221px',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
    position:'absolute',
  
    left:-60,
    top:200,
   padding:2,
   border:'0.5px solid gold'
}}>
    <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>2</Typography>
<Typography sx={{
    color:'#fff',
    textAlign:'center',
    paddingTop:5,
    fontSize:'14px',
    fontWeight:'400',
    padding:5
}}>Increased security through decentralized ownership and control of domain names</Typography>
</Stack>

<Stack sx={{
    width:'221px',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
    position:'absolute',
  
    right:250,
    bottom:-90,
   padding:2,
   border:'0.5px solid gold'
}}>
    <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>4</Typography>
<Typography sx={{
    color:'#fff',
    textAlign:'center',
    paddingTop:5,
    fontSize:'14px',
    fontWeight:'400',
    padding:5
}}>Empowerment for communities and developers to create and manage their own domain names</Typography>
</Stack>
</Stack>
<Grid container  spacing={4}  sx={{
    display:{
        xs:'block',
        md:'none'
    },
    marginTop:2,
    paddingX:{
        xs:5,
        md:0
    },
    marginBottom:2
}}>
  <Grid item xs={12}>
  <Stack sx={{
    width:'100%',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
   padding:2,
   border:'0.5px solid gold'
}}>
    <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>1</Typography>
<Typography sx={{
    color:'#fff',
    textAlign:'center',
    paddingTop:5,
    fontSize:'14px',
    fontWeight:'400',
    padding:5
}}>Seamless and user-friendly experience for discovering and accessing decentralized service</Typography>
</Stack>
  </Grid>
  <Grid item xs={12}>
  <Stack sx={{
    width:'100%',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
   padding:2,
   border:'0.5px solid gold'
}}>
    <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>2</Typography>
<Typography sx={{
    color:'#fff',
    textAlign:'center',
    paddingTop:5,
    fontSize:'14px',
    fontWeight:'400',
    padding:5
}}>Increased security through decentralized ownership and control of domain names</Typography>
</Stack>
  </Grid>
  <Grid item xs={12}>
  <Stack sx={{
    width:'100%',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
   padding:2,
   border:'0.5px solid gold'
}}>
    <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>3</Typography>
<Typography sx={{
    color:'#fff',
    textAlign:'center',
    paddingTop:5,
    fontSize:'14px',
    fontWeight:'400',
    padding:5
}}>Empowerment for communities and developers to create and manage their own domain names</Typography>
</Stack>
  </Grid>
  <Grid item xs={12}>
  <Stack sx={{
    width:'100%',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
   padding:2,
   border:'0.5px solid gold'
}}>
    <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>4</Typography>
<Typography sx={{
    color:'#fff',
    textAlign:'center',
    paddingTop:5,
    fontSize:'14px',
    fontWeight:'400',
    padding:5
}}>Enabling the decentralized web to reach its full potential</Typography>
</Stack>
  </Grid>
 
</Grid>

<Stack sx={{
    width:'100%',
    height:'auto',
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
        md:'center'
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
    marginTop:5,
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
    maxWidth:150
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
    maxWidth:200

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
    maxWidth:200

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
    maxWidth:200

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
    maxWidth:200

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
    maxWidth:200

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
        xs:'12px',
        md:'16px'
    },
    fontWeight:'400'
}}>
All Rights Reserved 2023 | Crest Protocol
</Typography>
</Stack>
    </Stack>
    </Stack>
   </Box>
  )
}

export default Page