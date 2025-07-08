
import './App.css';


import React, {useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Bookmark from "./components/Bookmark";

 
import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

const App=()=>{
 const pageSize=5;

 const [progress, setProgress] = useState(0);
 const [darkMode, setDarkMode] = useState(false);
 const toggleMode = () => {
  setDarkMode(!darkMode);
};
 
    return (
     <div className={darkMode ? "dark-mode app-wrapper" : "app-wrapper"}>
 
        <Router>
      <Navbar darkMode={darkMode}  toggleMode={toggleMode}  />
       <LoadingBar height={3} color="#f11946" progress={progress}/>
      
        <Routes>
        <Route exact path="/" element={<News setProgress={setProgress}   key="general" pageSize={pageSize} country="us" category="general"/>}></Route>
        <Route exact path="/business" element={<News setProgress={setProgress}   key="business" pageSize={pageSize} country="us" category="business"/>}></Route>
        <Route exact path="/entertainment" element={<News setProgress={setProgress}   key="entertainment" pageSize={pageSize} country="us" category="entertainment"/>}></Route>
        <Route exact path="/sports" element={<News setProgress={setProgress}  pageSize={pageSize} key="sports" country="us" category="sports"/>}></Route>
        <Route exact path="/science" element={<News setProgress={setProgress}  pageSize={pageSize} key="science" country="us" category="science"/>}></Route>
        <Route exact path="/health" element={<News setProgress={setProgress}  pageSize={pageSize} key="health" country="us" category="health"/>}></Route>
        <Route exact path="/technology" element={<News setProgress={setProgress}  pageSize={pageSize} key="technology" country="us" category="technology"/>}></Route>
        <Route exact path="/bookmark" element={<Bookmark />}></Route> 
        
        </Routes>
      </Router>
      </div>
   )
  }

export default App;