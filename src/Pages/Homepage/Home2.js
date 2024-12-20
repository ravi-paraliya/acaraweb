import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import home2 from '../../Assets/home/home2.jpeg'

function Home2() {
  return (
    <Box py={10}>
      <Container maxWidth="lg">
       <Box>
        <Grid item container spacing={0} xs={12}>
          <Grid item xs={12} lg={6}  textAlign={"start"}>
          <Box sx={{width:{lg:"70%",md:"100%",xs:"100%"}}}>
            <Box>
                <Typography variant='h6' color={"#de463b"} fontFamily={"Poppins, sans-serif"} textTransform={"uppercase"} fontSize={"14px"} letterSpacing={1}>About Us</Typography>
            </Box>
            <Box py={1}>
                <Typography fontSize={"32px"} fontFamily={"Poppins, sans-serif"} fontWeight={600}>We Help Corporate to Manage Event</Typography>
            </Box>
            <Box py={1}>
                <Typography color={"#5F656C"}>Sit vestibulum nec nam porttitor nibh. Urna at faucibus aliquet dolor. Facilisis id diam pellentesque et odio. Potenti sagittis massa lorem arcu sed diam. Consectetur elit sit in donec vitae blandit tincidunt eu. Sed nulla vel diam commodo. Placerat cursus sed blandit eu odio.</Typography>
            </Box>
            <Box sx={{display:"flex",justifyContent:"center"}}>
                <Box sx={{bgcolor:"#1a1a1a14",width:"100%",textAlign:"center",py:"20px"}}>
                    <Typography fontSize={"30px"} fontWeight={600} color={"#5F656C"}>1994</Typography>
                    <Typography fontSize={"12px"} letterSpacing={1}>ESTABLISHED</Typography>
                </Box>
                <Box sx={{bgcolor:"#1a1a1a14",width:"100%",textAlign:"center",py:"20px"}}>
                    <Typography fontSize={"30px"} fontWeight={600} color={"#5F656C"}>100</Typography>
                    <Typography fontSize={"12px"} letterSpacing={1}>EMPLOYEE</Typography>
                </Box>
            </Box>
            </Box> 

          </Grid>
          <Grid item xs={12} lg={6}>
               <Box>
                  <img src={home2}  style={{width:"100%"}}/>
               </Box>
          </Grid>  
        </Grid>
       </Box>

      </Container>
    </Box>
  )
}

export default Home2