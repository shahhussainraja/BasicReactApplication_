//Done with pagination

import React, { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import userService from "../../services/UserService";
import SingleProduct from "./SingleProduct";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import "./Products.css";
import AddNewEditModel from "./AddNewEditModel";

const Products = (props) => {
 
  const [course,setCourse] =  React.useState([]);
  const [totalRecord,setTotalRecord] =  React.useState(0);
  const [page, setPage] = React.useState(1);
  const [openAddModel, setOpenAddModel] = React.useState(false);

 //this will reflect the  change of Submit and Delete button in Edit Model
  const [changeHandler ,setChangeHandler] = React.useState(1);


  const handleChange = (event, value) => {
    setPage(value);
  };


  const fetchData = () => {
    userService.getCourse(page).then((res)=>{
      console.log(res.courseData)
      setCourse(res.courseData);
      setTotalRecord(res.totalRecord);
    }).catch((err)=>{
      console.log(err.message);
    })



  };
  useEffect(fetchData, [page ]);
  useEffect(fetchData, [changeHandler]);

  return (
    <>  
    
        <div style={{ justifyContent: "center",position: "relative" }}>
        <div className="fab">
        <Fab size="medium" color="primary" style={{backgroundColor:"#2d5b67"}} aria-label="add" onClick={()=>{
          console.log("buttons hits");
          setOpenAddModel(true);
        }}>
        <AddIcon />
        </Fab>
        </div>
          {course.length <= 0 ? <h1>No Data Found </h1> : course.map((course, key) => (
            <div style={{ marginBottom: "20px" }}>
              <h5 style={{
                  marginBottom: "0px",
                  marginTop: "5px",
                  fontWeight: "bold",
                  paddingLeft: "5px",   }}
              >
              </h5>
              <SingleProduct props={course} changeHandler = {setChangeHandler} />
            </div>
          ))}
          {openAddModel && <AddNewEditModel setModelHandle={setOpenAddModel} modelHandle={openAddModel}   setChangeHandler={setChangeHandler}/>}
        </div>

         <div style={{display:"flex",justifyContent: "center",marginBottom:"10px"}}> 
         <Pagination count={Math.ceil(totalRecord/5)} onChange={handleChange} color="primary" />  
          </div>
        
       
    </>
  );
};

export default Products;
