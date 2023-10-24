import React from 'react';
import './register.css';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom';
import MuiAlert from "@material-ui/lab/Alert";


const Register2 = () => {

  /*function Alert(props) {
    return <MuiAlert {...props} />;
  }*/

  return (
    <div class="body8" style={{ background:" -webkit-linear-gradient(135deg, #71b7e6, #59b66f)"}}>
       <div class="logo2">
    <ButtonGroup>
        <Link to='/Newhome'><Button startIcon ={<HomeIcon/>} color='primary' variant='contained'>BACK TO HOME</Button></Link>
    </ButtonGroup>
</div>
    <div class="container8" style={{ height:"540px"}}>
       <div class="title">Registration</div>
       <div class="content8">
        <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Team Name</span>
            <input type="text" placeholder="Enter your name" required/>
          </div>

          <div class="input-box">
            <span class="details">Team Leader Name</span>
            <input type="text" placeholder="Team leader name" required/>
          </div>

          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your email"required />
          </div>

          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your number" required/>
          </div>

          <div class="input-box">
            <span class="details">College Name</span>
            <input type="text" placeholder="Enter your college"required />
          </div>

          <div class="input-box">
            <span class="details">Degree</span>
            <input type="text" placeholder="Confirm your Degree"required />
          </div>
          <div class="input-box">
            <span class="details">Team Size</span>
            <input type="text" placeholder="2-6 *" required/>
          </div>
          <div class="input-box">
            <span class="details">Problem Statement</span>
            <input type="text" placeholder="Your problem statement" required/>
          </div>
 
        

          <div class="r" >
        <Button onClick={()=>{ alert('Registered Successfully'); }} style={{background:" -webkit-linear-gradient(135deg, #71b7e6, #59b66f)", transform:"scale(0.99)",width:"120px",height:"60px" ,fontSize:"larger",border:"5px solid transparent"}}>Register</Button>
        </div>

          </div>
        </form>
       </div>
       </div>
    </div>
  )
}

export default Register2
