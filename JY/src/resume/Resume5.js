// src/resume/Resume5.js
import React from 'react';
import './Resume.css';
import { Link } from 'react-router-dom';



const Resume5 = () => {
  return (
    <div className="Resume">
      <h1>Resume Page5</h1>
      <p>Let's make your Resume</p>
      <p>작성된 이력서 프리뷰 최종단계입니다.</p>
      <div className="Btn-group">
      <Link to="/resume/Resume4" className='Page-btn'>BACK</Link>
      <Link to="/resume/Resume5" className='Page-btn'>FINISH</Link>
      </div>
    </div>
  );
};

export default Resume5;
