import React, { useState } from 'react';
import './Chatbot.css'; // 별도의 스타일 파일을 가져옵니다.

const Chatbot = () => {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    // 메시지 전송 로직 추가
    console.log('Message sent:', message);
    setMessage('');
  };

  return (
    <div className='rectangle'>
      <div className='message-panel'>
        <div className='top-content'>
          <div className='divider' />
        </div>
        <div className='message-box'>
          <div className='iconsax'>
            <div className='vector-5' />
          </div>
          <div className='frame'>
            <input 
              className='frame-input' 
              value={message} 
              onChange={handleInputChange} 
              placeholder='Type a message' 
            />
            <span className='message-text'></span>
            <div className='iconsax-6' onClick={handleSendMessage}>
              <div className='vector-7' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
