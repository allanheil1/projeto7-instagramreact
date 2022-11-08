import React from 'react';
import ReactDOM from 'react-dom';
import NavBar  from './Components/NavBar';
import Corpo  from './Components/Corpo';
import '../src/style.css'

function App(){
  return(
    <div>
      <NavBar/> 
      <Corpo/>
    </div>
  )
}

ReactDOM.render(App(), document.querySelector(".root"));