// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 0,
        mt: 'auto',
        width  : '100%' ,
        py: 2,
        textAlign: 'center',
        backgroundColor: '#3f51b5',
        color: 'white',
        height : '80px',
      }}
    >
      <Typography variant="body2" sx={{marginTop  : '10px'}}>
        © {new Date().getFullYear()} Xpiria. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{marginTop  : '5px'}}>
        Designed by Eshwar
      </Typography>
    </Box>
  );
};

export default Footer;
