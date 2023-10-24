import React from 'react'
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom';
//import competition from './images/competition.png';
//import hacklogo from './images/hacklogo.png';
//import worklogo from './images/worklogo.png';
//import collegefest from './images/collegefest.png';
import gmail from './images/gmail.png';
//import loginlogo from './images/loginlogo.png';
import linkedinlogo from './images/linkedinlogo.png';
import telegram from './images/telegram.png';
import youtube from './images/youtube.png';
import knowitlogo from './images/knowitlogo.png';
import './Hackathon.css';
//import login from './images/login.png';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
//import ContactMailOutlinedIcon from '@mui/icons-material/ContactMailOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
//import ShareIcon from '@mui/icons-material/Share';
//import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';
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

const Competitions = () => {

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
 <div class="body2">
   <div class="logo">
        <img src={knowitlogo} alt='text'/>
    </div>
    <h1  style={{color:"white"}}>Know It</h1>
    <div class="nav-container">
     <nav>
      <ul>
         <li><Link to='/Competitions'><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-competitions-dance-flaticons-lineal-color-flat-icons-2.png"style={{position:"relative", top:"5px"}} alt='text'/>COMPETITIONS</Link></li>
         <li><Link to='/Hackathon'><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-hackathon-computer-science-flaticons-flat-flat-icons.png" style={{position:"relative", top:"6px"}}alt='text'/>HACKATHONS</Link></li>
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
        <ButtonGroup>
            <Link to='/Newhome'><Button startIcon ={<HomeIcon/>} color='primary' variant='contained'>BACK TO HOME</Button></Link>
        </ButtonGroup>
    </div>
    <div class="heading">
    <h6 class="head1" style={{textAlign:"center"}}>UPCOMING COMPETITIONS </h6><br/><br/></div>
    <img src={white1} style={{position:"absolute",left:"450px",width:"400px"}}/><br/><br/>
    <h6 style={{position:"absolute", top:"39%", left:"490px", fontSize:"30px"}}>Offline Competitions</h6>
    <br/><br/><br/><br/>

    <div class="container1">
        

        <div class="card1">
        <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/63917f0992d12_the-ultimate-rewind.png?d=1280x371" alt='text'/>
        <h4>The Ultimate Rewind</h4>
        <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"25px", height:"25px"}}/>ICFAI Business School (IBS)<br/>Hyderabad</p><br/>
        <p><CurrencyRupeeIcon/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>25 days left</p><br/>
        <div class="y">
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
                
        </div>
        <br/>
        </div>

        <div class="card1">
        <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/6392301e7ed44_talentstrat.png?d=1280x371" alt='text'/>
        <h4>TalentStrat</h4>
        <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"25px", height:"25px"}}/>Indian Institute of Management<br/>Kozhikode</p><br/>
        <p><CurrencyRupeeIcon/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>16 days left</p><br/>
        <div class="x">
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
        </div>
        </div>
        <div class="card1">
        <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/6390e38e64541_ad-ancient.jpeg?d=1280x371" alt='text'/>
        <h4>Ad-Ancient</h4>
        <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"25px", height:"25px"}}/>ICFAI Business School (IBS)<br/>Hyderabad</p><br/>
        <p><CurrencyRupeeIcon/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>26 days left</p><br/>
        <div class="z">
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
        
        </div>
        </div>
    </div>
    <br/><br/><br/><br/><br/><br/>


    <img src={white1} style={{position:"absolute",top:"160%",left:"450px",width:"400px"}}/><br/><br/>
    <h6 style={{position:"absolute", top:"162%", left:"490px", fontSize:"30px"}}>Online Competitions</h6><br/><br/>
    
    <div class="container1">
    <div class="card1">
    <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/Top_10_HR_Concepts_And_Terms.jpg" alt='text'/>
        <h4>House of HR</h4>
        <p>Transcend 2023 Pre Buzz Events</p>
        <p><CurrencyRupeeIcon/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>7 days left</p><br/>
        <div class="y" style={{backgroundColor:" rgb(17, 96, 146)",padding:"5px"}}>
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
                </div>
    </div>

    <div class="card1">
    <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/6390e0b51d254_cesim-elite-optimus.png?d=1280x371" alt='text'/>
        <h4>Cesim Elite: Optimus</h4>
        <p>Backwaters'23</p>
        <p><CurrencyRupeeIcon style={{position:"relative", top:"3px"}}/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>16 days left</p><br/>
        <div class="x" style={{backgroundColor:"rgb(106, 162, 125)",padding:"5px"}}>
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
                </div>
    </div>

    <div class="card1">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_S2VBPsMdvtqufRdtxVRshj3j13eJdVzw4g&usqp=CAU" alt='text'/>
        <h4>Shoot-E-Preneur</h4>
        <p>Universal Business School, New Delhi</p>
        <p>Registeration Fee:<CurrencyRupeeIcon style={{position:"relative", top:"3px"}}/>100</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>4 days left</p><br/>
        <div class="z" style={{backgroundColor:"rgb(65, 218, 213)",padding:"5px"}}>
        <Link to='/Register1'> <Button color='primary' variant='contained'>Register</Button></Link>
                </div>
                <br/>
    </div>
    <br/><br/><br/><br/><br/><br/>
    
    
    <br/>
    <br/><br/><br/><br/>
    
</div>    
<br/>
<br/><br/><br/><br/>

     
    <div class="media2">
        <img src={gmail} alt='text'/>
        <img src={linkedinlogo} alt='text'/>
        <img src={telegram} alt='text'/>
        <img src={youtube} alt='text'/>
        </div>
        </div>
  )
}

export default Competitions