import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import home11 from '../../Assets/home/home11.jpeg'
import home12 from '../../Assets/home/home12.jpeg'
import home13 from '../../Assets/home/home13.jpeg'
import home14 from '../../Assets/home/home14.jpeg'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';


function Home5() {
  
    const data=[
        {
            image:home11,
            title:"Ante varius at tortor auctor dui mi eros auctor consectetur cras velit, neque et tellus nulla viverra natoque aliquam, malesuada viverra adipiscing diam eu auctor id tellus.",
            name:"Mary Kate",
        },
        {
            image:home12,
            title:"In habitant est rhoncus molestie tristique et egestas eleifend elit mauris massa tempus nulla elementum, faucibus pretium nibh vitae ultricies eleifend .",
            name:"Anna Grace",
        },
        {
            image:home13,
            title:"Scelerisque dignissim semper augue eget turpis dolor, a, mauris lacus arcu dictumst dolor aliquet faucibus suspendisse dolor lobortis faucibus risus, in diam.",
            name:"Billy Joe",
        },
        {
            image:home14,
            title:"Habitant eget tellus accumsan, interdum vitae vitae aliquet at gravida nulla urna, enim a enim diam tempor accumsan, semper diam id velit netus arcu lectus eros.",
            name:"John Peterson",
        },
    ]

  return (
    <Box py={5}>
        <Container maxWidth="lg">
           <Box py={1}>
              <Typography sx={{ fontSize: "12px", fontFamily: "Poppins, sans-serif", color: "#de463b", fontWeight: "600", letterSpacing: "2px" }}>TESTIMONIAL</Typography>
           </Box>
           <Box py={1}>
              <Typography sx={{ fontSize: "34px", fontFamily: "Poppins, sans-serif", fontWeight: "600" }}>What Our Client Say</Typography>
           </Box>
           <Box py={1}>
            <Typography color={"#5F656C"} fontSize={"15px"} textAlign={"center"}>Lobortis arcu at suspendisse arcu egestas lectus purus magna interdum aliquam scelerisque.</Typography>
           </Box>
           <Box py={3}>
              <Grid container item spacing={0}>
              {data.map((item, index) => (
              <Grid item xs={12} lg={6} key={index}>
                    <Box sx={{display:{lg:"flex",sm:"flex",xs:"block","&:hover":{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}}} bgcolor={"white"} border={"1px solid lightgray"} >
                     <Box>
                        <img src={item.image} />
                     </Box>
                    <Box display={"flex"} textAlign={"start"} justifyContent={"start"} >
                        <Box padding={3}>
                         <Typography><FormatQuoteIcon sx={{color:"#de463b",fontSize:"34px",transform:"rotate(180deg)"}}/></Typography>
                         <Typography sx={{fontSize:"15px",color:"#5F656C",pt:"10px",}}>{item.title}</Typography>
                         <Typography sx={{fontSize:"12px" ,fontWeight:"600",fontFamily:"Poppins, sans-serif",letterSpacing:"2px",pt:"10px"}}>{item.name}</Typography>
                         </Box>
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

export default Home5