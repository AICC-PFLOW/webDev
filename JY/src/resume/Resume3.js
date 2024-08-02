// src/resume/Resume3.js
import React from 'react';
import './Resume.css';
import { Link } from 'react-router-dom';


const Resume3 = () => {
  return (
    <div className="Resume">
      <h1>Resume Page3</h1>
      <p>Let's make your Resume</p>
      <p>이력서 기술정보를 입력하는 섹션입니다. 진행 3단계입니다.</p>
      <div className="Btn-group">
      <Link to="/resume/Resume2" className='Page-btn'>BACK</Link>
      <Link to="/resume/Resume4" className='Page-btn'>NEXT</Link>
      </div>
    </div>
    
  );
};

export default Resume3;
