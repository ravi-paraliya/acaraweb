import { Box, Container, Typography, Grid } from '@mui/material';
import React from 'react';
import img17 from '../../assest/work/imge/img17.jpg'
import Button from '@mui/material/Button';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Link } from 'react-router-dom';

function Services2() {
       return (
              <Box>
                     <Box sx={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.6)),url(${img17})`, width: "100%", backgroundSize: "cover", backgroundPosition: "center" }}>
                            <Container>
                                   <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} py={30}>
                                          <Button variant="contained" sx={{ height: "60px", width: "50px", backgroundColor: "#E2564D", borderRadius: "50%" }}>
                                                 <Link class="icon2 fa-solid fa-play" style={{padding:"5px",borderRadius:"50%",textDecoration:"none"}} to={"https://www.youtube.com/watch?v=6Ql5mQdxeWk"}></Link>
                                          </Button>
                                   </Box>
                            </Container>
                     </Box>
                     <Box py={3}>
                            <Container>
                                   <Box py={2}>
                                          <Typography variant='h6' color={"#de463b"} fontFamily={"Poppins, sans-serif"} textTransform={"uppercase"} fontSize={"14px"} letterSpacing={1}>Our Process</Typography>
                                          <Typography sx={{ paddingTop: "10px", fontSize: "32px", fontWeight: "600", fontFamily: "poppins,sans-serif" }}>We Handle It All</Typography>
                                   </Box>


                                   <Box py={3}>
                                          <Grid item xs={12} container sx={{ display: "flex", justifyContent: { md: "center", sm: "center" } }}>

                                                 <Grid item xs={12} sm={4}>
                                                        <Box sx={{ "&:hover": { backgroundColor: "#F1F3F2" } }}>
                                                               <Typography sx={{ paddingLeft: "20px", paddingTop: "30px", color: "#E2564D", fontSize: "14px", fontWeight: "600" }}>01 .</Typography>
                                                               <Typography sx={{ paddingLeft: "20px", borderLeft: "2px solid red", marginTop: "5px", marginBottom: "10px", fontSize: "20px", fontWeight: "600" }}>Initial Inquiry</Typography>
                                                               <Typography sx={{ paddingLeft: "20px", paddingRight: "15px", color: "#1A1A1A", lineHeight: "26px", fontSize: "15px" }}>Feugiat netus vitae dui, mi sed amet eu sem pharetra senectus id blandit dictum urna est morbi tempus, auctor sed egestas condimentum neque donec.</Typography>

                                                        </Box>
                                                 </Grid>
                                                 <Grid item xs={12} sm={4}>
                                                        <Box sx={{ "&:hover": { backgroundColor: "#F1F3F2" } }}>
                                                               <Typography sx={{ paddingLeft: "20px", paddingTop: "30px", color: "#E2564D", fontSize: "14px", fontWeight: "600" }}>02 .</Typography>
                                                               <Typography sx={{ paddingLeft: "20px", borderLeft: "2px solid red", marginTop: "5px", marginBottom: "10px", fontSize: "20px", fontWeight: "600" }}>Pre-Production</Typography>
                                                               <Typography sx={{ paddingLeft: "20px", paddingRight: "15px", color: "#1A1A1A", lineHeight: "26px", fontSize: "15px" }}>Nec ac enim purus arcu suspendisse tortor nunc bibendum justo nibh varius ipsum lorem in id diam faucibus posuere laoreet ultrices lacus nisi, cursus.</Typography>

                                                        </Box>
                                                 </Grid>
                                                 <Grid item xs={12} sm={4}>
                                                        <Box sx={{ "&:hover": { backgroundColor: "#F1F3F2" } }}>
                                                               <Typography sx={{ paddingLeft: "20px", paddingTop: "30px", color: "#E2564D", fontSize: "14px", fontWeight: "600" }}>03 .</Typography>
                                                               <Typography sx={{ paddingLeft: "20px", borderLeft: "2px solid red", marginTop: "5px", marginBottom: "10px", fontSize: "20px", fontWeight: "600" }}>Walktrough</Typography>
                                                               <Typography sx={{ paddingLeft: "20px", paddingRight: "15px", color: "#1A1A1A", lineHeight: "26px", fontSize: "15px" }}>Vitae cursus libero, nec venenatis, semper sit morbi convallis ac, egestas turpis est ornare vitae arcu velit senectus est sed eget vitae lectus amet.</Typography>

                                                        </Box>
                                                 </Grid>

                                          </Grid>


                                          <Grid item xs={12} container sx={{ display: "flex", paddingTop: "60px", justifyContent: { md: "center", sm: "center" } }}>

                                                 <Grid item xs={12} sm={4}>
                                                        <Box sx={{ "&:hover": { backgroundColor: "#F1F3F2" } }}>
                                                               <Typography sx={{ paddingLeft: "20px", paddingTop: "30px", color: "#E2564D", fontSize: "14px", fontWeight: "600" }}>04 .</Typography>
                                                               <Typography sx={{ paddingLeft: "20px", borderLeft: "2px solid red", marginTop: "5px", marginBottom: "10px", fontSize: "20px", fontWeight: "600" }}>Quote</Typography>
                                                               <Typography sx={{ paddingLeft: "20px", paddingRight: "15px", color: "#1A1A1A", lineHeight: "26px", fontSize: "15px" }}>Feugiat netus vitae dui, mi sed amet eu sem pharetra senectus id blandit dictum urna est morbi tempus, auctor sed egestas condimentum neque donec.</Typography>



                                                        </Box>
                                                 </Grid>
                                                 <Grid item xs={12} sm={4}>
                                                        <Box sx={{ "&:hover": { backgroundColor: "#F1F3F2" } }}>
                                                               <Typography sx={{ paddingLeft: "20px", paddingTop: "30px", color: "#E2564D", fontSize: "14px", fontWeight: "600" }}>05 .</Typography>
                                                               <Typography sx={{ paddingLeft: "20px", borderLeft: "2px solid red", marginTop: "5px", marginBottom: "10px", fontSize: "20px", fontWeight: "600" }}>Production</Typography>
                                                               <Typography sx={{ paddingLeft: "20px", paddingRight: "15px", color: "#1A1A1A", lineHeight: "26px", fontSize: "15px" }}>Nec ac enim purus arcu suspendisse tortor nunc bibendum justo nibh varius ipsum lorem in id diam faucibus posuere laoreet ultrices lacus nisi, cursus.</Typography>

                                                        </Box>
                                                 </Grid>
                                                 <Grid item xs={12} sm={4}>
                                                        <Box sx={{ "&:hover": { backgroundColor: "#F1F3F2" } }}>
                                                               <Typography sx={{ paddingLeft: "20px", paddingTop: "30px", color: "#E2564D", fontSize: "14px", fontWeight: "600" }}>06 .</Typography>
                                                               <Typography sx={{ paddingLeft: "20px", borderLeft: "2px solid red", marginTop: "5px", marginBottom: "10px", fontSize: "20px", fontWeight: "600" }}>Deliver</Typography>
                                                               <Typography sx={{ paddingLeft: "20px", paddingRight: "15px", color: "#1A1A1A", lineHeight: "26px", fontSize: "15px" }}>Vitae cursus libero, nec venenatis, semper sit morbi convallis ac, egestas turpis est ornare vitae arcu velit senectus est sed eget vitae lectus amet.</Typography>

                                                        </Box>
                                                 </Grid>

                                          </Grid>
                                   </Box>


                            </Container>
                     </Box>

              </Box>
       );
}

export default Services2;
