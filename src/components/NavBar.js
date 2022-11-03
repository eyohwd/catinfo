import React from 'react';
import  AppBar  from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { PhotoCamera } from '@mui/icons-material';
import Typography from '@mui/material/Typography';


function NavBar() {
  return (
    <div>
        <AppBar>
            <Toolbar>
                <PhotoCamera></PhotoCamera>
                <Typography variant='subtitle1' color='textPrimary' component='h2'>EHI's CatsInfo</Typography>
                </Toolbar>
        </AppBar>
      
    </div>
  );
}

export default NavBar;

