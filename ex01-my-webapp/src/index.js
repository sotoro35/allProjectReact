import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// MyApp.js 문서의 MyApp 클래스를 import 하기
import MyApp from './MyApp.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>

  // 나만의 컴포넌트 만들기.. 처음 실행되는 Component로 MyApp을 지정.
  <MyApp></MyApp>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(); //앱 측정 도구
