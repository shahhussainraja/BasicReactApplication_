import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import "./RegistrationStyle.css";
import { Button} from "@mui/material";
import { useNavigate } from "react-router-dom";
import authServices from "../../services/AuthServices";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';


const UserRegistration = () => {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
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
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop:"30px",
      height: 500,
      width: 400,
      boxShadow: "0 0 3px 2px #cec7c759",
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
        marginLeft: "0px"
      }
  }
  
  return (
    <>
    <ToastContainer  autoClose={2000}/>
      <div className="flex-container">
        <div style={cardStyles.container}>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "30ch" },
            }}
            noValidate
            autoComplete="off"
          >
            
            <TextField
              label="Name"
              autoComplete="off"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <br />
            <TextField
              label="Email"
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <br />
            <TextField
              label="Phone"
              type="number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
            <br />
            <TextField
              label="Password"
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <br />
            <Button variant="contained" color="primary" style={cardStyles.btn} onClick={()=>{
                 if(recaptcha != true){
                  setErrRecaptchaStyle({
                    color:"red",
                    display:"block"
                  })
                  return;
                }else{
                authServices.register({name , email ,phone , password}).then((res)=>{
                  if(res == true){
                    toast.success("User Register successfully", {
                      position: toast.POSITION.TOP_CENTER
                    });
                      nav("/login");
                  }else{
                    toast.error(res, {
                      position: toast.POSITION.TOP_CENTER
                    });
                  }
                }).catch((err)=>{
                    console.log(err.message);
                })  
                  }
            }}>
              Register
            </Button>
            <Button variant="contained"  style={cardStyles.btn2} onClick={(e)=>{
              nav("/login");
            }}>Back</Button>
            <ReCAPTCHA
              sitekey="6LeqLwwhAAAAAMKLV8GMYWR1RCVQpDo4qM3sBB1y"
              onChange={onChange}
            />
            <span style={errRecaptchaStyle}><h4>Invalid Recaptcha</h4></span>
          </Box>
        </div>
      </div>
    </>
  );
};

export default UserRegistration;
