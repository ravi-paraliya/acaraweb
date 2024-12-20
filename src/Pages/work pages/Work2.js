import React from 'react';
import {Box, Container, Grid, Typography} from '@mui/material';
import img2 from '../../assest/work/imge/img2.jpg'
import img4 from '../../assest/work/imge/img4.jpg'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

function Work2() {
  return (
    <Box py={5}>
    <Container>
          <Box sx={{display:{lg:"flex",md:"block",xs:"block"},justifyContent:"space-between"}} py={5}>
               <Box sx={{textAlign:{lg:"start",md:"center",xs:"center"}}} width={"100%"}>
                 <Typography variant="h6" color={"#de463b"} fontFamily={"Poppins, sans-serif"} textTransform={"uppercase"} fontSize={"14px"} letterSpacing={1}>Full-service Production</Typography>
                 <Typography sx={{fontSize:"32px",fontWeight:"600",fontFamily:"Poppins, sans-serif"}}>Eroforce Global
                 Product Launch</Typography>
                 </Box>  
                <Box sx={{textAlign:{lg:"start",md:"block",xs:"block"}}} alignItems={"center"}> 
                 <Typography sx={{fontSize:"15px",color:"#5F656C"}}>
                 
Facilisi fermentum donec viverra massa, scelerisque convallis non in quis nisi sit adipiscing massa lorem est tristique dui magna nunc metus, pharetra viverra id tellus dolor platea ultrices ut condimentum tortor habitant bibendum velit platea ac dictumst tempor, mattis varius integer rutrum nisl viverra enim lectus morbi purus faucibus tellus at pellentesque. </Typography>
                 </Box>
           </Box>
        
          {/* <img src={img2} alt='' style={{height:"100%",width:"100%", marginTop:"50px"}}></img> */}
          <Box sx={{backgroundImage:`url(${img2})`,backgroundSize:"cover",paddingTop:"280px",width:"100%",display:"flex", justifyContent:"end",alignItems:"self-end",backgroundPosition:"center"}}>
              
              <Box sx={{height:"320px",width:"400px",backgroundColor:"white"}}>
                     <Box padding={5}>
                          <Typography><FormatQuoteIcon sx={{fontSize:"30px",color:"#de463b",transform:"rotate(180deg)"}}/></Typography>
                         <Typography sx={{color:"#5F6575",fontSize:"15px",display:"flex",justifyContent:"start",fontWeight:"600",fontStyle:"italic",py:"10px"}}>Risus fermentum ipsum suspendisse dictumst quis orci dignissim eget odio pellentesque et risus eu nisi massa sem sed non fusce at habitant dignissim vel aliquam fames ornare aliquam.</Typography>
                         <Box sx={{display:"flex" , justifyContent:"start",gap:"10px"}} py={2}>
                            <Box>
                            <img src={img4} style={{height:"50px",width:"50px",borderRadius:"50%",display:"flex",justifyContent:"start"}}/> 
                            </Box>
                             <Box>
                                  <Typography sx={{fontSize:"15px",fontWeight:"600",letterSpacing:"3px",color:"#5F6575"}}>John Peterson</Typography>
                                  <Typography sx={{fontSize:"13px",display:"flex",justifyContent:"start",color:"#5F6575"}}>CEO of Eroforce</Typography>
                             </Box>
                      </Box>
              </Box>
               </Box>

           </Box>
       
</Container>
</Box>
  );
}

export default Work2;
