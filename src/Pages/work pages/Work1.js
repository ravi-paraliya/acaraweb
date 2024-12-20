import { Box,Container,Typography } from '@mui/material';
import React from 'react';
import img1 from '../../assest/work/imge/img1.jpg'
import Header from '../../Commoncomponents/Header/Header';

function Work1() {
  return (
    <Box>
         <Box sx={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${img1})`,width:"100%",backgroundPosition:"center",backgroundSize:"cover"}}>
          <Header/>
          <Container maxWidth="lg">
              <Box sx={{display:"flex",justifyContent:"center",textAlign:"center"}}>
                  <Typography sx={{fontSize:"48px",color:"white",paddingTop:"200px",fontWeight:"600",paddingBottom:"100px",fontFamily:"Poppins,sans-serif"}}>
                      Our Works 
                  </Typography>
              </Box>
              </Container>   
               
         </Box>

  
</Box>

  );
}

export default Work1;
