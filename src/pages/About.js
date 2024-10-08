// src/pages/About.js
import React from 'react';
import { Typography, Box } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom>
        About Us
      </Typography>
      <Typography variant="body1">
        Learn more about our mission, values, and how we help students achieve their career goals.
      </Typography>
    </Box>
  );
};

export default About;
