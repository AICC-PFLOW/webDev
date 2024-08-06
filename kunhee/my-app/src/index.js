// index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // 변경된 임포트
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';

// 루트 생성
const root = ReactDOM.createRoot(document.getElementById('root'));

// 앱 렌더링
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

