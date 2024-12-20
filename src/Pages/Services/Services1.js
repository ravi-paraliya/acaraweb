import { Box, Typography, Grid, Container } from '@mui/material';
import React from 'react';
import service1 from '../../assest/work/imge/service1.jpg'
import img11 from '../../assest/work/imge/img11.jpg'
import img12 from '../../assest/work/imge/img12.jpg'
import img13 from '../../assest/work/imge/img13.jpg'
import img14 from '../../assest/work/imge/img14.jpg'
import img15 from '../../assest/work/imge/img15.jpg'
import img16 from '../../assest/work/imge/img16.jpg'
import Header from '../../Commoncomponents/Header/Header';

function Services1() {
       const data = [
              {
                     image: img11,
                     title: "Full-Service Production",
                     details: "Tempor sit dictum volutpat tortor. Mauris eleifend commodo mi pharetra aliquam sed. Commodo odio quis neque."
              },
              {
                     image: img12,
                     title: "Event Management",
                     details: "Donec lectus maecenas odio pretium erat. Sed netus sit amet, fames fermentum. Sed in nulla a nisl leo."
              },
              {
                     image: img13,
                     title: "Food And Beverage",
                     details: "Habitant mauris, est massa dignissim nulla et porttitor erat mauris sed platea morbi tortor dignissim cursus."
              },
              {
                     image: img14,
                     title: "Live Entertainment",
                     details: "Amet elementum sed et lectus feugiat sagittis, quam nunc eget nec mauris a habitant ut pellentesque."
              },
              {
                     image: img15,
                     title: "Destination Management",
                     details: "Auctor vitae cras sem sagittis, sit arcu, libero consectetur scelerisque tristique ut donec et ipsum quis."
              },
              {
                     image: img16,
                     title: "Company Picnic",
                     details: "Maecenas lectus sit pellentesque egestas et sit at pellentesque nunc malesuada cursus iaculis feugiat ac justo."
              },
       ]
       return (
              <Box>
                     <Box sx={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${service1})`, width: "100%", backgroundSize: "cover", backgroundPosition: "center" }}>
                            <Header />
                            <Container maxWidth="lg">
                                   <Box sx={{ paddingTop: "250px", paddingBottom: "150px" }}>
                                          <Typography variant='h3' sx={{ color: "white", fontWeight: "600", display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                 Our Services
                                          </Typography>
                                   </Box>
                            </Container>
                     </Box>

                     <Box py={4}>
                            <Typography variant='h6' color={"#de463b"} fontFamily={"Poppins, sans-serif"} textTransform={"uppercase"} fontSize={"14px"} letterSpacing={1} textAlign={"center"}>OUR SERVICES</Typography>
                            <Typography variant='h4' sx={{ display: "flex", justifyContent: "center", fontWeight: "600", paddingTop: "10px", fontFamily: "poppins,sans-serif" }}>Corporate Event Management</Typography>
                            <Typography sx={{ color: "#5F656C", fontSize: "14px", display: "flex", justifyContent: "center", paddingTop: "30px" }}>Orci, gravida at dolor penatibus praesent. Id ac nunc nunc elementum vitae nunc cursus. Nunc cras facilisis</Typography>
                            <Typography sx={{ color: "#5F656C", fontSize: "14px", display: "flex", justifyContent: "center", paddingTop: "10px" }}>fermentum elementum, suspendisse augue dolor.</Typography>
                     </Box>
                     <Box py={2}>
                            <Container>
                                   <Grid container item spacing={0}>
                                          {data.map((item, index) => (
                                                 <Grid item xs={12} sm={4} lg={4} key={index}>
                                                        <Box>
                                                               <Box>
                                                                      <img src={item.image} width={"100%"} />
                                                               </Box>
                                                               <Box>
                                                                      <Box textAlign={"start"} py={2}>
                                                                             <Typography sx={{ fontSize: "18px", fontWeight: "600", fontFamily: "Poppins, sans-serif", borderLeft: "2px solid #de463b", paddingLeft: "8px" }}>{item.title}</Typography>
                                                                             <Typography sx={{ fontSize: "15px", color: "#5F656C", py: "10px", paddingLeft: "9px" }}>{item.details}</Typography>
                                                                      </Box>
                                                               </Box>
                                                        </Box>
                                                 </Grid>
                                          ))}
                                   </Grid>

                            </Container>
                     </Box>


              </Box>

       );
}

export default Services1;
