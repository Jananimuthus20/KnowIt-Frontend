import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';
import { Button } from '@material-ui/core';
import { ButtonGroup } from '@mui/material';
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
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
/*import innovation from './images/innovation.png';*/


const theme=createTheme({
    palette:{
      primary:{
      main:'#f1f1f2',
    },
    },
  });

const Newhome = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    function showAlert() {
      var myText = "This can be whatever text you like!";
      alert (myText);
  }

  return (
    <div class="external">
    <div class="logoh">
         <img src={knowitlogo} alt='text'/>
    </div>
    <h1>Know It</h1>
     <div class="nav-container">
     <nav>
      <ul style={{ Size:" xx-large"}}>
         <li><Link to='/Competitions' style={{ Size:" larger"}}><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-competitions-dance-flaticons-lineal-color-flat-icons-2.png" alt='text'/>COMPETITIONS</Link></li>
         <li><Link to='/Hackathon'><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-hackathon-computer-science-flaticons-flat-flat-icons.png"alt='text'/>HACKATHONS</Link></li>
         <li><Link to='/Workshop'><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-workshop-team-building-flaticons-flat-flat-icons.png" alt='text'/>WORKSHOPS</Link></li>
         <li><Link to='/Collegefestival'><img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-music-festival-vacation-planning-guys-trip-flaticons-flat-flat-icons.png" alt='text'/>COLLEGE FESTIVALS&nbsp;&nbsp;&nbsp;&nbsp;</Link></li>
         <ThemeProvider theme={theme}>
         <li><Link onClick={handleClick}><img src="https://img.icons8.com/fluency/2x/user-male-circle.png" alt='text'/>MY PROFILE</Link></li>
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
<br/>
<br/>

<div class="innovation">
    <img src="https://245.tech/wp-content/uploads/2022/04/163-scaled.jpg" alt='txt'/>
    <div class="quote">
      <p class="quote1">We Connect People with People, People with Ideas & People with Opportunities </p>
    </div>
</div>
<h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Techno-PediaLearn A to Z of the coding world with this to-the-point programming compilation!</h3>
<br/>
<br/>
<div class="shadow">
  &nbsp;&nbsp;<img src="https://d8it4huxumps7.cloudfront.net/uploads/images/students/yellow-learn-vector.svg" />
  <p class="pract">Practice</p>
</div>

<br/>
<br/>
<br/>
<br/>

<div class="row">

  
      <div class="card4">
        <img src="https://images.hiverhq.com/blog/wp-content/uploads/2017/04/tr:h-360,w-362,pr-true,cm-pad_resize,bg-FFF4F6/Customer-feedback-1-1.jpg"/>
        <p> &nbsp;&nbsp;&nbsp;we value your words! &nbsp;&nbsp;&nbsp;&nbsp;Send your feedback to our mail address: feedback@knowit.com</p>
        
      </div>
      



 
    
      <div class="card2">
        <img src="https://dipl-pariwisata.usu.ac.id/images/about-us-title-2.png"/> <br/> 
        <p>Know It helps companies to discover, assess, and hire &nbsp;&nbsp;the best talent  through accurate coding, non-tech &nbsp;&nbsp;&nbsp;and skill-based hackathons,competitions, workshops etc.,</p>
      </div> <br/>
  

  
  
         
      <div class="card3">
        <img src="https://i.pinimg.com/736x/55/ec/01/55ec010abf9255f63b0082e8fbcd5e33.jpg"/>
        <p>Subscribe to our NewsLetter for more updates</p>
        <Button color='secondary' variant='contained' onClick={()=>{ alert('Thanks for subscribing! watch out for updates in your mail'); }}>Subscribe</Button>
      </div>
   

</div>
<br/>
<br/>
<br/>

<div class="shadow2">
  &nbsp;&nbsp;<img src="https://d8it4huxumps7.cloudfront.net/uploads/images/students/yellow-learn-vector.svg" />
  <p class="pract2">Participate</p><br/><br/><br/>
<h5>Explore all our events</h5>
</div>
<br/>
<br/>



<div class="participate" style={{ position:"absolute",top:"1500px"}}>
<Link to='/Competitions'>
  <div class="comp">
  <img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/2x/external-competitions-dance-flaticons-lineal-color-flat-icons-2.png" alt='text'/><p>COMPETITIONS </p>
  </div></Link>

  <Link to='/Hackathon'>
  <div class="hack">
  <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-hackathon-computer-science-flaticons-flat-flat-icons.png"alt='text'/>
  <p>HACKATHONS</p>
  </div>
  </Link>
 
  <Link to='/Workshop'>
  <div class="work">
  <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-workshop-team-building-flaticons-flat-flat-icons.png" alt='text'/><p>WORKSHOPS</p>
  </div></Link>

  <Link to='/Collegefestival'>
  <div class="clg">
  <img src="https://img.icons8.com/external-flaticons-flat-flat-icons/2x/external-music-festival-vacation-planning-guys-trip-flaticons-flat-flat-icons.png" alt='text'/><p>CULTURALS</p>
  </div>
  </Link>

  <Link to='/Collegefestival'>
  <div class="clg">
    <img src="https://image.shutterstock.com/image-vector/quiz-badge-stamp-megaphone-icon-260nw-541287451.jpg" alt='text'/><p>QUIZZES</p>
  </div>
  </Link>

  <Link to='/Collegefestival'>
  <div class="clg">
  <img src="https://img.icons8.com/fluency/2x/week-view.png" alt='text'/><p>OTHERS</p>
  </div>
  </Link>
  
</div>
<br/>
<br/>
<br/>

<div class="shadow3" style={{position:"absolute",top:"320%", left:"130px"}}>
  &nbsp;&nbsp;<img src="https://d8it4huxumps7.cloudfront.net/uploads/images/students/yellow-learn-vector.svg" />
  <p class="pract3">Rate&nbsp;Us</p>
</div>
<form name="f2" action="showAlert();">
<div class="rate"style={{position:"absolute",top:"320%", left:"600px"}} >
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
    </form>

  <div class="navbar">
    <div class="media2">
        <img src={gmail} alt='text'/>
        <img src={linkedinlogo} alt='text'/>
        <img src={telegram} alt='text'/>
        <img src={youtube} alt='text'/>
        </div>
    </div>
</div>

 

  )
}

export default Newhome
