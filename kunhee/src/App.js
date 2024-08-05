import React from 'react';
import { Route, Routes, NavLink } from 'react-router-dom';
import './App.css';
import MainPageDesktop from './component/Navigation';

// function Home() {
//   return (
//     <div>
//       <h2>PFLOW</h2>
//     </div>
//   );
// }

// function Resume() {
//   return (
//     <div>
//       <h2>이력서 작성</h2>
//     </div>
//   );
// }

// function CompanySearch() {
//   return (
//     <div>
//       <h2>회사 검색</h2>
//     </div>
//   );
// }

// function Login() {
//   return (
//     <div>
//       <h2>Login</h2>
//     </div>
//   );
// }

// function CompanyRecommend() {
//   return (
//     <div>
//       <h2>회사 추천</h2>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div>
//       <header>
//         <ul>
//           <li><NavLink to="/">PFLOW</NavLink></li>
//           <li><NavLink to="/resume">이력서 작성</NavLink></li>
//           <li><NavLink to="/companysearch">회사 검색</NavLink></li>
//           <li><NavLink to="/companyrecommend">회사 추천</NavLink></li>
//           <li><NavLink to="/login">Login</NavLink></li>
//         </ul>
//       </header>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/resume" element={<Resume />} />
//         <Route path="/companysearch" element={<CompanySearch />} />
//         <Route path="/companyrecommend" element={<CompanyRecommend />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/*" element={<div>Not Found</div>} />
//       </Routes>
//     </div>
//   );
// }
function App(){
  return (
    <MainPageDesktop />
  )
}

export default App;
