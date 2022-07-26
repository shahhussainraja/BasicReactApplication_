//Done with pagination

import React, { useState, useEffect } from "react";
import Pagination from '@mui/material/Pagination';
import userService from "../../services/UserService";
import SingleProduct from "./SingleProduct";

const Products = (props) => {
 
  const [course,setCourse] =  React.useState([]);
  const [totalRecord,setTotalRecord] =  React.useState(0);
  const [page, setPage] = React.useState(1);

 //this will reflect the  change of Submit and Delete button in Edit Model
  const [changeHandler ,setChangeHandler] = React.useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };

  const fetchData = () => {
    userService.getCourse(page).then((res)=>{
      setCourse(res.courseData);
      setTotalRecord(res.totalRecord);
    })
  };
  useEffect(fetchData, [page ]);
  useEffect(fetchData, [changeHandler]);

  return (
    <>  
        <div style={{ justifyContent: "center",position: "relative" }}>
          {course.length <= 0 ? <h1>No Data Found </h1> : course.map((course, index) => (
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
        </div>

         <div style={{display:"flex",justifyContent: "center",marginBottom:"10px"}}> 
         <Pagination count={Math.ceil(totalRecord/5)} onChange={handleChange} color="primary" />  
          </div>
        
       
    </>
  );
};

export default Products;
