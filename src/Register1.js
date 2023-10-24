import React from 'react';
import './register.css';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom';
import MuiAlert from "@material-ui/lab/Alert";

const Register1 = () => {


  function Alert(props) {
    return <MuiAlert {...props} />;
  }

    return (
      
    <div class="body8">
    <div class="logo2">
    <ButtonGroup>
        <Link to='/Newhome'><Button startIcon ={<HomeIcon/>} color='primary' variant='contained'>BACK TO HOME</Button></Link>
    </ButtonGroup>
</div>
    <div class="container8">
       <div class="title">Registration</div>
       <div class="content8">
        <form>
        <div class="user-details">
          <div class="input-box">
            <span class="details">Full Name</span>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div class="input-box">
            <span class="details">Email</span>
            <input type="text" placeholder="Enter your Email" />
          </div>

          <div class="input-box">
            <span class="details">Phone Number</span>
            <input type="text" placeholder="Enter your Phone number" />
          </div>

          <div class="input-box">
            <span class="details">College Name</span>
            <input type="text" placeholder="Enter your College name" />
          </div>

          <div class="input-box">
            <span class="details">Year Of Study</span>
            <input type="text" placeholder="Enter your year of study" />
          </div>

          <div class="input-box">
            <span class="details">Degree</span>
            <input type="text" placeholder="Enter your degree" />
          </div>
        
        <div class="gender-details">
       
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span class="gender-title">Gender</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Male</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Female</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">Prefer&nbsp;not&nbsp;to&nbsp;say</span>
            </label>
          </div>
      
        </div>

        <div class="gender-details">
       
          <input type="radio" name="gender" id="dot-1"/>
          <input type="radio" name="gender" id="dot-2"/>
          <input type="radio" name="gender" id="dot-3"/>
          <span class="gender-title">Event Type</span>
          <div class="category">
            <label for="dot-1">
            <span class="dot one"></span>
            <span class="gender">Competitions</span>
          </label>
          <label for="dot-2">
            <span class="dot two"></span>
            <span class="gender">Workshops</span>
          </label>
          <label for="dot-3">
            <span class="dot three"></span>
            <span class="gender">College&nbsp;Festivals</span>
            </label>
          </div>
      
        </div>
        <div class="r" >
        <Button onClick={()=>{ alert('Registered Successfully'); }} style={{ background:" -webkit-linear-gradient(135deg, #71b7e6, #9b59b6)", transform:"scale(0.99)",width:"120px",height:"60px" ,fontSize:"larger",border:"5px solid transparent"}}>Register</Button>
        </div>
          
        
        <br/><br/>
          </div>
        </form>
       </div>
       </div>
    </div>
  )
}

export default Register1
