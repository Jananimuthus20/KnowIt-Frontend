import React from 'react';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import Competitions from './Competitions.js';
import Hackathon from './Hackathon.js';
import Workshop from './Workshop.js';
import Collegefestival from './Collegefestival.js';
import Newhome from './Newhome.js';
import Register1 from './Register1.js';
import Register2 from './Register2.js';
/*import Form from './Form.js';
import Flipcard from './Flipcard';*/


function App() {
  return (
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/Competitions' element={<Competitions/>}/>
      <Route path='/Hackathon' element={<Hackathon/>}/>
      <Route path='/Workshop' element={<Workshop/>}/>
      <Route path='/Collegefestival' element={<Collegefestival/>}/>
      <Route path='/Newhome' element={<Newhome/>}/>
      <Route path='/Register1' element={<Register1/>}/>
      <Route path='/Register2' element={<Register2/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
