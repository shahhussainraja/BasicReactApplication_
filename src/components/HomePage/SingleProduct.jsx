import React from 'react';
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button , Box, Modal} from "@mui/material";
import EditModel from './EditModel';
import userService from '../../services/UserService';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

export default function SingleProduct({ props, key , changeHandler }) {
  
  //here this for showing the model
  const [openModel, setOpenModel] = React.useState(false);

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

    const ActionButtonStyle ={
      actionBtn:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginLetf:"100px"
      }
    }


  return (
    <div>
      <ToastContainer />
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            InstructorName
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {props.instructorName}
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary>
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Course Title
          </Typography>
          <Typography sx={{ color: "text.secondary" }}>
            {props.courseName}
          </Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>Link</Typography>
          <Typography sx={{ color: "text.secondary" }}>Below</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <a href={props.link} target="_blank">
              {props.link}
            </a>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: "33%", flexShrink: 0 }}>
            Lecture Description
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{props.description}</Typography>
        </AccordionDetails>
      </Accordion>
      <div className={ActionButtonStyle.actionBtn}>
      <Button variant="contained" color="error" style={{float:"right"}} onClick={()=>{
        userService.deleteCourse(props._id).then((res)=>{
          if(res.success = true){
            console.log(res);
            changeHandler(Math.floor(Math.random() * 1111111111111111));
            toast.success("Deleted Successfully", {
              position: toast.POSITION.TOP_CENTER});
          }
        }).catch((err)=>{
          console.log(err.message);
          toast.error("Error Failed to Delete !", {
            position: toast.POSITION.TOP_CENTER
          });
        })
      }}>Delete </Button> 
      <Button variant="contained" color="success" style={{float:"right"}} onClick={()=>{   
        setOpenModel(true);
      }}>Edit </Button>
      
      <br />   
      <br />   
      <br />   
      </div>

      {openModel && <EditModel modelHandle={openModel} setModelHandle={setOpenModel} course={props} setChangeHandler={changeHandler}/>}

    </div>
  );
}

