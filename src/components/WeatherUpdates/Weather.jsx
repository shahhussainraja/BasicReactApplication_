import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Weather = ({City}) => {

    const [weatherData,setWeatherData] = useState([]);
    let detail = [{
        "city" : "Lahore",
        "lat": 31.5204 , 
        "lon": 74.3587
        
    },{
        "city" : "Karachi",
        "lat": 24.8607, 
        "lon": 67.0011
        
    },{
        "city" : "Multan",
        "lat": 30.1575, 
        "lon": 71.5249
        
    },{
        "city" : "Islamabad",
        "lat": 33.6844, 
        "lon": 73.0479
        
    },{
        "city" : "Mian Channu",
        "lat": 30.4390, 
        "lon": 72.3552
        
    }]

    const fetchData = ()=>{
        let data = detail.find(val=>val.city === City); 
        axios.get("https://api.openweathermap.org/data/2.5/weather?lat="+data.lat+"&lon="+data.lon+"&units=metric&appid=bafb9353ed5fd0e37e467321085b9d27").
        then((res)=>{
            console.log(res.data);
            setWeatherData(res.data);
        }).catch((err)=>{
            console.log(err.message);
        })
    } 
    useEffect(fetchData,[weatherData]);
    return ( <>

    
        { !weatherData.name  ? <h1 style={{color:"white"}}>Loading data.....</h1> : 
        <>
<TableContainer component={Paper} style={{marginTop:"10px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>{weatherData.name}</TableCell>
            <TableCell align="right"></TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Weather
              </TableCell>
              <TableCell align="right"></TableCell>
                <TableCell align="right">{weatherData.weather[0].description}</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               Temperature
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">{weatherData.main.temp} C</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                Min-Temperature
              </TableCell>
              <TableCell align="right"></TableCell>
                <TableCell align="right">{weatherData.main.temp_min } C</TableCell>
            </TableRow>    
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
              Humidity
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">{weatherData.main.humidity}%</TableCell>
            </TableRow>
            <TableRow
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               Wind Speed
              </TableCell>
              <TableCell align="right"></TableCell>
              <TableCell align="right">{weatherData.wind.speed}mph</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
        </>  }

             </> );
}
 
export default Weather;