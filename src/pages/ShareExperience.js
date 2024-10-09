import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';

const ShareExperienceForm = () => {
  const [name, setName] = useState('');
  const [college, setCollege] = useState('');
  const [role, setRole] = useState('');
  const [duration, setDuration] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('intern');
  const [company, setCompany] = useState(null);
  const [options, setOptions] = useState([]);

  // Fetch company suggestions based on input
  const handleCompanyInputChange = async (event) => {
    const { value } = event.target;
    if (value) {
      const response = await axios.get(`/api/companies/search?name=${value}`);
      setOptions(response.data); // Set company options based on search results
    } else {
      setOptions([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for submission
    const experienceData = {
      name,
      college,
      role,
      duration,
      description,
      type,
      company,
    };

    // Send experienceData to your backend
    await axios.post('/api/experiences', experienceData);
    // Optionally, reset form fields here
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
      <Typography variant="h5">Share Your Experience</Typography>

      <Autocomplete
        options={options}
        getOptionLabel={(option) => option.name}
        onChange={(event, value) => setCompany(value)}
        onInputChange={handleCompanyInputChange}
        renderInput={(params) => (
          <TextField {...params} label="Company" variant="outlined" required fullWidth />
        )}
        renderOption={(props, option) => (
          <li {...props}>
            <img src={option.logo_url} alt={option.name} style={{ width: 30, marginRight: 10 }} />
            {option.name}
          </li>
        )}
      />

      <TextField
        label="Name"
        variant="outlined"
        required
        fullWidth
        value={name}
        onChange={(e) => setName(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="College"
        variant="outlined"
        required
        fullWidth
        value={college}
        onChange={(e) => setCollege(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Role"
        variant="outlined"
        required
        fullWidth
        value={role}
        onChange={(e) => setRole(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Duration"
        variant="outlined"
        required
        fullWidth
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Description"
        variant="outlined"
        required
        fullWidth
        multiline
        rows={4}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        sx={{ mt: 2 }}
      />
      
      <RadioGroup row value={type} onChange={(e) => setType(e.target.value)}>
        <FormControlLabel value="intern" control={<Radio />} label="Intern" />
        <FormControlLabel value="placement" control={<Radio />} label="Placement" />
      </RadioGroup>

      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        Submit Experience
      </Button>
    </Box>
  );
};

export default ShareExperienceForm;
