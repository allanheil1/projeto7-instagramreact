import React from 'react';
import NavBar  from './Components/NavBar';
import Corpo  from './Components/Corpo';
import '../src/style.css'

export default function App(){
  return(
    <div>
      <NavBar/> 
      <Corpo/>
    </div>
  );
}