import { Grid, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'

function RoundedCard() {
  return (
    <>

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
    right:'-10%',
    bottom:0,
    display:{
        xs:'none',
        md:'block'
    }
}}>
<img src="../image/long.png" alt="long"  />
</Stack>
<Stack sx={{
    position:'absolute',
    left:'-10%',
    top:0,
    display:{
        xs:'none',
        md:'block'
    }
}}>
<img src="../image/long.png" alt="long"  />
</Stack>
   <Stack sx={{
    position:'absolute',
    left:'35%',
    top:'35%'
   }}>
   <img src="../image/LogoCircle.png" alt="logoCircle" />
   </Stack>
<Stack  

className="bgColor"

sx={{
    width:'221px',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
    position:'absolute',
    top:'-20%',
    left:'34%',
   padding:2,
  
}}>
  <Stack sx={{
    width:'44px',
    height:'38px',
    borderRadius:'5px',
    border: '1px solid rgba(255, 255, 255, 0.19)',
    justifyContent:'center',
    alignItems:'center',
    display:'flex'
  }}>
  <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>1</Typography>

  </Stack>
<Typography sx={{
    color:'#fff',
    textAlign:'center',
    paddingTop:5,
    fontSize:'14px',
    fontWeight:'400',
    padding:5
}}>Seamless and user-friendly experience for discovering and accessing decentralized service</Typography>
</Stack>
<Stack  
className="bgColor"

sx={{
    width:'221px',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
    position:'absolute',
  
    right:-60,
    top:200,
   padding:2,
  
}}>
  <Stack sx={{
    width:'44px',
    height:'38px',
    borderRadius:'5px',
    border: '1px solid rgba(255, 255, 255, 0.19)',
    justifyContent:'center',
    alignItems:'center',
    display:'flex'
  }}>
  <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>3</Typography>

  </Stack>
<Typography sx={{
    color:'#fff',
    textAlign:'center',
    paddingTop:5,
    fontSize:'14px',
    fontWeight:'400',
    padding:5
}}>Enabling the decentralized web to reach its full potential</Typography>
</Stack>
<Stack
className="bgColor"

sx={{
    width:'221px',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
    position:'absolute',
  
    left:-60,
    top:200,
   padding:2,

}}>
  <Stack sx={{
    width:'44px',
    height:'38px',
    borderRadius:'5px',
    border: '1px solid rgba(255, 255, 255, 0.19)',
    justifyContent:'center',
    alignItems:'center',
    display:'flex'
  }}>
  <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>2</Typography>

  </Stack>
<Typography sx={{
    color:'#fff',
    textAlign:'center',
    paddingTop:5,
    fontSize:'14px',
    fontWeight:'400',
    padding:5
}}>Increased security through decentralized ownership and control of domain names</Typography>
</Stack>

<Stack 
className="bgColor"

sx={{
    width:'221px',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
    position:'absolute',
  
    right:250,
    bottom:-90,
   padding:2,

}}>
  <Stack sx={{
    width:'44px',
    height:'38px',
    borderRadius:'5px',
    border: '1px solid rgba(255, 255, 255, 0.19)',
    justifyContent:'center',
    alignItems:'center',
    display:'flex'
  }}>
  <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>4</Typography>

  </Stack>
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
  <Stack
className="bgColor"
  
  sx={{
    width:'100%',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
   padding:2,
 
}}>
    <Stack sx={{
    width:'44px',
    height:'38px',
    borderRadius:'5px',
    border: '1px solid rgba(255, 255, 255, 0.19)',
    justifyContent:'center',
    alignItems:'center',
    display:'flex'
  }}>
  <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>1</Typography>

  </Stack>
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
  <Stack  
className="bgColor"
  
  sx={{
    width:'100%',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
   padding:2,
 
}}>
   <Stack sx={{
    width:'44px',
    height:'38px',
    borderRadius:'5px',
    border: '1px solid rgba(255, 255, 255, 0.19)',
    justifyContent:'center',
    alignItems:'center',
    display:'flex'
  }}>
  <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>2</Typography>

  </Stack>
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
  <Stack  
className="bgColor"
  
  sx={{
    width:'100%',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
   padding:2,
 
}}>
    <Stack sx={{
    width:'44px',
    height:'38px',
    borderRadius:'5px',
    border: '1px solid rgba(255, 255, 255, 0.19)',
    justifyContent:'center',
    alignItems:'center',
    display:'flex'
  }}>
  <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>3</Typography>

  </Stack>
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
  <Stack 
  
className="bgColor"
  
  sx={{
    width:'100%',
    height:'260px',
    backgroundColor:'#1B181A',
    borderRadius:'9px',
   padding:2,
  
}}>
     <Stack sx={{
    width:'44px',
    height:'38px',
    borderRadius:'5px',
    border: '1px solid rgba(255, 255, 255, 0.19)',
    justifyContent:'center',
    alignItems:'center',
    display:'flex'
  }}>
  <Typography sx={{
        color:'#fff',
        textAlign:'center'
    }}>4</Typography>

  </Stack>
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
    </>
  )
}

export default RoundedCard