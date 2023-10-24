import React from 'react'
import {Link} from 'react-router-dom'
import './App.css';

const Home = () => {
  return (
    <div className='Home'>
     <Link to="/NewHome">HomePage</Link>
     <Link to="/Login">Login</Link>
     <Link to="/Competitions">Competitions </Link>
     <Link to="/Hackathon">Hackathon</Link>
     <Link to="/Workshop">Workshops</Link>
     <Link to="/Collegefestival">College Festivals</Link>
     <Link to="/Register1">Registeration</Link>
     <Link to="/Register2">Registeration</Link>
    </div>
  )
}

export default Home
