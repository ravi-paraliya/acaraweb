import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import home15 from '../../Assets/home/home15.jpeg'
import home16 from '../../Assets/home/home16.jpeg'
import home17 from '../../Assets/home/home17.jpeg'
import home18 from '../../Assets/home/home18.jpeg'
import home19 from '../../Assets/home/home19.jpeg'
import home20 from '../../Assets/home/home20.jpeg'

function Home6() {
    const data =[
        {
            image:home15,
            title:"Full-Service Production",
            details:"Tempor sit dictum volutpat tortor. Mauris eleifend commodo mi pharetra aliquam sed. Commodo odio quis neque."
        },
        {
            image:home16,
            title:"Event Management",
            details:"Donec lectus maecenas odio pretium erat. Sed netus sit amet, fames fermentum. Sed in nulla a nisl leo."
        },
        {
            image:home17,
            title:"Food And Beverage",
            details:"Habitant mauris, est massa dignissim nulla et porttitor erat mauris sed platea morbi tortor dignissim cursus."
        },
        {
            image:home18,
            title:"Live Entertainment",
            details:"Amet elementum sed et lectus feugiat sagittis, quam nunc eget nec mauris a habitant ut pellentesque."
        },
        {
            image:home19,
            title:"Destination Management",
            details:"Auctor vitae cras sem sagittis, sit arcu, libero consectetur scelerisque tristique ut donec et ipsum quis."
        },
        {
            image:home20,
            title:"Company Picnic",
            details:"Maecenas lectus sit pellentesque egestas et sit at pellentesque nunc malesuada cursus iaculis feugiat ac justo."
        },
    ]
  return (
    <Box py={5}>
        <Container maxWidth="lg">
        <Box>
          <Box>
            <Typography sx={{ fontSize: "12px", fontFamily: "Poppins, sans-serif", color: "#de463b", fontWeight: "600", letterSpacing: "2px" }}>OUR SERVICES</Typography>
          </Box>
          <Box sx={{pt:"10px"}}>
            <Typography sx={{ fontSize: "34px", fontFamily: "Poppins, sans-serif", fontWeight: "600" }}>Corporate Event Management</Typography>
          </Box>
          <Box py={2}>
            <Typography color={"#5F656C"} fontSize={"14px"} textAlign={"center"}>Orci, gravida at dolor penatibus praesent. Id ac nunc nunc elementum vitae nunc cursus. Nunc cras facilisis fermentum elementum, suspendisse augue dolor.</Typography>
          </Box>
          <Box py={3}>
            <Button sx={{ border: "1px solid lightgray", color: "black", fontSize: "12px", letterSpacing: "2px", fontWeight: "600", px: "10px", }}>View All Services</Button>
          </Box>
        </Box>  
          <Box py={5}>
          <Grid container item spacing={0}>
              {data.map((item, index) => (
              <Grid item xs={12} sm={4} lg={4} key={index}>
                    <Box>
                     <Box>
                        <img src={item.image} width={"100%"}/>
                     </Box>
                    <Box>
                        <Box textAlign={"start"} py={2}>
                         <Typography sx={{fontSize:"18px",fontWeight:"600",fontFamily:"Poppins, sans-serif",borderLeft:"2px solid #de463b",paddingLeft:"8px"}}>{item.title}</Typography>
                         <Typography sx={{fontSize:"15px",color:"#5F656C",py:"10px",paddingLeft:"9px"}}>{item.details}</Typography>
                        </Box>
                    </Box>
                  </Box>
              </Grid>
            ))}
                </Grid>
          </Box>

        </Container>
    </Box>
  )
}

export default Home6