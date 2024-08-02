// src/resume/Resume2.js
import React from 'react';
import './Resume.css';
import { Link } from 'react-router-dom';


const Resume2 = () => {
  return (
    <div className="Resume">
      <h1>Resume Page2</h1>
      <p>Let's make your Resume</p>
      <p>이력서 기본정보를 입력하는 섹션입니다. 진행 2단계입니다.</p>
      <div className="Btn-group">
      <Link to="/" className='Page-btn'>BACK</Link>
      <Link to="/resume/Resume3" className='Page-btn'>NEXT</Link>
      </div>
    </div>
  );
};

export default Resume2;
