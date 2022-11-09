import React from 'react';
import NavBar  from './Components/NavBar';
import Corpo  from './Components/Corpo';
import BottomMenu from './Components/BottomMenu';
import '../src/style.css'

export default function App(){
  return(
    <body>
      <NavBar/> 
      <Corpo/>
      <BottomMenu/>
    </body>
  );
}