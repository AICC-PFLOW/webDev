import './App.css';
import './components/components.css';
import './resume/Resume.css';
import React from "react";
import SideBar from "./components/SideBar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Resume1 from "./resume/Resume1";
import Resume2 from "./resume/Resume2";
import Resume3 from "./resume/Resume3";
import Resume4 from "./resume/Resume4";
import Resume5 from "./resume/Resume5";


const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="Container">
          <SideBar />
          <Routes>
            <Route path="/" element={<Resume1 />} />
            <Route path="/resume/Resume2" element={<Resume2 />} />
            <Route path="/resume/Resume3" element={<Resume3 />} />
            <Route path="/resume/Resume4" element={<Resume4 />} />
            <Route path="/resume/Resume5" element={<Resume5 />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
