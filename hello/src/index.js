import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// index.html에 있는 id가 'root'인 요소를 찾아와서 가상 DOM을 이용하여 화면을 그려냄..
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // StrictMode : 앱의 잠재적인 문제를 알아내기 위한 도구. UI는 없고 자손요소들의 검사와 경고를 활성화 하는 기능
  // 앱을 두번 실행한다... 
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
  <App/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
