// src/resume/Resume1.js
import React from 'react';
import './Resume.css';
import { Link } from 'react-router-dom';

const Resume1 = () => {
  return (
    <div className="Resume">
      <h1>Resume Page1</h1>
      <p>Let's make your Resume</p>
      <p>이력서 탬플릿을 선택하는 섹션입니다. 진행 1단계입니다.</p>
      <div className="Btn-group">
      <Link to="/resume/Resume2" className='Page-btn'>NEXT</Link>
      </div>
    </div>
  );
};

export default Resume1;
