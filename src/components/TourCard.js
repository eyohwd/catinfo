import React from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import img1 from '../images/cam.jpg';
import  Typography from '@mui/material/Typography';
import Box  from '@mui/material/Box';
import { AccessTime } from '@mui/icons-material';
import PetsIcon from '@mui/icons-material/Pets';





function TourCard({image}) {
  return(
    <Grid item xs={12} sm={6}  md={4}>
<Paper elevation={4}>
    <img className='img' src={image.url} alt="camera"/>
    <Box padding={1}>
    <Typography variant="subtitle1" component="h2">{image.breeds[0].temperament}</Typography>
    <Box sx={{
    display:"flex",
    alignItems:"center"
}}>
    <PetsIcon color='warning'/>
    <Typography variant="body2" sx={{fontWeight: "bold", marginLeft: 3}} component="p">{image.breeds[0].name}</Typography>
    </Box>
</Box >

</Paper>

</Grid>

    
  );
}

export default TourCard;
