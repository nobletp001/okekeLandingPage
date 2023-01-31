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
  <Header/>
  <Title/>
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
<FooterSection/>

    </Stack>
   </Box>
  )
}

export default Page