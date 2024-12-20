import React from 'react';
import {Box, Container, Grid, Typography,} from '@mui/material';
import img4 from '../../assest/work/imge/img4.jpg'
import img5 from '../../assest/work/imge/img5.jpg'
import img6 from '../../assest/work/imge/img6.jpg'
import img7 from '../../assest/work/imge/img7.jpg'
import img8 from '../../assest/work/imge/img8.jpg'
import img9 from '../../assest/work/imge/img9.jpg'
import img10 from '../../assest/work/imge/img10.jpg'
import Home3 from '../Homepage/Home3';


function Work3() {
  return (
     <Box py={3}>
    <Container >

<Grid item xs={12}  container spacing={0} sx={{display:"flex",paddingTop:"100px"}}>
            <Grid item xs={12} lg={6}>
                 <img src={img5} alt="" style={{width:"100%"}}/>
            </Grid>
            <Grid item xs={12} lg={6}>
            <Box sx={{paddingLeft:{lg:20 ,xs:0}}}>
               <Typography variant='h6' color={"#de463b"} fontFamily={"Poppins, sans-serif"} textTransform={"uppercase"} fontSize={"14px"} letterSpacing={1}>Full-service Production</Typography>
               <Typography variant='h4' sx={{fontWeight:"600",display:"flex",marginTop:"10px",fontFamily:"poppins,sans-serif"}}>Hexatron Factory
               Opening Ceremony</Typography>
               

               <Typography  sx={{ fontSize:"14px",display:"flex",marginTop:"30px",marginRight:"30px",color:"#5F6575"}}>Nisi, fusce dictum arcu id fames amet magna sed iaculis lectus neque habitant in porta tincidunt scelerisque sit nulla scelerisque arcu neque massa quam.</Typography>
               

              <Box sx={{ borderLeft: '1px solid red'}}>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"30px",marginRight:"30px",color:"#5F6575",fontWeight:"500",fontStyle:"italic"}}>"Neque leo molestie tellus velit sapien eu ac congue nibh diam pretium ut at ullamcorper risus ultrices orci cursus lacus aliquet eget ullamcorper interdum leo tortor aenean mattis."</Typography>

              </Box> 

                   <Box  sx={{display:"flex"}} marginLeft={"20px"}>
                          <Box>
                                <img src={img6} alt='' style={{height:"50px",width:"50px",marginTop:"30px",borderRadius:"50%"}}/>
                          </Box>
                          <Box>
                               <Typography sx={{marginTop:"30px",marginLeft:"10px",fontSize:"15px",fontWeight:"600",letterSpacing:"3px",color:"#5F6575"}}>Mary Kate</Typography>
                               <Typography sx={{marginLeft:"30px",fontSize:"13px",display:"flex",justifyContent:"start",color:"#5F6575"}}>Director of Hexatron</Typography>
                           </Box>
                   </Box>
          </Box>
            </Grid>
       </Grid>



       <Grid item xs={12}  container sx={{display:"flex",paddingTop:"100px"}}>
            <Grid item xs={12} lg={6}>
                 <img src={img7} alt="" style={{width:"100%"}}/>
            </Grid>
            <Grid item xs={12} lg={6}>
            <Box sx={{paddingLeft:{lg:20,xs:0}}}>
               <Typography variant='h6' color={"#de463b"} fontFamily={"Poppins, sans-serif"} textTransform={"uppercase"} fontSize={"14px"} letterSpacing={1}>Food & Beverages</Typography>
               <Typography variant='h4' sx={{fontWeight:"bold",display:"flex",marginTop:"10px",fontFamily:"poppins,sans-serif"}}>APA Classic Company</Typography>
               <Typography variant='h4' sx={{fontWeight:"bold",display:"flex",marginTop:"10px"}}>Picnic</Typography>

               <Typography  sx={{ fontSize:"14px",display:"flex",marginTop:"30px",marginRight:"30px",color:"#5F6575"}}>Varius amet vitae mi commodo lacus aliquam nunc duis congue sodales pulvinar diam consequat, nibh cras sed tristique nam ullamcorper ullamcorper nibh.</Typography>
     

              <Box sx={{ borderLeft: '1px solid red'}}>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"30px",color:"#5F6575",fontWeight:"500",fontStyle:"italic"}}>"Sit placerat blandit sociis amet cras platea scelerisque hendrerit placerat purus in diam donec aliquet mattis velit amet, dolor netus dignissim lectus nibh massa sed amet."</Typography>
                   
              </Box> 

                   <Box  sx={{display:"flex"}} marginLeft={"20px"}>
                          <Box>
                                <img src={img8} alt='' style={{height:"50px",width:"50px",marginTop:"30px",borderRadius:"50%"}}/>
                          </Box>
                          <Box>
                               <Typography sx={{marginTop:"30px",marginLeft:"30px",fontSize:"15px",fontWeight:"600",letterSpacing:"3px",color:"#5F6575"}}>Anna Grace</Typography>
                               <Typography sx={{marginLeft:"30px",fontSize:"13px",display:"flex",justifyContent:"start",color:"#5F6575"}}>Director of APA</Typography>
                           </Box>
                   </Box>
          </Box>
            </Grid>
       </Grid>


   
   <Grid item xs={12}  container sx={{display:"flex",paddingTop:"100px"}}>
            <Grid item xs={12} lg={6}>
                 <img src={img10} alt="" style={{width:"100%"}}/>
            </Grid>
            <Grid item xs={12} lg={6}>
            <Box sx={{paddingLeft:{lg:20,xs:0}}}>
               <Typography  sx={{color:"red", fontSize:"14px",display:"flex",letterSpacing:"2px"}}>Event Management</Typography>
               <Typography variant='h4' sx={{fontWeight:"600",display:"flex",marginTop:"10px",fontFamily:"poppins,sans-serif"}}>Delican Energy Press Event</Typography>


               <Typography  sx={{ fontSize:"14px",display:"flex",marginTop:"30px",color:"#5F6575"}}>Nibh risus viverra suspendisse consectetur lobortis nec vitae platea vitae vitae tortor id aliquam luctus urna, mus facilisi duis dictum risus massa.</Typography>
               

              <Box sx={{ borderLeft: '1px solid red'}}>
                    <Typography  sx={{ fontSize:"16px",display:"flex",marginLeft:"20px",marginTop:"30px",color:"#5F6575",fontWeight:"500",fontStyle:"italic"}}>"Nunc velit purus sollicitudin posuere in arcu etiam mi mollis aliquam sem risus nibh tortor scelerisque in convallis ut lectus arcu quam praesent vitae."</Typography>

              </Box> 

                   <Box  sx={{display:"flex"}} marginLeft={"20px"}>
                          <Box>
                                <img src={img9} style={{height:"50px",width:"50px",marginTop:"30px",borderRadius:"50%"}}/>
                          </Box>
                          <Box>
                          <Typography sx={{marginTop:"30px",marginLeft:"30px",fontSize:"15px",fontWeight:"600",letterSpacing:"2px",color:"#5F6575"}}>Billy Joe</Typography>
                          <Typography sx={{marginLeft:"30px",fontSize:"13px",display:"flex",color:"#5F6575"}}>Manager of Delican Energy</Typography>
                           </Box>
                   </Box>
          </Box>
            </Grid>
       </Grid>
</Container>
      <Home3/>

</Box>


  );
}

export default Work3;
