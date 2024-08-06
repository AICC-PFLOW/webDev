import React from 'react';
import './index.css';

function Resume() {
  return (
    <div className='hero-section'>
      <div className='block-5'>
        <div className='heading'>
          <div className='text-block'>
            <span className='resume-helper'>이력서 작성 도우미</span>
            <span className='time-saving'>
              이력서 쓰는데 시간 버리지 말자! 글을 못써도! 단어가 생각이
              안나도!
              <br />
              AI로 발견하는 나만의 취업 강점 찾기!
            </span>
          </div>
          <button className='btn-free-trial'>
            <span className='get-started'>Get started</span>
            <div className='group-6' />
          </button>
        </div>
        <div className='image-container'>
          <div className='asset' />
        </div>
      </div>
    </div>
  );
}

export default Resume;
