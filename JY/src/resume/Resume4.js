// src/resume/Resume4.js
import React from 'react';
import './Resume.css';
import { Link } from 'react-router-dom';



const Resume4 = () => {
  return (
    <div className="Resume">
      <h1>Resume Page4</h1>
      <p>Let's make your Resume</p>
      <p>이력서 자기소개 작성 및 문구추천을 위한 섹션입니다. 진행 4단계입니다.</p>
      <div className="Btn-group">
      <Link to="/resume/Resume3" className='Page-btn'>BACK</Link>
      <Link to="/resume/Resume5" className='Page-btn'>NEXT</Link>
      </div>
    </div>
  );
};

export default Resume4;
