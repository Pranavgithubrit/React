import Navbar from './Component/Navbar'
import {HashRouter} from 'react-router-dom'
import TextForm from './Component/TextForm'
import About from './Component/About'
import React,{useState} from 'react'
import './App.css'
// import Alert from './Component/Alert'
import {
  HashRouter as Router,
  Switch,
  Route
} from "react-router-dom";



function App()
{
  const[mode,setMode]=useState('light');
  const[text,setText]=useState('Enable Dark Mode');
  // const[alert,setAlert]=useState(null);
  // const showAlert=(message,type)=>
  // {
  //   setAlert({
  //     msg:message,
  //     typ:type
  //   })
  // }
  
      
    
  const toggleMode=()=>
  {
    if(mode==='light')
    {
    setMode('dark')
    setText('Enable light mode')
    document.body.style.backgroundColor='grey';
    document.body.style.color='white';
    // showAlert("Dark Mode has been enabled","success");
    }
    else
    {
    setMode('light')
    setText('Enable Dark Mode');
    document.body.style.backgroundColor='white';
    document.body.style.color='black';
    // showAlert("Light Mode has been enabled","success");
  }
}
  return(
    <>
    <HashRouter>
      <Route>
    <Router>
    <Navbar title="TextUtils" about="About Us" mode={mode} text={text} toggleMode={toggleMode}/>
    {/* <Alert alert={alert}/> */}
    <div className="container my-3">
    <Switch>
          <Route exact path="/about">
            <About mode={mode} toggleMode={toggleMode}/>
          </Route>
          <Route exact path="/">
          <TextForm heading="Enter the text to Analyse" mode={mode}/>
          </Route>
        </Switch>
    </div>
    </Router>
    </Route>
    </HashRouter>
  </>
  )
}
export default App