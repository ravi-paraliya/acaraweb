import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import logo from '../../Assets/home/logo.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link, useNavigate } from 'react-router-dom';

function Footer() {

  const navigate= useNavigate();
  return (
    <Box bgcolor={"black"}>
        <Container maxWidth="lg">
            <Box py={10}>
             <Grid container item spacing={3} xs={12}>
               <Grid item xs={12} sm={6} md={6} lg={4}>
                <Box sx={{textAlign:{md:"start",xs:"center"}}}>
                    <img src={logo}/>
                    <Typography sx={{pr:"10px",pt:"30px",textAlign:{md:"start",xs:"center"}}} fontSize={"14px"} color={"white"}>Ornare eget varius aliquet vehicula fermentum commodo, dolor, dolor amet, ut velit lacus cursus et, tortor mollis lacus lectus aliquam velit justo nibh fermentum fermentum.</Typography>
                    <Box display={"flex"} gap={2} py={2} sx={{textAlign:{md:"start",xs:"center"},display:"flex",justifyContent:{lg:"start",md:"center",sm:"center",xs:"center"}}}>
                     <Box sx={{bgcolor:"#5F656C",padding:"6px",color:"white","&:hover":{backgroundColor:"#de463b"}}}><Link class="icon1 fa-brands fa-facebook" style={{padding:"5px",borderRadius:"50%",textDecoration:"none"}} to={"https://www.facebook.com/"}></Link></Box>
                     <Box sx={{bgcolor:"#5F656C",padding:"6px",color:"white","&:hover":{backgroundColor:"#de463b"}}}><Link class="icon1 fa-brands fa-twitter" style={{padding:"5px",borderRadius:"50%",textDecoration:"none"}} to={"https://x.com/?lang=en"}></Link></Box>
                     <Box sx={{bgcolor:"#5F656C",padding:"6px",color:"white","&:hover":{backgroundColor:"#de463b"}}}><Link class="icon1 fa-brands fa-youtube" style={{padding:"5px",borderRadius:"50%",textDecoration:"none"}} to={"https://www.youtube.com/"}></Link></Box>
                     <Box sx={{bgcolor:"#5F656C",padding:"6px",color:"white","&:hover":{backgroundColor:"#de463b"}}}><Link class="icon1 fa-brands fa-linkedin" style={{padding:"5px",borderRadius:"50%",textDecoration:"none"}} to={"https://in.linkedin.com/"}></Link></Box>
                    </Box>
                </Box>

               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={2}>
                <Box textAlign={"start"}>
                  <Box>
                    <Typography sx={{fontSize:"24px",fontFamily:"Poppins, sans-serif",color:"white",textAlign:{md:"start",xs:"center"}}}>Quick Link</Typography>
                  </Box>
                  <Box py={5} sx={{textAlign:{md:"start",xs:"center"}}}>
                    <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"white",cursor:"pointer","&:hover":{color:"#de463b"}}} onClick={() => navigate("/")}>Home</Typography>
                    <Typography  sx={{fontSize:"14px",lineHeight:"25px",color:"white",cursor:"pointer","&:hover":{color:"#de463b"}}} onClick={() =>navigate("/About")}>About Us</Typography>
                    <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"white",cursor:"pointer","&:hover":{color:"#de463b"}}} onClick={() => navigate("/works1")}>Our Work</Typography>
                    <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"white",cursor:"pointer","&:hover":{color:"#de463b"}}} onClick={() => navigate("/Services")}>Our Services</Typography>
                    <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"white",cursor:"pointer","&:hover":{color:"#de463b"}}} onClick={() => navigate("/Contact")}>Contact Us</Typography>
                    <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"white",cursor:"pointer","&:hover":{color:"#de463b"}}}>Get A Quote</Typography>
                  </Box>
                </Box>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={3}>
               <Box  textAlign={"start"}>
                  <Box>
                    <Typography sx={{fontSize:"24px",fontFamily:"Poppins, sans-serif",color:"white",textAlign:{md:"start",xs:"center"}}}>Our Capibility</Typography>
                  </Box>
                  <Box py={5} sx={{textAlign:{md:"start",xs:"center"}}}>
                    <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"white",cursor:"pointer","&:hover":{color:"#de463b"}}}>Full-Service Production</Typography>
                    <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"white",cursor:"pointer","&:hover":{color:"#de463b"}}}>Event Management</Typography>
                    <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"white",cursor:"pointer","&:hover":{color:"#de463b"}}}>Food & Beverages</Typography>
                    <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"white",cursor:"pointer","&:hover":{color:"#de463b"}}}>Live Performances</Typography>
                    <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"white",cursor:"pointer","&:hover":{color:"#de463b"}}}>Destination Management</Typography>
                    <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"white",cursor:"pointer","&:hover":{color:"#de463b"}}}>Company Picnic</Typography>
                  </Box>
                </Box>
               </Grid>
               <Grid item xs={12} sm={6} md={6} lg={3}>
               <Box  textAlign={"start"}>
                  <Box>
                    <Typography sx={{fontSize:"24px",fontFamily:"Poppins, sans-serif",color:"white",textAlign:{md:"start",xs:"center"}}}>Contact Info</Typography>
                  </Box>
                  <Box py={5} sx={{textAlign:{md:"start",xs:"center"}}}>
                    <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"white"}}>Trafalgar Square, Charing Cross, London WC2N 5DN, United Kingdom.</Typography>
                    <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"white"}}>+44 123 456 7890</Typography>
                    <Typography sx={{fontSize:"14px",lineHeight:"25px",color:"white"}}>info@example.com</Typography>
                   
                  </Box>
                </Box>
                </Grid>

             </Grid>
            </Box>
            <Box sx={{display:{lg:"flex",sm:"flex",xs:"block"},justifyContent:{lg:"space-between",sm:"space-between",xs:"space-between"},textAlign:{md:"start",xs:"center"}}} py={5}>
                <Typography sx={{fontSize:"14px",color:"white"}}>Copyright © 2024 Event Management Agency</Typography>
                <Typography sx={{fontSize:"14px",color:"white"}}>Powereed by Event Management Agency</Typography>
            </Box>
        </Container>
    </Box>
  ) 
}

export default Footer