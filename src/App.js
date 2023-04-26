import './App.css';
import React, { useState } from 'react'
import Navbar from './components/Nav.js'
import TextBox from './components/TextBox.js';

function App() {
let [mode,setMode] = useState('Light Mode');
let [color,setColor] = useState('black');
let [bgcolor,setBGcolor] = useState('#E5EDF1');

const toggleMode = ()=>{
  if (mode === 'Light Mode'){
    setMode('Dark Mode');
    document.getElementsByClassName('body')[0].style.backgroundColor = '#2e2929';
    document.getElementsByClassName('navbar')[0].style.backgroundColor = '#036433';
    document.getElementsByClassName('body')[0].style.color = 'white';
    setColor('white');
    setBGcolor('#595454');
  }else{
    setMode('Light Mode');
    document.getElementsByClassName('body')[0].style.backgroundColor = '#fffff0';
    document.getElementsByClassName('navbar')[0].style.backgroundColor = '#009B4D';
    document.getElementsByClassName('body')[0].style.color = 'black';
    setColor('black');
    setBGcolor('#E5EDF1');
  }
  console.log("Done Compilation");
}
  return(
    <>
      <Navbar mode={mode} toggleMode={toggleMode}/>
      <body className="body" style={{backgroundColor: 'ivory'}}>
        <div className="intro container"><br/>
          Welcome to my first React Website.
        </div>
        <TextBox title="Enter your Text for conversion." color={color} bgcolor={bgcolor}/>
      </body>
    </>
  );
}

export default App;
