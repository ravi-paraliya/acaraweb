import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import about from '../../Assets/About/About2.jpeg'
import Sign from '../../Assets/About/About3.png'
import about4 from '../../Assets/About/About4.jpeg'
function About2() {
    return (
        <Box py={10}>
            <Container maxWidth="lg">
                <Box>
                    <Grid container item spacing={0} xs={12}>
                        <Grid item xs={12} sm={6}>
                            <Box sx={{width:{lg:"70%",sm:"80%",xs:"100%"}}}>
                                <img src={about} width={"100%"}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box textAlign={"start"}>
                                <Typography sx={{ fontSize: "32px", fontFamily: "Poppins, sans-serif", fontWeight: "600" }}>Managing Corporate Event
                                    For More Than 25 Years</Typography>
                            </Box>
                            <Box textAlign={"start"} py={3}>
                                <Typography sx={{ fontSize: "15px", color: "#5F565C", lineHeight: "30px" }}>Ac, dui lectus libero, vulputate diam. Malesuada egestas venenatis vitae hendrerit consectetur imperdiet turpis. Non malesuada id dis sed. Aenean ipsum augue vitae maecenas vitae ante tempus lacinia. Ut vel quisque in varius commodo dui. Eget est cras morbi in facilisi rhoncus, id. Pellentesque augue ullamcorper tristique dui dui, habitant interdum hendrerit pellentesque. Morbi euismod nibh integer pretium nunc facilisis lectus blandit eu. Eget egestas porttitor fusce nibh.</Typography>
                            </Box>
                            <Box sx={{ display:{lg:"flex",sm:"none"}}} gap={2}>
                                <Box>
                                    <img src={Sign} />
                                </Box>
                                <Box>
                                    <Typography sx={{ fontSize: "18px", fontFamily: "Poppins, sans-serif", fontWeight: "600" }}>Tyler James</Typography>
                                    <Typography sx={{ fontSize: "12px" }}>Founder and CEO</Typography>
                                </Box>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
                <Box>
                    <Grid container item spacing={0} xs={12} sx={{display:"flex", alignItems:"end"}}>
                        <Grid item xs={12} sm={6}>
                                <Box sx={{ display: "flex", justifyContent: "center",width:{lg:"70%",sm:"80%",xs:"100%"}}}>
                                  <Box sx={{ bgcolor: "#1a1a1a14", width: "100%", textAlign: "center"}}>
                                    <Box py={3}>
                                        <Typography fontSize={"30px"} fontWeight={600} color={"#5F656C"}>1994</Typography>
                                        <Typography fontSize={"12px"} letterSpacing={1}>ESTABLISHED</Typography>
                                    </Box>
                                    <Box py={3}>
                                        <Typography fontSize={"30px"} fontWeight={600} color={"#5F656C"}>500+</Typography>
                                        <Typography fontSize={"12px"} letterSpacing={1}>CLIENTS</Typography>
                                    </Box>
                                </Box> 
                                 <Box sx={{ bgcolor: "#1a1a1a14", width: "100%", textAlign: "center" }}>
                                    <Box padding={3}>
                                        <Typography fontSize={"30px"} fontWeight={600} color={"#5F656C"}>100</Typography>
                                        <Typography fontSize={"12px"} letterSpacing={1}>EMPLOYEE</Typography>
                                    </Box>
                                    <Box padding={3}>
                                        <Typography fontSize={"30px"} fontWeight={600} color={"#5F656C"}>9000+</Typography>
                                        <Typography fontSize={"12px"} letterSpacing={1}>EVENTS</Typography>
                                    </Box>
                                </Box>  
                                </Box>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Box>
                                <img src={about4} style={{width:"100%"}}/>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Container>
        </Box>
    )
}

export default About2