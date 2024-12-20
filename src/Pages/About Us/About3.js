import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'

function About3() {
    const data=[
        {
            number:"01.",
            title:"Certified Experience",
            details:"Feugiat netus vitae dui, mi sed amet eu sem pharetra senectus id blandit dictum urna est morbi tempus, auctor sed egestas condimentum neque donec.",
        },
        {
            number:"02.",
            title:"Great Support",
            details:"Nec ac enim purus arcu suspendisse tortor nunc bibendum justo nibh varius ipsum lorem in id diam faucibus posuere laoreet ultrices lacus nisi, cursus.",
        },
        {
            number:"03.",
            title:"Competitive Price",
            details:"Vitae cursus libero, nec venenatis, semper sit morbi convallis ac, egestas turpis est ornare vitae arcu velit senectus est sed eget vitae lectus amet.",
        },
        {
            number:"04.",
            title:"We Got The Tools",
            details:"Feugiat netus vitae dui, mi sed amet eu sem pharetra senectus id blandit dictum urna est morbi tempus, auctor sed egestas condimentum neque donec.",

        },
        {
            number:"05.",
            title:"Success Guarantee",
            details:"Nec ac enim purus arcu suspendisse tortor nunc bibendum justo nibh varius ipsum lorem in id diam faucibus posuere laoreet ultrices lacus nisi, cursus.",

        },
        {
            number:"06.",
            title:"Experienced Team",
            details:"Vitae cursus libero, nec venenatis, semper sit morbi convallis ac, egestas turpis est ornare vitae arcu velit senectus est sed eget vitae lectus amet.",

        },
    ]
  return (
    <Box py={5}>
        <Container maxWidth="lg">
           <Box py={2}>
              <Typography sx={{fontSize:"32px",fontWeight:"600",fontFamily:"Poppins, sans-serif",textAlign:"center"}}>Why Choose Us</Typography>
           </Box>
           <Box py={3}>
              <Typography sx={{fontSize:"15px",color:"#5F656C",textAlign:"center"}}>Lobortis arcu at suspendisse arcu egestas lectus purus magna interdum aliquam scelerisque. </Typography>
           </Box>
           <Box>
              <Grid container item spacing={0} >
                {data.map((item,index) =>(
                    <Grid item xs={12} sm={4}>
                        <Box textAlign={"start"} sx={{"&:hover":{backgroundColor:"#F2F2F2"}}} py={4}>
                            <Typography sx={{fontSize:"13px",fontWeight:"600",fontFamily:"Poppins, sans-serif",color:"#E2564D",letterSpacing:"2px",py:"8px",paddingLeft:"15px"}}>{item.number}</Typography>
                            <Typography sx={{fontSize:"20px",fontWeight:"600",fontFamily:"Poppins, sans-serif",borderLeft:"2px solid #E2564D",paddingLeft:"15px"}}>{item.title}</Typography>
                            <Typography sx={{fontSize:"15px",color:"#5F656C",py:"8px",paddingLeft:"15px",paddingRight:"20px"}}>{item.details}</Typography>
                        </Box>
                    </Grid>
                ))}
              </Grid>
           </Box>

        </Container>
    </Box>
  )
}

export default About3