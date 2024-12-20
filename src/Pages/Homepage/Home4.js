import { Box, Button, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import home7 from '../../Assets/home/home7.jpeg'
import home8 from '../../Assets/home/home8.jpeg'
import home9 from '../../Assets/home/home9.jpeg'
import home10 from '../../Assets/home/home10.jpeg'

function Home4() {
  
    return (
        <Box padding={5}>
            <Container maxWidth="lg">
                <Box>
                    <Box sx={{display:"flex",justifyContent:{lg:"start",sm:"start",xs:"center"}}} py={2}>
                        <Typography sx={{ fontSize: "12px", fontFamily: "Poppins, sans-serif", color: "#de463b", fontWeight: "600", letterSpacing: "2px" }}>PORTFOLIO</Typography>
                    </Box>
                    <Box sx={{display:{lg:"flex",sm:"flex",xs:"block"} ,justifyContent:{lg:"space-between",sm:"space-between",xs:"center"}}}>
                        <Typography sx={{ fontSize: "32px", fontFamily: "Poppins, sans-serif", fontWeight: "600" }}>Featured Works</Typography>
                        <Button sx={{ border: "1px solid black", color: "black", fontSize: "12px", letterSpacing: "2px", fontWeight: "600", px: "10px"}}>View All Works</Button>
                    </Box>
                </Box>
                <Box py={5}>
                    <Grid container spacing={0} xs={12}>
                      <Grid item xs={12} sm={6}>
                        <Box>
                            <img src={home7} width={"100%"} style={{cursor:"poniter"}}/>
                            <Box sx={{pt:"8px",}}>
                            <Typography sx={{textAlign:"start",py:"5px",px:"10px",fontSize:"20px",fontWeight:"600",fontFamily:"Poppins, sans-serif",borderLeft:"2px solid #de463b",height:"40px"}}>Hexatron Factory Open Day</Typography>
                            </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                          <Box >
                            <img src={home8} width={"100%"}/>
                            <Box sx={{pt:"8px"}}>
                            <Typography sx={{textAlign:"start",py:"5px",px:"10px",fontSize:"20px",fontWeight:"600",fontFamily:"Poppins, sans-serif",borderLeft:"2px solid #de463b",height:"40px"}}>Eroforce Global Product Launch</Typography>
                            </Box>
                          </Box>
                      </Grid>
                     
                    </Grid>
                    <Grid container spacing={0} xs={12} py={5}>
                      <Grid item xs={12} sm={6}>
                        <Box>
                            <img src={home9} width={"100%"}/>
                            <Box  sx={{pt:"8px"}}>
                            <Typography sx={{textAlign:"start",py:"5px",px:"10px",fontSize:"20px",fontWeight:"600",fontFamily:"Poppins, sans-serif",borderLeft:"2px solid #de463b",height:"40px"}}>APA Classic Company Picnic</Typography>
                            </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                          <Box>
                            <img src={home10} width={"100%"}/>
                            <Box  sx={{pt:"8px"}}>
                            <Typography sx={{textAlign:"start",py:"5px",px:"10px",fontSize:"20px",fontWeight:"600",fontFamily:"Poppins, sans-serif",borderLeft:"2px solid #de463b",height:"40px"}}>Delican Energy Press Event</Typography>
                            </Box>
                          </Box>
                      </Grid>
                     
                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default Home4