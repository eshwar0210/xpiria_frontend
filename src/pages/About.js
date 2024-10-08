import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const AboutUs = () => {
  return (
    <Box sx={{ my: 5, textAlign: 'center', padding: '20px', backgroundColor: '#f5f5f5' }}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box
            component="img"
            src="Eshwar.jpg"
            alt="Eshwar Rachakonda"
            sx={{
              borderRadius: '50%',
              width: '460px',
              height: '460px',
              boxShadow: 3,
              mb: 3,
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography 
            variant="h3" 
            sx={{ 
              fontWeight: 'bold', 
              fontSize: '2.5rem', 
              letterSpacing: '1px', 
              color: '#D32F2F', // Striking color
              textTransform: 'uppercase' 
            }}
          >
            Eshwar Rachakonda
          </Typography>
          
          <Typography variant="body1" sx={{ my: 2, fontSize: '1.1rem', color: '#a02F2e' }}>
            Undergraduate from IIT Patna (2021-25).
          </Typography>
         
          
          {/* Follow Me Typography */}
          <Typography 
            variant="h5" 
            sx={{ 
              fontWeight: '600', 
              fontSize: '1.5rem', 
              color: '#D32F2F', // Change to a color that stands out
              mt: 4 
            }}
          >
            FOLLOW ON
          </Typography>
          
          <Box sx={{ mt: 2 }}>
            <Button

              variant="outlined"
              sx={{
                backgroundColor: '#0077B5', // LinkedIn blue
                color: 'white',
                '&:hover': { backgroundColor: '#005582' },
                mr: 2,
                borderRadius : 10
              }}
              href="https://www.linkedin.com/in/eshwarr/"
              target="_blank"
              startIcon={<LinkedInIcon />}
            >
              LINKEDIN
            </Button>
            <Button
              variant="OUTLINED"
              sx={{
                backgroundColor: '#333', // GitHub black
                color: 'white',
                '&:hover': { backgroundColor: '#1a1a1a' },
                borderRadius : 10
              }}
              href="https://github.com/eshwar0210"
              target="_blank"
              startIcon={<GitHubIcon />}
            >
              GITHUB
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
