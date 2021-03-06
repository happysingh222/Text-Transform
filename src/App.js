// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/Textform";
import React, { useState } from 'react';
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";


// let name = "Happy";
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);
  
  const showAlert = (message, type)=>{
     setAlert({
       msg: message,
       type: type
     })
     setTimeout(() =>
     {
       setAlert(null);
     },2000);
      }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode has been enabled", "success");
      // document.title = 'Textutils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Textutills is Amazing Mode';
      // },2000);
      // setInterval(() => {
      //   document.title = 'Install Textutills Now';
      // },1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      // document.title = 'Textutils - Light Mode';
    }
  }

  return ( 
    <>
    {/* <Navbar title="Textutils" aboutText="About Textutils" /> */}
    {/* <Navbar /> */}
    <Router>
    <Navbar title="Text-Transform" mode={mode}  toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode}/>
          </Route>
          <Route exact path="/">
          <TextForm showAlert={showAlert} heading="Try Text-Transform - word counter, character counter, remove extra spaces" mode={mode}  />
          </Route>
     </Switch>
    </div>
    </Router>
    
    </>
  );
}

export default App;
