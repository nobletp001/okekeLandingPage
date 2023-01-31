import { Stack, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid";

function RoadMap() {
    const [tab, setTab] = React.useState('A');
    const tabFunc =(t)=>{
        setTab(t)
    }
  return (
    <Stack
      sx={{
        marginY: 20,
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontSize: "48px",
          color: "#fff",
          fontWeight: "600",
          textAlign: "center",
          width: "100%",
        }}
      >
        RoadMap
      </Typography>

      <Grid
        container
        spacing={0}
        sx={{
          marginTop: 10,
        }}
      >
        <Grid item xs={12} md={3}
        onClick={()=> tabFunc('A')}
        sx={{
            display:'flex',
            flexDirection:{
                xs:'row',
                md:'column'
            },
            cursor:'pointer'
        }}
        >
          <Stack  sx={{
            
          }}>
            <Typography
              sx={{
                fontSize: "64px",
                fontWeight: "600",
                color: tab==='A'?"#FEC625": "rgba(255, 255, 255, 0.15)",
              }}
            >
              Q1
            </Typography>
          </Stack>
          <Stack 
          sx={{
               borderLeft:{
                xs:`1px solid ${tab ==='A'? "#FEC625" :'#3C3C3C'}`,
                md:'none'
            },
            marginLeft:{
                xs:2,
                md:0
            },
            borderTop:{
                md:`1px solid ${tab ==='A'? "#FEC625" :'#3C3C3C'}`,
                xs:'none'
            },
            marginTop:{
                md:3,
                xs:0
            },
            paddingTop:{
                md:2,
                xs:0
            }
          }}>
            <ul>
              <li className={tab==='A'?'listActive' :"list"}>Conceptualization </li>
              <li  className={tab==='A'?'listActive' :"list"}>Team recruitment </li>
              <li  className={tab==='A'?'listActive' :"list"}>Brainstorming </li>
              <li className={tab==='A'?'listActive' :"list"}>Planning </li>
              <li  className={tab==='A'?'listActive' :"list"}>Project site Creation </li>
              <li className={tab==='A'?'listActive' :"list"}>Whitepaper </li>
              <li className={tab==='A'?'listActive' :"list"}>Research</li>
            </ul>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3} 
        onClick={()=> tabFunc('B')}

             sx={{
                
                display:'flex',
                flexDirection:{
                    xs:'row',
                    md:'column'
                },
            cursor:'pointer'

            }}
        >
          <Stack>
            <Typography
              sx={{
                fontSize: "64px",
                fontWeight: "600",
                color: tab==='B'?"#FEC625": "rgba(255, 255, 255, 0.15)",
              }}
            >
              Q2
            </Typography>
          </Stack>
          <Stack  
             sx={{
                borderLeft:{
                 xs:`1px solid ${tab ==='B'? "#FEC625" :'#3C3C3C'}`,
                 md:'none'
             },
             marginLeft:{
                 xs:2,
                 md:0
             },
             borderTop:{
                 md:`1px solid ${tab ==='B'? "#FEC625" :'#3C3C3C'}`,
                 xs:'none'
             },
             marginTop:{
                 md:3,
                 xs:0
             },
             paddingTop:{
                 md:2,
                 xs:0
             }
           }}
         >
            <ul>
              <li className={tab==='B'?'listActive' :"list"}>Testnet</li>
              <li className={tab==='B'?'listActive' :"list"}> Presale</li>
              <li className={tab==='B'?'listActive' :"list"}>Token tradable on dex</li>
              <li className={tab==='B'?'listActive' :"list"}>Mainnet</li>
              <li className={tab==='B'?'listActive' :"list"}>Crest protocol smart</li>
              <li className={tab==='B'?'listActive' :"list"}>contract audit</li>
              <li className={tab==='B'?'listActive' :"list"}>First cex listing</li>
              <li className={tab==='B'?'listActive' :"list"}>Staking</li>
            </ul>
          </Stack>
        </Grid>
        <Grid item xs={12} md={3} 
        onClick={()=> tabFunc('C')}

             sx={{
                display:'flex',
                flexDirection:{
                    xs:'row',
                    md:'column'
                },
                cursor:'pointer'
            }}
        >
          <Stack>
            <Typography
              sx={{
                fontSize: "64px",
                fontWeight: "600",
                color: tab==='C'?"#FEC625": "rgba(255, 255, 255, 0.15)",
              }}
            >
              Q3
            </Typography>
          </Stack>
          <Stack 
       
       sx={{
        borderLeft:{
         xs:`1px solid ${tab ==='C'? "#FEC625" :'#3C3C3C'}`,
         md:'none'
     },
     marginLeft:{
         xs:2,
         md:0
     },
     borderTop:{
         md:`1px solid ${tab ==='C'? "#FEC625" :'#3C3C3C'}`,
         xs:'none'
     },
     marginTop:{
         md:3,
         xs:0
     },
     paddingTop:{
         md:2,
         xs:0
     }
   }}
       >
            <ul>
              <li className={tab==='C'?'listActive' :"list"}>
            Limited NFT (1111) 

              </li>
              <li className={tab==='C'?'listActive' :"list"}>
Social media platform 

              </li>
              <li className={tab==='C'?'listActive' :"list"}>
      launch (website) 

              </li>
              <li className={tab==='C'?'listActive' :"list"}>
Dao platform launch 

              </li>
              <li className={tab==='C'?'listActive' :"list"}>
Second cex listing 

              </li>
              <li className={tab==='C'?'listActive' :"list"}>
Total revamp of ui

              </li>
            
            </ul>
          </Stack>
        </Grid>

        <Grid item xs={12} md={3} 
        onClick={()=> tabFunc('D')}

             sx={{
                display:'flex',
                flexDirection:{
                    xs:'row',
                    md:'column'
                },
                cursor:'pointer'
            }}
        >
          <Stack>
            <Typography
              sx={{
                fontSize: "64px",
                fontWeight: "600",
                color: tab==='D'?"#FEC625": "rgba(255, 255, 255, 0.15)",

              }}
            >
              Q4
            </Typography>
          </Stack>
          <Stack 
           
           sx={{
            borderLeft:{
             xs:`1px solid ${tab ==='D'? "#FEC625" :'#3C3C3C'}`,
             md:'none'
         },
         marginLeft:{
             xs:2,
             md:0
         },
         borderTop:{
             md:`1px solid ${tab ==='D'? "#FEC625" :'#3C3C3C'}`,
             xs:'none'
         },
         marginTop:{
             md:3,
             xs:0
         },
         paddingTop:{
             md:2,
             xs:0
         }
       }}
       >
            <ul>
              <li className={tab==='D'?'listActive' :"list"}>
              Social media app release 


              </li>
              <li className={tab==='D'?'listActive' :"list"}>
              (IOS & android) 


              </li>
              <li className={tab==='D'?'listActive' :"list"}>
              Top partnership 


              </li>
              <li className={tab==='D'?'listActive' :"list"}>
              Ads service integration  


              </li>
        
            </ul>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
}

export default RoadMap;
