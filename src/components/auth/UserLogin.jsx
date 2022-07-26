import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./UserLoginStyle.css";
import { Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import authServices from "../../services/AuthServices";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';


const UserLogin = () => {
  const nav = useNavigate();
  const [email, setEmail] = useState("admin@gmail.com");
  const [password, setPassword] = useState("admin");
  const [recaptcha, setRecaptcha] = useState("");

  function onChange(value) {
    console.log("Captcha value:", value);
    if(value !=""){
      setRecaptcha(true);
    }else{
      setRecaptcha(false);
    }
  }

  const [errStyle, setErrStyle] = useState({
    color:"red",
    display:"none",
  });

const [errRecaptchaStyle, setErrRecaptchaStyle] = useState({
    color:"red",
    display:"none"
  });

  const cardStyles = {
    containerLogin: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 500,
      width: 400,
      marginTop:"20px", 
      boxShadow: "0 0 3px 2px #2d5b67",
      border: '5px solid #2d5b67',
      alignItems: "center",
      padding: 20,
      borderRadius: 20,
      backgroundColor:"white"
    },
    btn : {
      width : "100px"
    },
    btn2 : {
      width : "100px",
      backgroundColor : "green",
      marginLeft: "0px"
    }



  }

  return (
    <>
    
      <div className="flex-container">
        <h2 className="login">User login</h2>
        <div style={cardStyles.containerLogin}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Email"
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />{" "} 
            <br />
            <TextField
              label="Password"
              type="password"
              value={password}
              variant="outlined"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            
            <span style={errStyle}> <h4>Invalid Email/Password</h4></span>
            <Button variant="contained" color="primary" style={cardStyles.btn} onClick={()=>{
              if(recaptcha != true){
                setErrRecaptchaStyle({
                  color:"red",
                  display:"block"
                })
                return;
              }
              authServices.login(email,password).then((res)=>{  
                if(res == false){
                setErrStyle({
                  color:"red",
                  display:"block",
                })}else{
                  toast.success("Login Successfully !",{
                    position: toast.POSITION.TOP_CENTER
                  });
                  nav("/");
                  window.location.reload(); 

                }
              }).catch((err)=>{
                console.log(err);
              })
            }}>
              Login
            </Button>
            <Button variant="contained"  style={cardStyles.btn2} onClick={(e)=>{
              nav("/Registration");
            }}>Register</Button>
            <div className="loginRecaptcha">
            <ReCAPTCHA 
              sitekey="6LeqLwwhAAAAAMKLV8GMYWR1RCVQpDo4qM3sBB1y"
              onChange={onChange}
            />
            </div>
            
            <span style={errRecaptchaStyle}><h4>Invalid Recaptcha</h4></span>
          </Box>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
