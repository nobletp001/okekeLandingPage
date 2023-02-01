import { Box,CssBaseline, Stack,  useTheme } from '@mui/material'
import React from 'react'
import Header from '../components/Header';
import Title from '../components/Title';
import SmallTitle from '../components/SmallTitle';
import GroupButton from '../components/GroupButton';
import UseTitle from '../components/UseTitle';
import GridCard from '../components/GridCard';
import BenefitTitle from '../components/BenefitTitle';
import RoundedCard from '../components/RoundedCard';
import BaseCard from '../components/BaseCard';
import FooterSection from '../components/Footer';
import BgImage from '../components/BgImage';
import RoadMap from '../components/RoadMap';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Page() {
  const [closeNav, setcloseNav] = React.useState(false);

    const theme = useTheme()
    const handleTo =()=>{
      window.scrollTo({
        behavior:'smooth',
        top:0
      })
    }
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
    <ArrowUpwardIcon
    onClick={handleTo}
  sx={{
    color:'#fff',
    fontSize:'2.5rem',
    position:'fixed',
    bottom:0,
    right:10,
    cursor:'pointer',
    zIndex:1000
}}
/>
    <CssBaseline/>
  <Header closeNav={closeNav} setcloseNav={setcloseNav} />
  <Title closeNav={closeNav} />
  <SmallTitle/>
    <Stack  sx={{
        width:'100%',
       display:'flex',
       flexDirection:'column',
       justifyContent:'center',
       alignItems:'center',
       marginTop:4
    }}>
  <GroupButton/>
  <BgImage/>
<UseTitle/>

<GridCard/>

<BenefitTitle/>

<RoundedCard/>
<BaseCard/>
<RoadMap/>
<FooterSection/>

    </Stack>
   </Box>
  )
}

export default Page