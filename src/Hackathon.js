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
import { Repeat } from '@material-ui/icons';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';


const theme=createTheme({
    palette:{
      primary:{
      main:'#f1f1f2',
    },
    },
  });

const Hackathon = () => {

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
    <div class="body2" style={{background:"url('https://img.freepik.com/premium-vector/geometric-polygon-background-diamond-wallpaper-elegant-pattern-soft-color_206846-997.jpg?w=2000')",backgroundRepeat:"no-repeat",backgroundSize:"cover"}}>
    
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
     <h6>UPCOMING HACKATHONS </h6>
     <img src={white1} style={{position:"absolute",top:"36%",left:"450px",width:"400px"}}/><br/><br/><br/><br/>
    <h6 style={{position:"absolute", top:"38%", left:"490px", fontSize:"30px"}}>Offline Hackathons</h6>
    <br/><br/><br/><br/>
    <div class="container1">
        

        <div class="card1">
        <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/63930acae9e1c_bitathon.png?d=1280x371" alt='text'/>
        <h4>Bitathon</h4>
        <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"25px", height:"25px"}}/>Goa Institute of Management (GIM)<br/>Goa</p><br/>
        <p><CurrencyRupeeIcon/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>29 days left</p><br/>
        <div class="y" style={{backgroundColor:" rgb(103, 200, 127)",padding:"5px"}}>
        <Link to='/Register2'> <Button color='primary' variant='contained'>Register</Button></Link>
                
        </div>
        <br/>
        </div>

        <div class="card1">
        <img src="https://jithack-2022.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F345ef08b7f424aceae18fc8d9d05634a%2Fassets%2Fcover%2F151.png&w=1440&q=100" alt='text'/>
        <h4>JITHack 2022</h4>
        <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"25px", height:"25px"}}/>Jyothy Institute Of Technology(JIT)<br/>Karnataka</p><br/>
        <p><CurrencyRupeeIcon/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>8 days left</p><br/>
        <div class="x">
        <Link to='/Register2'> <Button color='primary' variant='contained'>Register</Button></Link>
        </div>
        </div>
        <div class="card1">
        <img src="https://techacks.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2Fc4bf626538a645aea8e67809e91f7e37%2Fassets%2Fcover%2F115.png&w=1440&q=100" alt='text'/>
        <h4>TecHacks 3.0</h4>
        <p><img src="https://cdn-icons-png.flaticon.com/512/535/535239.png" alt='text' style={{width:"25px", height:"25px"}}/>Chitkara University<br/>Punjab</p><br/>
        <p><CurrencyRupeeIcon/>Free Registeration</p>
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>17 days left</p><br/>
        <div class="z" style={{backgroundColor:" rgb(31, 125, 207)",padding:"5px"}}>
        <Link to='/Register2'> <Button color='primary' variant='contained'>Register</Button></Link>
        </div>
        </div>
    </div>
    <br/><br/><br/><br/><br/><br/>

    <img src={white1} style={{position:"absolute",top:"160%",left:"450px",width:"400px"}}/><br/><br/>
    <h6 style={{position:"absolute", top:"162%", left:"490px", fontSize:"30px"}}>Online Hackathons</h6><br/><br/>

    
    <div class="container1">
    <div class="card1">
    <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/638dfaee3d871_capture-the-flag.png?d=1280x371" alt='text'/>
        <h4>Capture the Flag</h4>
        <p>Shaastra 2023</p>
        <p><CurrencyRupeeIcon/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>1 month left</p><br/>
        <div class="y" style={{backgroundColor:"rgb(225, 204, 159)",padding:"5px"}}>
        <Link to='/Register2'> <Button color='primary' variant='contained'>Register</Button></Link>
                </div>
    </div>



    <div class="card1">
    <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/6391a8f5a9636_pyhack-22-enhancing-productivity-one-program-at-a-time.png?d=1280x371" alt='text'/>
        <h4>Py.Hack ’22</h4>
        <p>Cohesive</p>
        <p><CurrencyRupeeIcon style={{position:"relative", top:"3px"}}/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>18 days left</p><br/>
        <div class="z" style={{backgroundColor:" rgb(202, 104, 77)",padding:"5px"}}>
        <Link to='/Register2'> <Button color='primary' variant='contained'>Register</Button></Link>
                </div>
                <br/>
                
    </div>

    <div class="card1">
    <img src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/banner/638db4e2400f8_tata-crucible-hackathon-2022.jpeg?d=1280x371" alt='text'/>
        <h4>Tata Crucible Hackathon 2022</h4>
        <p>Tata</p>
        <p><CurrencyRupeeIcon style={{position:"relative", top:"3px"}}/>Free Registeration</p>
        
        <p><AccessTimeIcon style={{position:"relative", top:"3px"}}/>22 days left</p><br/>
        <div class="x" style={{backgroundColor:" rgb(208, 195, 75)",padding:"5px"}}>
        <Link to='/Register2'> <Button color='primary' variant='contained'>Register</Button></Link>
                </div>
    </div>
<br/>
    </div><br/><br/><br/><br/>

    
    <div class="media2">
        <img src={gmail} alt='text'/>
        <img src={linkedinlogo} alt='text'/>
        <img src={telegram} alt='text'/>
        <img src={youtube} alt='text'/>
        </div>
    
    

</div>
  )

}

export default Hackathon
