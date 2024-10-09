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
  const [branch, setBranch] = useState('');
  const [internshipSession, setInternshipSession] = useState('');
  const [offerObtained, setOfferObtained] = useState('');
  const [roleDescription, setRoleDescription] = useState('');
  const [internLocation, setInternLocation] = useState('');
  const [eligibleBranches, setEligibleBranches] = useState('');
  const [eligibilityCriteria, setEligibilityCriteria] = useState('');
  const [selectionProcedure, setSelectionProcedure] = useState('');
  const [onlineTestDescription, setOnlineTestDescription] = useState('');
  const [technicalInterviewDescription, setTechnicalInterviewDescription] = useState('');
  const [hrRoundDescription, setHrRoundDescription] = useState('');
  const [preparationStrategy, setPreparationStrategy] = useState('');
  const [resources, setResources] = useState('');
  const [type, setType] = useState('intern');
  const [company, setCompany] = useState(null);
  const [options, setOptions] = useState([]);


  const handleCompanyInputChange = async (event) => {
    const { value } = event.target;
    if (value) {
      try {
        const response = await axios.get(`https://api.brandfetch.io/v2/search/${value}`);
        if (response.data && response.data.length > 0) {
          setOptions(response.data);
        } else {
          // If no company is found, show default option with user input
          setOptions([{ name: value, icon: '/company-logo-default.png' }]);
        }
      } catch (error) {
        console.error('Error fetching company data:', error);
        // Set default option if there is an error
        setOptions([{ name: value, icon: '/company-logo-default.png' }]);
      }
    } else {
      setOptions([]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare student data
    const studentData = {
      name,
      college,
      branch,
      internship_session: internshipSession,
      offer_obtained: offerObtained,
      role_description: roleDescription,
      intern_location: internLocation,
      eligible_branches: eligibleBranches,
      eligibility_criteria: eligibilityCriteria,
      selection_procedure: selectionProcedure,
      description_online_test: onlineTestDescription,
      description_technical_interview: technicalInterviewDescription,
      description_hr_round: hrRoundDescription,
      preparation_strategy: preparationStrategy,
      resources,
    };

    try {
      // First, create the student
      const studentResponse = await axios.post('/api/students', studentData);
      const studentId = studentResponse.data._id;

      // Now check if the company exists
      if (company) {
        // If company exists, add the student to the company's student list
        await axios.post(`/api/companies/${company._id}/addStudent`, { studentId });
      } else {
        // If company doesn't exist, create the company and add the student
        const companyData = {
          name: company.name,
          logo_url: company.logo_url,
          students: [studentId],
          type,
        };
        await axios.post('/api/companies', companyData);
      }

      // Optionally, reset form fields here
    } catch (error) {
      console.error('Error submitting experience:', error);
    }
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
            <img src={option.icon || '/company-logo-default.png'} alt={option.name} style={{ width: 30, marginRight: 10 }} />
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
        label="Branch"
        variant="outlined"
        required
        fullWidth
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Internship Session"
        variant="outlined"
        required
        fullWidth
        value={internshipSession}
        onChange={(e) => setInternshipSession(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Offer Obtained"
        variant="outlined"
        required
        fullWidth
        value={offerObtained}
        onChange={(e) => setOfferObtained(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Role Description"
        variant="outlined"
        required
        fullWidth
        value={roleDescription}
        onChange={(e) => setRoleDescription(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Intern Location"
        variant="outlined"
        required
        fullWidth
        value={internLocation}
        onChange={(e) => setInternLocation(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Eligible Branches"
        variant="outlined"
        required
        fullWidth
        value={eligibleBranches}
        onChange={(e) => setEligibleBranches(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Eligibility Criteria"
        variant="outlined"
        required
        fullWidth
        value={eligibilityCriteria}
        onChange={(e) => setEligibilityCriteria(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Selection Procedure"
        variant="outlined"
        required
        fullWidth
        value={selectionProcedure}
        onChange={(e) => setSelectionProcedure(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Online Test Description"
        variant="outlined"
        required
        fullWidth
        multiline
        rows={4}
        value={onlineTestDescription}
        onChange={(e) => setOnlineTestDescription(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Technical Interview Description"
        variant="outlined"
        required
        fullWidth
        multiline
        rows={4}
        value={technicalInterviewDescription}
        onChange={(e) => setTechnicalInterviewDescription(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="HR Round Description"
        variant="outlined"
        required
        fullWidth
        multiline
        rows={4}
        value={hrRoundDescription}
        onChange={(e) => setHrRoundDescription(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Preparation Strategy"
        variant="outlined"
        required
        fullWidth
        multiline
        rows={4}
        value={preparationStrategy}
        onChange={(e) => setPreparationStrategy(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Resources"
        variant="outlined"
        required
        fullWidth
        value={resources}
        onChange={(e) => setResources(e.target.value)}
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
