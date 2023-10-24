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

const Collegefestival = () => {

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
    <div className='body2'style={{background:"url('https://img.freepik.com/premium-vector/geometric-polygon-background-diamond-wallpaper-elegant-pattern-soft-color_206846-997.jpg?w=2000')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    
    <div class="logo">
         <img src={knowitlogo} alt='text'/>
     </div>
     <h1>Know It</h1>
     <div class="nav-container"  style={{backgroundColor:"rgb(71, 3, 82)"}}>
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
    

     <h6>UPCOMING COLLEGE FESTIVALS </h6>
     <img src={white1} style={{position:"absolute",left:"450px",top:"36%",width:"350px"}}/><br/><br/><br/><br/>
    <h6 style={{position:"absolute", top:"38%", left:"520px", fontSize:"30px"}}>Offline Fests</h6>
    <br/><br/><br/><br/>
    <div class="container1">
        

        <div class="card1">
        <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/festival/banner/638ed9a357f65_unstop_-_landing_banner_mobile_-_with_dates.png?d=340x195" alt='text'/>
        <h4>Transcend 2023 Pre Buzz Events</h4>
        <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"25px", height:"25px"}}/>SIBM<br/>Pune</p><br/>
        <p><CurrencyRupeeIcon/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>1 month left</p><br/>
        <div class="y" style={{backgroundColor:" rgb(184, 80, 202)",padding:"5px"}}>
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
                
        </div>
        <br/>
        </div>


        <div class="card1">
        <img src="https://d8it4huxumps7.cloudfront.net/images/opportunity_banner/d2c-festivals/festivals_02.jpg?d=1920x557" alt='text'/>
        <h4>Konflux</h4>
        <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"25px", height:"25px"}}/>ICFAI Business School (IBS)<br/>Mumbai</p><br/>
        <p><CurrencyRupeeIcon/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>7 days left</p><br/>
        <div class="z">
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
        
        </div>
        </div>


        <div class="card1">
        <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/festival/banner/638dce092ee2f_dhruva_unstop_banner_unstop_logo1.png?d=1280x371" alt='text'/>
        <h4>Dhruva 2023</h4>
        <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"25px", height:"25px"}}/>IIM Tiruchirappalli <br/>(Trichy)</p><br/>
        <p><CurrencyRupeeIcon/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>1 month left</p><br/>
        <div class="x">
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
        </div>
        
        </div>
        
    </div>
    <br/><br/><br/><br/><br/><br/>


    <img src={white1} style={{position:"absolute",top:"160%",left:"450px",width:"350px"}}/><br/><br/>
    <h6 style={{position:"absolute", top:"162%", left:"520px", fontSize:"30px"}}>Hybrid Fests</h6><br/><br/>
   
    <div class="container1">
    <div class="card1">
    <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/festival/banner/63924dc4c92b4_breaking_case_6.0__5_.png?d=1280x371" alt='text'/>
        <h4>Nishtha 5.0</h4>
        <p>IIM Tiruchirappalli (Trichy)</p>
        <p><CurrencyRupeeIcon/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>1 month left</p><br/>
        <div class="y">
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
                </div>
    </div>

    <div class="card1">
    <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/festival/banner/638dd96b34d9e_udgam_banner.png?d=340x195" alt='text'/>
        <h4>UDGAM 2023</h4>
        <p>IIT Guwahati</p>
        <p><CurrencyRupeeIcon style={{position:"relative", top:"3px"}}/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>1 month left</p><br/>
        <div class="x">
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
                </div>
    </div>

    <div class="card1">
    <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/festival/banner/638dc3eb08846_revelation_23_consolidated_event_banners___4_.jpg?d=1280x371" alt='text'/>
        <h4>Revelation 2023</h4>
        <p>SIBM Bangalore</p>
        <p><CurrencyRupeeIcon style={{position:"relative", top:"3px"}}/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>1 month left</p><br/>
        <div class="z">
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
                </div><br/>
                </div><br/>
<br/>
    </div><br/><br/><br/><br/>

    
    <div class="media2">
        <img src={gmail} alt='text'/>
        <img src={linkedinlogo} alt='text'/>
        <img src={telegram} alt='text'/>
        <img src={youtube} alt='text'/>
        </div>

<br/>
    <br/>
</div>
  )
}

export default Collegefestival
