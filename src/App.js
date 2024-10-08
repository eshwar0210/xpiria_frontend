import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Box } from '@mui/material';

import Home from './pages/Home';
import Internships from './pages/Internships';
import Placements from './pages/Placements';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Box 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh', 
        }}
      >
        <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
          <Toolbar>
            <Button color="inherit" href="/" sx={{ mr: 60, ml: 30, fontSize: 60 ,fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  }}>
              Xpiria
            </Button> 
            <Button color="inherit" href="/" sx={{ fontSize: 20, px: 3 }}>
              Home
            </Button>
            <Button color="inherit" href="/internships" sx={{ fontSize: 20, px: 3 }}>
              Internships
            </Button>
            <Button color="inherit" href="/placements" sx={{ fontSize: 20, px: 3 }}>
              Placements
            </Button>
            <Button color="inherit" href="/about" sx={{ px: 3, fontSize: 20 }}>
              About
            </Button>
            <Button color="inherit" href="/contact" sx={{ px: 3, fontSize: 20 }}>
              Contact
            </Button>
          </Toolbar>
        </AppBar>
        
        <Container sx={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/internships" element={<Internships />} />
            <Route path="/placements" element={<Placements />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Container>
        
        <Footer />
      </Box>
    </Router>
  );
}

export default App;
