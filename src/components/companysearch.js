import React, { useState } from 'react';
import { TextField, Autocomplete } from '@mui/material';
import axios from 'axios';

const CompanySearch = ({ onCompanySelect }) => {
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false); // State for loading

  const handleInputChange = async (event) => {
    const { value } = event.target;
    if (value) {
      setLoading(true); // Set loading to true when fetching data
      try {
        const response = await axios.get(`https://api.opencorporates.com/v0.4/companies/search`, {
          params: { q: value }, // Add query parameter for search term
        });
        const companies = response.data.results.map((company) => ({
          name: company.company.name, // Adjust based on actual data structure
          logo_url: company.company.logo_url || 'default_logo_url.png', // Use default logo if not available
        }));
        setOptions(companies);
      } catch (error) {
        console.error('Error fetching companies:', error);
        setOptions([]);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    } else {
      setOptions([]);
    }
  };

  return (
    <Autocomplete
      options={options}
      getOptionLabel={(option) => option.name}
      onChange={(event, value) => {
        if (value) {
          onCompanySelect(value); // Pass selected company
        }
      }}
      loading={loading} // Show loading indicator
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search Company"
          variant="outlined"
          onChange={handleInputChange}
          fullWidth
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
      renderOption={(props, option) => (
        <li {...props} style={{ display: 'flex', alignItems: 'center' }}>
          <img src={option.logo_url} alt={option.name} style={{ width: 30, marginRight: 10 }} />
          {option.name}
        </li>
      )}
    />
  );
};

export default CompanySearch;
