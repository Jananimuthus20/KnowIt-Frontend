import React from 'react';
import './Hackathon.css';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import competition from './images/competition.png';
import hacklogo from './images/hacklogo.png';
import worklogo from './images/worklogo.png';
import collegefest from './images/collegefest.png';
import gmail from './images/gmail.png';
import loginlogo from './images/loginlogo.png';
import linkedinlogo from './images/linkedinlogo.png';
import telegram from './images/telegram.png';
import youtube from './images/youtube.png';
import knowitlogo from './images/knowitlogo.png';
import login from './images/login.png';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import ShareIcon from '@mui/icons-material/Share';
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import white1 from './images/white1.png';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';

const theme=createTheme({
    palette:{
      primary:{
      main:'#f1f1f2',
    },
    },
  });

const Workshop = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  return (
    <div className='body2'>
    
    <div class="logo">
         <img src={knowitlogo} alt='text'/>
     </div>
     <h1 style={{color:"white"}}>Know It</h1>
     <div class="nav-container">
     <nav>
      <ul>
      <li><Link to='/Competitions'><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-competitions-dance-flaticons-lineal-color-flat-icons-2.png"style={{position:"relative", top:"5px"}} alt='text'/>COMPETITIONS</Link></li>
         <li><Link to='/Hackathon'><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-hackathon-computer-science-flaticons-flat-flat-icons.png" style={{position:"relative", top:"5px"}}alt='text'/>HACKATHONS</Link></li>
         <li><Link to='/Workshop'><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-workshop-team-building-flaticons-flat-flat-icons.png"style={{position:"relative", top:"5px"}} alt='text'/>WORKSHOPS</Link></li>
         <li><Link to='/Collegefestival'><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-music-festival-vacation-planning-guys-trip-flaticons-flat-flat-icons.png" style={{position:"relative", top:"5px"}}alt='text'/>COLLEGE FESTIVALS</Link></li>
         <ThemeProvider theme={theme}>
         <li><Link onClick={handleClick}><img src="https://img.icons8.com/fluency/2x/user-male-circle.png" style={{position:"relative", top:"5px"}}alt='text'/>MY PROFILE</Link></li>
          </ThemeProvider>
          <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        >
         <Typography sx={{ p:2 }}>
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<AccountCircleSharpIcon sx={{ fontSize: 50 }}/>
        <li style={{textAlign:"center", fontSize:"20px"}}>user_01</li>
        <li style={{textAlign:"center" , fontSize:"20px"}}>user01cbe@gmail.com</li>
        <Link to='/'>
        <ButtonGroup>
        &nbsp; &nbsp; &nbsp; &nbsp;<Button startIcon={<LogoutOutlinedIcon/>} variant='contained' color='primary'>Logout</Button>
        </ButtonGroup>
        </Link>
        </Typography>
        </Popover>
        </ul>
      </nav>
      </div>
     <br/>
     <div class="logo2">
         <div class="back1">
         <ButtonGroup>
             <Link to='/Newhome'><Button startIcon ={<HomeIcon/>} color='primary' variant='contained'>BACK TO HOME</Button></Link>
         </ButtonGroup>
         </div>
     </div>


     <div class="heading">
    <h6 class="head1">UPCOMING WORKSHOPS</h6></div>
     <img src={white1} style={{position:"absolute",top:"36%",left:"450px",width:"400px"}}/><br/><br/><br/><br/>
    <h6 style={{position:"absolute", top:"38%", left:"490px", fontSize:"30px"}}>Offline Workshops</h6>
    <br/><br/><br/><br/>
    <div class="container1">
        

        <div class="card1">
        <img src="https://cpimg.tistatic.com/07574419/b/5/International-Conference-on-Optical-Photonic-Engineering.png" alt='text'/>
        <h4>icOPEN 2023</h4>
        <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"25px", height:"25px"}}/>Holiday Inn Singapore Atrium</p><br/>
        <p>Registeration Fee: 150$</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>11 months left</p><br/>
        <div class="y" >
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
                
        </div>
        <br/>
        </div>

        <div class="card1">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Zt65zVcv20xvs7Ls955OrICfvamrAiAszULbWXoH0ELS247C1HACOmqj1kMROxPBc2E&usqp=CAU" alt='text'/>
        <h4>ICMAA 2023</h4>
        <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"25px", height:"25px"}}/>Royal Princess Larn Luang Bangkok</p><br/>
        <p>Registeration Fee:220$</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>2 months left</p><br/>
        <div class="x" style={{backgroundColor:" rgb(31, 125, 207)",padding:"5px"}}>
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
        </div>
        </div>
        <div class="card1">
        <img src="https://ehospice.com/wp-content/uploads/2022/03/IAPCON-2023.jpg" alt='text'/>
        <h4>IAPCON 2023</h4>
        <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"25px", height:"25px"}}/>NIMHANS Convention Centre Bangalore</p><br/>
        <p>Registeration Fee:<CurrencyRupeeIcon/>2000</p>
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>2 months left</p><br/>
        <div class="z">
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
        
        </div>
        </div>
    </div>
    <br/><br/><br/><br/><br/><br/>



    <img src={white1} style={{position:"absolute",top:"153%",left:"450px",width:"400px"}}/><br/><br/>
    <h6 style={{position:"absolute", top:"155%", left:"490px", fontSize:"30px"}}>Online Workshops</h6><br/><br/>


    <div class="container1">
    <div class="card1">
    <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/6389b1c30dd16_cxo-summit.jpg?d=340x195" alt='text'/>
        <h4>CXO Summit</h4>
        <p>TeXLence 2022</p>
        <p><CurrencyRupeeIcon/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>7 days left</p><br/>
        <div class="y" style={{backgroundColor:" rgb(216, 58, 87)",padding:"5px"}}>
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
                </div>
    </div>



    <div class="card1">
    <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/638f46608396c_technical-workshop.png?d=1280x371" alt='text'/>
        <h4>Technical Workshop</h4>
        <p>Fluxus</p>
        <p>Registeration Fee:<CurrencyRupeeIcon style={{position:"relative", top:"3px"}}/>599</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>5 days left</p><br/>
        <div class="z">
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
                </div>
                <br/>
                
    </div>

    <div class="card1">
    <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/635c2d3c81659_digital-marketing-at-iit-bombay.png?d=340x195" alt='text'/>
        <h4>Digital Marketing Workshop</h4>
        <p>Techfest</p>
        <p>Registeration Fee:<CurrencyRupeeIcon style={{position:"relative", top:"3px"}}/>1190</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>6 days left</p><br/>
        <div class="x">
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
                </div>
                </div>
<br/>
    </div><br/><br/><br/><br/><br/>

    
    <div class="media2">
        <img src={gmail} alt='text'/>
        <img src={linkedinlogo} alt='text'/>
        <img src={telegram} alt='text'/>
        <img src={youtube} alt='text'/>
        </div>
    

</div>
  )


}

export default Workshop
