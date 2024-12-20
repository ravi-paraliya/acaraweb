import { Box, Button, Container, Typography } from '@mui/material'
import React from 'react'
import Poster from '../../Assets/home/Poster.jpeg'

function Quotepage() {
  return (
    <Box sx={{backgroundImage:`linear-gradient(rgba(48, 44, 44, 0.7),rgba(29, 65, 86, 0.7)),url(${Poster})`,width:"100%"}}>
        <Container maxWidth="lg">
           <Box sx={{textAlign:"center",alignItems:"center",py:"120px"}}>
             <Box sx={{py:"10px",width:"100%"}}>
                <Typography sx={{color:"white",fontSize:"48px",fontWeight:"600",fontFamily:"Poppins, sans-serif"}}> Let's Make Your Event Memorable!</Typography>
             </Box>
             <Box sx={{py:"15px",width:"100%"}}>
                <Typography sx={{color:"white",fontSize:"15px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</Typography>
             </Box>
             <Box sx={{py:"15px"}}>
                <Button sx={{bgcolor:"white",color:"black",letterSpacing: "2px", fontWeight: "600",fontSize:"12px",padding:"10px 20px"}}>Get A Quote</Button>
             </Box>
           </Box>
        </Container>
    </Box>
   
    
    )
}



export default Quotepage