// src/components/Footer.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        position: 'relative',
        bottom: 0,
        mt: 'auto',
        width  : '100%' ,
        py: 2,
        textAlign: 'center',
        backgroundColor: '#D32F2F',
        color: 'white',
        height : '80px',
      }}
    >
      <Typography variant="body2" sx={{marginTop  : '10px'}}>
        © {new Date().getFullYear()} Xpiria. All rights reserved.
      </Typography>
      <Typography variant="body2" sx={{marginTop  : '5px'}}>
        Designed with <span role="img" aria-label="heart">❤️</span> by Eshwar
      </Typography>
    </Box>
  );
};

export default Footer;
