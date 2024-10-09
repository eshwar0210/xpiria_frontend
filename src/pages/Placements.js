import React, { useEffect, useState } from 'react';
import { Typography, Grid, Box, Card, CardMedia, CardContent, Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BASE_URL from '../config';

const Internships = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch companies from the backend API
    const fetchCompanies = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/company`); // Update with your backend URL
        setCompanies(response.data);
      } catch (error) {
        console.error("Error fetching companies:", error);
      }
    };

    fetchCompanies();
  }, []);

  return (
    <Box sx={{ my: 5, textAlign: 'center' }}>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          gutterBottom: true,
          fontWeight: 'bold',
          color: '#D32F2F',
          letterSpacing: '0.5px',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
          mb: 4
        }}
      >
        Placement Experiences by Company
      </Typography>
  
      <Grid container spacing={4} justifyContent="center">
        {companies.filter(company => company.type === 'placement').map((company) => (
          <Grid item xs={12} sm={6} md={4} key={company._id}>
            <Card sx={{
              boxShadow: 3,
              border: '1px solid',
              borderColor: 'grey.400',
              borderRadius: '8px',
              transition: '0.3s',
              '&:hover': {
                boxShadow: 6,
                transform: 'scale(1.05)',
              }
            }}>
              <CardMedia
                component="img"
                height="40"  // Smaller height for the logo
                image={company.logo_url}
                alt={company.name}
                sx={{
                  objectFit: 'contain',
                  width: '50%',  // Adjusted width for a better fit
                  margin: '0 auto',
                  padding: '10px 0'  // Added padding for spacing
                }}
              />
              <CardContent>
                <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                  {company.name}
                </Typography>
                <Link to={`/company/${company._id}`} style={{ textDecoration: 'none' }}>
                  <Button variant="contained" sx={{ mt: 2, backgroundColor: "#D32F2F" }}>
                    View Experiences
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Internships;
