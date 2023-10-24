
import React from 'react';
import {Link} from 'react-router-dom';
import knowitlogo from './images/knowitlogo.png';
import kuttilogo from './images/kuttilogo.png';
import './App.css'
import { TextField } from '@material-ui/core';
import {Button} from '@mui/material';
import ButtonGroup from '@material-ui/core';
import LoginIcon from '@mui/icons-material/Login';
import gmail from './images/gmail.png';
import loginlogo from './images/loginlogo.png';
import linkedinlogo from './images/linkedinlogo.png';
import telegram from './images/telegram.png';
import youtube from './images/youtube.png';

function validate(){  
    var name=document.f1.name.value;  
    var password=document.f1.password.value;  
    var status=false;  
      
    if(name.length<1){  
    document.getElementById("nameloc").innerHTML=  
    " Please enter your name";  
    status=false;  
    }else{  
    document.getElementById("nameloc").innerHTML="Done";  
    status=true;  
    }  
    if(password.length<6){  
    document.getElementById("passwordloc").innerHTML=  
    "Password must be at least 6 char long";  
    status=false;  
    }else{  
    document.getElementById("passwordloc").innerHTML="Done";  
    }  
    return status;  
    }  
/*
<form name="f1" action="#" onsubmit="return validate()">  
<table>  
<tr><td>Enter Name:</td><td><input type="text" name="name"/>  
<span id="nameloc"></span></td></tr>  
<tr><td>Enter Password:</td><td><input type="password" name="password"/>  
<span id="passwordloc"></span></td></tr>  
<tr><td colspan="2"><input type="submit" value="register"/></td></tr>  
</table>  
</form> */
const Login = () => {
  return (
    <div class="a">
    <div class="nav1">
   <div class="Box">
    <img src={knowitlogo} alt="K"/>
    </div>
    </div>
    <div class="h1">
    <h1 class="kk" style={{color:"white"}}>Know It</h1>
    </div>
    <div class="Outline">
    <div class="container">
       <div class="drop">
        <div class="content">
            <div class="kutti">
            <img src={kuttilogo}alt="Login Image"/>
            </div>
            <p><b>Log In</b></p>
            <form name="f1" action="/Newhome" onsubmit="return validate()">  
               <TextField label="UserName"  required=" "variant="standard"/>
               <TextField label="password" type="password" required=" "variant="standard"/>
               <Link to='/Newhome'><Button endIcon={<LoginIcon/>} color="primary" variant="contained">Login</Button>
                </Link>
                
            </form>
        </div>
       </div>
    </div>
    </div>
    <div class="image">
       {/* <img src="https://webinnexus.com/wp-content/uploads/2020/03/web-1-1024x1024.png" alt='bg'/>*/}
    </div>

    <div class="media2" style={{position:"absolute",bottom:"-0px",right:"0px"}}>
        <img src={gmail} alt='text'/>
        <img src={linkedinlogo} alt='text'/>
        <img src={telegram} alt='text'/>
        <img src={youtube} alt='text'/>
        </div>
    </div>
  )
}

export default Login
