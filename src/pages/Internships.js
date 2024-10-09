import React, { useEffect, useState } from 'react';
import { Typography, Grid, Box, Card, CardMedia, CardContent, Button } from '@mui/material';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Internships = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch companies from the backend API
    const fetchCompanies = async () => {
      try {
        const response = await axios.get('http://localhost:5000/company'); // Update with your backend URL
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
      color: '#3f51b5', // Change this to your desired color
      textAlign: 'center',
      letterSpacing: '0.5px',
      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)', // Optional shadow for depth
      mb: 4 // Adjust margin bottom for spacing
    }}
  >
    Internship Experiences by Company
  </Typography>
  
      <Grid container spacing={4} justifyContent="center" >
        {companies.filter(company => company.type === 'intern').map((company) => (
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
                height="140"
                image={company.logo_url}
                alt={company.name}
                sx={{
                  objectFit: 'contain',
                  width: '75%',
                  margin: '0 auto',

                }}
              />
              <CardContent>
                <Typography variant="h5" component="div">
                  {company.name}
                </Typography>
                <Link to={`/company/${company._id}`} style={{ textDecoration: 'none' }}>
                <Button variant="contained" sx={{ mt: 2, backgroundColor: "#3f51b5" }}>
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
