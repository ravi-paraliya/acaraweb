import { Box, Button, colors, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import home1 from '../../Assets/home/home1.jpeg'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import Header from '../../Commoncomponents/Header/Header';

function Home1() {
  return (
    <Box sx={{backgroundImage:`linear-gradient(rgba(48, 44, 44, 0.7),rgba(60, 57, 39, 0.7)),url(${home1})`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}  width={"100%"} >
    <Header />
       <Container>
          <Box display={"flex"} justifyContent={"center"} alignItems={"center"} py={20}>
            <Grid container item spacing={2} xs={12} display={"flex"} justifyContent={"center"} alignItems={"end"}>
              <Grid item xs={12} sm={6} padding={5} display={"flex"}  justifyContent={"center"} alignItems={"center"}>
                <Box display={"flex"} alignItems={"center"} gap={2}>
                 <Typography><PlayCircleIcon sx={{color:"#de463b",fontSize:"40px","&:hover":{color:"white"}}}/></Typography>
                 <Typography sx={{color:"white",fontSize:"12px",fontWeight:"600",letterSpacing:"2px"}}>PLAY THE VIDEO</Typography>
                 </Box>
              </Grid> 
              <Grid item xs={12} sm={6}>
                 <Box>
                    <Typography sx={{fontSize:"48px",textAlign:"start",fontWeight:"600",color:"white",lineHeight:"60px",fontFamily:"Poppins,sans-serif"}}>The UK’s Best Event Management Agency for Corporate</Typography>
                    <Typography sx={{textAlign:"start",color:"white",lineHeight:"25px",py:"10px"}}>A integer hac in id. Mollis consequat, consectetur egestas in quam. Id velit eleifend tincidunt varius sagittis sed ut. Pretium, risus ac augue arcu ullamcorper semper integer.</Typography>
                    <Box display={"flex"} justifyContent={"start"} py={3}>
                    <Button variant='outlined' sx={{borderColor:"white",color:"white",padding:"8px 15px",borderRadius:"10px",fontSize:"12px",fontWeight:"600",letterSpacing:"2px",cursor:"pointer","&:hover":{backgroundColor:"white",color:"black",border:"none"}}}>Learn More</Button>

                    </Box>
                 </Box>
              </Grid>
                
            </Grid>
          </Box>
       </Container> 
    </Box>
  )
}

export default Home1