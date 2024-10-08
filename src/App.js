
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Button ,Container} from '@mui/material';


import Home from './pages/Home';
import Internships from './pages/Internships';
import Placements from './pages/Placements';
import About from './pages/About';
import Contact from './pages/Contact';


import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <AppBar position="dynamic" sx={{ backgroundColor: '#3f51b5'}}>
        <Toolbar>
          <Button color="inherit" href="/"   sx={{ mr: 70 ,ml : 50 ,fontSize:40   }} >Xpiria</Button> 
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/internships">Internships</Button>
          <Button color="inherit" href="/placements">Placements</Button>
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/contact" sx= { {mr:40 }}>Contact</Button>
        </Toolbar>
      </AppBar>
      
    <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/placements" element={<Placements />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        </Container>
        
        <Footer />
    </Router>

  );
}

export default App;
