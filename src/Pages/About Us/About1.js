import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import AboutImg from '../../Assets/About/About1.jpeg'
import Header from '../../Commoncomponents/Header/Header'

function About1() {
    return (
             
                <Box sx={{backgroundImage:`linear-gradient(rgba(48, 44, 44, 0.7),rgba(60, 57, 39, 0.7)),url(${AboutImg})`,width:"100%",backgroundPosition:"center",
                backgroundSize:"cover",backgroundRepeat:"no-repeat"}}>
                  <Header />
                    <Container maxWidth="lg">
                        <Box sx={{paddingTop:"180px",paddingBottom:"150px"}}>
                            <Typography sx={{fontSize:"48px",fontWeight:"600",color:"white",fontFamily:"poppins,sans-serif",textAlign:'center '}}>About Us</Typography>
                        </Box>
                    </Container>
                </Box>
    
    )
}

export default About1