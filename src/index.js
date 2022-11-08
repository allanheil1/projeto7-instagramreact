import React from 'react';
import ReactDOM from 'react-dom';
import { NavBar } from './Components/NavBar';
import { MainContainer } from './Components/Corpo';
import '../src/style.css'

function App(){
  return(
    <div>
      <NavBar/>
      <MainContainer/>
    </div>
  )
}

ReactDOM.render(App(), document.querySelector(".root"));