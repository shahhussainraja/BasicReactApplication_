import logo from './logo.svg';
import './App.css';
import UserLogin from './components/auth/UserLogin';
import HomePage from './components/HomePage/HomePage';
import { BrowserRouter, Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { AppBar,IconButton,Toolbar,Button,Typography,Box } from "@mui/material";
import authServices from './services/AuthServices';

import Products from './components/HomePage/Products';
import userService from './services/UserService';
import UserRegistration from './components/auth/UserRegister';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditModel from './components/HomePage/EditModel';
import AddNewEditModel from './components/HomePage/AddNewEditModel';
import WeatherPage from './components/WeatherUpdates/WeatherPage';

function App() {
  return (
    <BrowserRouter >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" style={{backgroundColor:'#2d5b67'}}>
          <Toolbar>
            <Typography variant="h7"  sx={{ flexGrow: 1}}>
             {!authServices.isLogged()? 
             <Link to="/Login" ><Button variant="contained"  style={{float:"right",backgroundColor:'#3c636e'}} >Login</Button></Link> 
              :<> 
              <Link to="/" style={{color:"white",paddingRight:"1rem",fontWeight:"bold"}}>Home</Link>
              <Link to="/products" style={{color:"white",paddingRight:"1rem",fontWeight:"bold"}}>Course </Link>              
              <Link to="/weatherUpdate" style={{color:"white",paddingRight:"1rem",fontWeight:"bold"}}>Weather Updates </Link>              
              <Button variant="contained"  style={{float:"right",backgroundColor:'#3c636e'}}  onClick={()=>{
                authServices.logOut();
              }}>Logout</Button>
            </>
            }
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Routes>
        <Route path="/" element={authServices.isLogged()? <HomePage /> : <Navigate to="/Login" /> } />
        <Route path="/products/:page" element={ <Products /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/login" element={   <UserLogin /> } />
        <Route path="/Registration" element={   <UserRegistration /> } />
        <Route path="/Edit" element={ <EditModel /> } />
        <Route path="/Add" element={ <AddNewEditModel /> } />
        <Route path="/weatherUpdate" element={ <WeatherPage /> } />
                {/* if no route will found new Page will comes  */}
      </Routes>
    </BrowserRouter>



  );
}

export default App;
