import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';

function Company() {
  const navigate = useNavigate();

  const handleChatbotNavigation = () => {
    navigate('/chatbot');
  };

  return (
    <div className='work-management'>
      <div className='block-7'>
        <div className='content'>
          <div className='headline'>
            <div className='text-block-8'>
              <div className='element' />
              <span className='company-recommendation-9'>회사 추천</span>
              <span className='chatbot-company'>
                챗봇 AI로 찾는 나를 위한 회사!
              </span>
            </div>
            <button className='btn-get-started' onClick={handleChatbotNavigation}>
              <span className='get-started-a'>Get Started</span>
              <div className='icon'>
                <div className='group-b' />
              </div>
            </button>
          </div>
          <div className="image-container-c" />
        </div>
        <div className='content-d'>
          <div className='work-together-image'>
            <div className='ellipse' />
            <div className='group-e'>
              <div className='ellipse-f' />
            </div>
            <div className='group-10'>
              <div className='ellipse-11' />
            </div>
            <div className='group-12' />
            <div className='ellipse-13' />
            <div className='group-14'>
              <div className='logo-icon-15'>
                <div className='group-16'>
                  <div className='group-17'>
                    <div className='vector-18' />
                    <div className='vector-19' />
                  </div>
                  <div className='vector-1a' />
                </div>
              </div>
              <div className='rectangle' />
            </div>
            <div className='group-1b'>
              <div className='ellipse-1c' />
            </div>
            <div className='group-1d'>
              <div className='ellipse-1e' />
            </div>
            <div className='group-1f'>
              <div className='ellipse-20' />
            </div>
            <div className='group-21' />
            <div className='group-22'>
              <div className='ellipse-23' />
            </div>
            <div className='group-24'>
              <div className='ellipse-25' />
            </div>
          </div>
          <div className='headline-26'>
            <div className='text-block-27'>
              <div className='element-28' />
              <span className='company-search-29'>회사 검색</span>
              <span className='chatbot-find-company'>
                챗봇으로 내가 원하는 조건에 맞는 회사 찾기!
                <br />
              </span>
            </div>
            <button className='btn-get-started-2a' onClick={handleChatbotNavigation}>
              <span className='get-start'>Get Start</span>
              <div className='icon-2b'>
                <div className='group-2c' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
