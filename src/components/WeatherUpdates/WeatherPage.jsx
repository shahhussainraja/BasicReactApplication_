import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Weather from './Weather';
import PageCss from "./WeatherPage.css"

const WeatherPage = () => {
    const [city, setCity] = React.useState('');

    const handleChange = (event) => {
      setCity(event.target.value);
    };
    
    const WeatherCompnent = ()=>{
     return  city !==''? <Weather City={city} /> :false;
    }
  
return (
    <>
<div className='container2'>
<Grid container spacing={2} style={{paddingTop:"20px"}}>
    <Grid item xs={12} md={2}> 
    </Grid>
    <Grid item xs={12} md={8}> 
  <Box sx={{ minWidth: 120 }} >
    <FormControl fullWidth style={{backgroundColor:"ghostWhite"}}  >
      <InputLabel id="demo-simple-select-label" >City</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        label="City"
        value={city}
        onChange={handleChange}
      >
        <MenuItem value={"Lahore"}>Lahore</MenuItem>
        <MenuItem value={"Karachi"}>Karachi</MenuItem>
        <MenuItem value={"Multan"}>Multan</MenuItem>
        <MenuItem value={"Islamabad"}>Islamabad</MenuItem>
        <MenuItem value={"Mian Channu"}>Mian Channu</MenuItem>
      </Select>
    </FormControl>
  </Box>
      {WeatherCompnent()}
    </Grid>
    <Grid item xs={12} md={2}> 
    </Grid>
</Grid>    
</div>
        </>
     );
}
 
export default WeatherPage;