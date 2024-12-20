import { Box,Container,Grid,Typography } from '@mui/material';
import React from 'react';
import img18 from '../../assest/work/imge/img18.jpg'
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import MailIcon from '@mui/icons-material/Mail';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Header from '../../Commoncomponents/Header/Header';

function Contact1() {
  return (
    <Box>
    <Box sx={{backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${img18})`,width:"100%",backgroundPosition:"center",backgroundSize:"cover",backgroundPosition:"center"}}>
    <Header/>
     <Container maxWidth="lg">
         <Box sx={{paddingTop:"180px",paddingBottom:"150px"}}>
             <Typography variant='h3' sx={{color:"white",fontWeight:"600",display:"flex",justifyContent:"center",alignItems:"center"}}>
                 Contact Us
             </Typography>
         </Box>
     </Container>   
    </Box>

    <Container>
              <Box >
                   <Typography variant='h4' sx={{marginTop:"100px",display:"flex",justifyContent:"center",fontWeight:"600",fontFamily:"poppins,sans-serif"}}>Get It Touch</Typography>
                   <Typography sx={{marginTop:"25px",color:"#64656C",textAlign:"center",fontWeight:"500"}}>Vestibulum accumsan scelerisque dolor quam id quam tempor adipiscing nibh vulputate aenean integer sapien scelerisque arcu nunc nulla elementum tincidunt aliquam auctor vehicula viverra pulvinar porttitor.</Typography>
                   <Box sx={{display:"flex",justifyContent:"center",marginTop:"30px"}} gap={2}> 
                       <Box sx={{height:"50px",width:"50px",backgroundColor:"#E2564D",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                   <i class="fa-brands fa-facebook-f" style={{color:"white",fontSize:"16px"}}></i>
                       </Box>

                       <Box sx={{height:"50px",width:"50px",backgroundColor:"#E2564D",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                   <i class="fa-brands fa-twitter" style={{color:"white",fontSize:"16px"}}></i>
                       </Box>

                       <Box sx={{height:"50px",width:"50px",backgroundColor:"#E2564D",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                   <i class="fa-brands fa-youtube" style={{color:"white",fontSize:"16px"}}></i>
                       </Box>
                       <Box sx={{height:"50px",width:"50px",backgroundColor:"#E2564D",borderRadius:"50%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                       <i class="fa-brands fa-linkedin-in" style={{color:"white",fontSize:"16px"}}></i>
                       </Box>
                         
                   </Box>
              </Box>

    <Grid item xs={12}  container  sx={{display:"flex",width:"100%",paddingTop:"50px",justifyContent:{md:"center",lg:"center",xs:"center",sm:"center"}}}>
            <Grid item xs={12} sm={4} sx={{display:"flex",justifyContent:"center"}}>
                   <Box sx={{marginTop:"50px"}}>
                              <Box sx={{display:"flex",justifyContent:"center"}}>
                                 <Box sx={{height:"50px",borderRadius:"50%",width:"50px",backgroundColor:"#EDEDED",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                      <LocationOnIcon sx={{height:"30px",width:"30px",color:"#E2564D"}}/>
                                 </Box>
                              </Box>
                               <Box textAlign={"center"}>
                                <Typography sx={{display:"flex",justifyContent:"center",marginTop:"20px",fontSize:"20px",fontWeight:"bolder"}}>Our Location</Typography>
                                <Typography sx={{display:"flex",justifyContent:"center",fontSize:"15px",color:"#64656C",marginTop:"8px"}}>Trafalgar Square, Charing Cross,</Typography>
                                <Typography sx={{display:"flex",justifyContent:"center",fontSize:"15px",color:"#64656C",lineHeight:"35px"}}>London WC2N 5DN, United Kingdom.</Typography>
                               </Box>
                   </Box>
                   
            </Grid>
            <Grid item xs={12} sm={4} sx={{display:"flex",justifyContent:"center"}}>
            <Box sx={{marginTop:"50px"}}>
                                 <Box sx={{display:"flex",justifyContent:"center"}}>
                                 <Box sx={{height:"50px",borderRadius:"50%",width:"50px",backgroundColor:"#EDEDED",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                      <PhoneEnabledIcon sx={{height:"30px",width:"30px",color:"#E2564D"}}/>
                                 </Box>
                              </Box>
                               <Box textAlign={"center"}>
                                <Typography sx={{display:"flex",justifyContent:"center",marginTop:"20px",fontSize:"20px",fontWeight:"bolder"}}>Call Us</Typography>
                                <Typography sx={{display:"flex",justifyContent:"center",fontSize:"15px",color:"#64656C",marginTop:"8px"}}>44 123 456 7890</Typography>
                                <Typography sx={{display:"flex",justifyContent:"center",fontSize:"15px",color:"#64656C",lineHeight:"35px"}}>44 123 456 7891</Typography>
                               </Box>
                   </Box>
            </Grid>
            <Grid item xs={12} sm={4} sx={{display:"flex",justifyContent:"center"}}>
            <Box sx={{marginTop:"50px"}}>
                                <Box sx={{display:"flex",justifyContent:"center"}}>
                                 <Box sx={{height:"50px",borderRadius:"50%",width:"50px",backgroundColor:"#EDEDED",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                      <MailIcon sx={{height:"30px",width:"30px",color:"#E2564D"}}/>
                                 </Box>
                              </Box>
                               <Box textAlign={"center"}>
                                <Typography sx={{display:"flex",justifyContent:"center",marginTop:"20px",fontSize:"20px",fontWeight:"bolder"}}>Email Us</Typography>
                                <Typography sx={{display:"flex",justifyContent:"center",fontSize:"15px",color:"#64656C",marginTop:"8px"}}>info@example.com</Typography>
                                <Typography sx={{display:"flex",justifyContent:"center",fontSize:"15px",color:"#64656C",lineHeight:"35px"}}>hello@example.com</Typography>
                               </Box>
                   </Box>
            </Grid>
       </Grid>
                                 


       <Grid item xs={12}  container sx={{display:"flex",width:"100%",paddingTop:"50px",justifyContent:"center"}}>
            <Grid item xs={12} sm={8} md={6} lg={6} sx={{display:"flex",justifyContent:"center"}} py={5}>
           
                    <Box sx={{ width:"100%",backgroundColor:"black",height:"100%"}}>
                         <Box sx={{display:"flex",marginLeft:"30px",marginTop:"30px",marginRight:"30px"}}>
                          <Typography sx={{color:"#5F656C",fontSize:"15px",fontWeight:"600"}}>Name</Typography>
                          <Typography sx={{color:"red",fontSize:"15px",paddingLeft:"5px"}}> * </Typography>
                         </Box>

                         <Box sx={{marginLeft:"30px",marginRight:"30px"}} >
                         <TextField fullWidth placeholder="Full name" id="fullWidth" sx={{ backgroundColor: "white", height: '40px','& .MuiInputBase-root': {height: '100%'}}}/>
                           </Box>

                           <Box sx={{display:"flex",marginLeft:"30px",marginTop:"30px",marginRight:"30px"}}>
                          <Typography sx={{color:"#5F656C",fontSize:"15px",fontWeight:"600"}}>Company </Typography>
                          <Typography sx={{color:"red",fontSize:"15px",paddingLeft:"5px"}}> * </Typography>
                         </Box>

                         <Box sx={{marginLeft:"30px",marginRight:"30px"}} >
                         <TextField fullWidth placeholder="Company name" id="fullWidth" sx={{ backgroundColor: "white", height: '40px','& .MuiInputBase-root': {height: '100%'}}}/>
                           </Box>

                           <Box sx={{display:"flex",marginLeft:"30px",marginTop:"30px",marginRight:"30px"}}>
                          <Typography sx={{color:"#5F656C",fontSize:"15px",fontWeight:"600"}}>Email address</Typography>
                          <Typography sx={{color:"red",fontSize:"20px",paddingLeft:"5px"}}> * </Typography>
                         </Box>

                         <Box sx={{marginLeft:"30px",marginRight:"30px"}}>
                         <TextField fullWidth placeholder="Email address" id="fullWidth" sx={{ backgroundColor: "white", height: '40px','& .MuiInputBase-root': {height: '100%'}}}/>
                           </Box>

                           <Box sx={{display:"flex",marginLeft:"30px",marginTop:"30px",marginRight:"30px"}}>
                          <Typography sx={{color:"#5F656C",fontSize:"15px",fontWeight:"600"}}>Message</Typography>
                          <Typography sx={{color:"red",fontSize:"20px",paddingLeft:"5px"}}> * </Typography>
                         </Box>

                         <Box sx={{marginLeft:"30px",marginRight:"30px"}}>
                         <TextField fullWidth id="outlined-multiline-static" sx={{width: '100%', backgroundColor: 'white','& .MuiInputBase-input': {color: 'black'}, '& .MuiInputBase-root': { height: 'auto',color:"#BCBCBC"}}} multiline rows={4} placeholder=' Your message.....'/>
                           </Box>

                           <Button variant="outlined" sx={{marginLeft:"30px",marginTop:"30px",marginBottom:"30px",fontWeight:"600",borderColor:"white",color:"white","&:hover":{borderColor:"#1A1A1A",backgroundColor:"#1A1A1A"}}}>submit</Button>

                    </Box>     
                   
            </Grid>
            <Grid item xs={12} sm={8} md={6} lg={6} sx={{display:"flex",justifyContent:"center"}} py={5}>    
                    <Box sx={{width:"570px",height:"580px"}}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.4152485120226!2d72.88343388621999!3d21.215376131029682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f155c0ad929%3A0x97b93382aed70c3a!2sJBS%20IT%20Institute!5e0!3m2!1sen!2sin!4v1723196489259!5m2!1sen!2sin" width={"100%"} height="100%" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
                    </Box>
            </Grid>
           
       </Grid> 

    </Container>


</Box>
  );
}

export default Contact1;
