import React from "react";
import userService from "../../services/UserService";
import EditModel from "./EditModel";
import "./HomePage.css"
import {Button }  from "@mui/material"
import { useState } from "react";

const HomePage = () => {
  const [data, setData] = React.useState([]);
  return (
    <>
      <div className="container">
         <h1 className="wellcome">Don't think About Dream <br />
                       Start Work for It... </h1>   
      </div>
      {/* <button
        onClick={() => {
          console.log("Event Hits");
          userService
            .getCourse()
            .then((res) => {
              setData(res.data);
              console.log(data);
            })
            .catch((err) => {
              console.log("error " + err);
            });
        }}
      >
        Testing
      </button>
      {console.log(data)} */}
    </>
  );
};

export default HomePage;
