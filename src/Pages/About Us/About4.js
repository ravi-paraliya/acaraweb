import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import about5 from '../../Assets/About/About5.png'
import about6 from '../../Assets/About/About6.png'
import about7 from '../../Assets/About/About7.png'

function About4() {
    const data=[
        {
            image:about5,
            name:"John Austin",
            title:"Co-Founder and  CFO",
            details:"Sapien neque suspendisse sit eget netus ullamcorper at ipsum placerat arcu porttitor pretium magna feugiat odio. ",
        },
        {
            image:about6,
            name:"Amelia Tan",
            title:"Event Director",
            details:"Consequat luctus morbi egestas turpis nisi, dignissim neque aliquam leo dui, volutpat eu volutpat sagittis tristique.",
        },
        {
            image:about7,
            name:"Dan Jackson",
            title:"Production Manager",
            details:"Ut est, in accumsan, turpis nibh hendrerit pretium eget odio elit porttitor aenean egestas semper vitae. ",
        },
    ]
  return (
    <Box py={10}>
        <Container maxWidth="lg">
           <Box sx={{display:{lg:"flex",md:"block",xs:"block"},justifyContent:"space-between"}}>
               <Box sx={{textAlign:{lg:"start",md:"center",xs:"center"}}} width={"100%"}>
                 <Typography sx={{fontSize:"32px",fontWeight:"600",fontFamily:"Poppins, sans-serif"}}>Meet Our Team</Typography>
                 </Box>  
                <Box sx={{textAlign:{lg:"start",md:"block",xs:"block"}}}> 
                 <Typography sx={{fontSize:"15px",color:"#5F656C"}}>
                 Maecenas nulla etiam neque, nisl faucibus sollicitudin phasellus turpis et ac etiam donec odio quis suscipit turpis lectus cursus id ultrices nunc aliquet ultrices faucibus nec, felis facilisis sed amet risus elit libero vulputate vitae ac habitant lacinia dignissim elit. </Typography>
                 </Box>
           </Box>
            <Box>
                <Grid container item spacing={0}>
                    {data.map((item,index) =>(
                        <Grid item xs={12} sm={4}>
                          <Box padding={5}>
                            <Box py={2}>
                                <img src={item.image}  style={{width:"100%"}}/>
                            </Box>
                            <Box textAlign={"start"} py={2}>
                                <Typography sx={{fontSize:"20px",fontWeight:"600",fontFamily:"Poppins, sans-serif",borderLeft:"2px solid #E2564D",paddingLeft:"10px"}}>{item.name}</Typography>
                                <Typography sx={{fontSize:"13px",paddingLeft:"11px"}}>{item.title}</Typography>
                               
                            </Box>
                            <Box textAlign={"start"} py={1}>
                            <Typography sx={{fontSize:"15px",color:"#5F656C",paddingLeft:"11px"}}>{item.details}</Typography>
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

export default About4