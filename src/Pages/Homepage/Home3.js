import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import home3 from '../../Assets/home/home3.png'
import home4 from '../../Assets/home/home4.png'
import home5 from '../../Assets/home/home5.png'
import home6 from '../../Assets/home/home6.png'

function Home3() {
  return (
    <Box>
        <Container maxWidth="lg">
           <Box py={5}>
            <Grid container item spacing={0} xs={12}>
              <Grid item xs={12} sm={6} lg={2}>
                 <Box sx={{bgcolor:"white",border:"1px solid #F2F2F2","&:hover":{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}} py={3} px={3}>
                   <img src={home3} />
                 </Box>  
              </Grid>
              <Grid item xs={12} sm={6} lg={2}>
               <Box sx={{bgcolor:"white",border:"1px solid #F2F2F2","&:hover":{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}} py={3} px={3}>
                   <img src={home4} /> 
                 </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={2}>
                 <Box sx={{bgcolor:"white",border:"1px solid #F2F2F2","&:hover":{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}} py={3} px={3}>
                   <img src={home5} />
                   </Box>  
              </Grid>
              <Grid item xs={12} sm={6} lg={2}>
                 <Box sx={{bgcolor:"white",border:"1px solid #F2F2F2","&:hover":{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}} py={3} px={3}>
                   <img src={home6} /> 
               </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={2}>
                 <Box sx={{bgcolor:"white",border:"1px solid #F2F2F2","&:hover":{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}} py={3} px={3}>
                   <img src={home3} />
                 </Box>
              </Grid>
              <Grid item xs={12} sm={6} lg={2}>
                 <Box sx={{bgcolor:"white",border:"1px solid #F2F2F2","&:hover":{boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"}}} py={3} px={3}>
                    <img src={home4} />
                 </Box>
              </Grid>

            </Grid>
           </Box>

        </Container>
    </Box>
  )
}

export default Home3