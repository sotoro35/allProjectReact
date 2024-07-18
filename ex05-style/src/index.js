import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />

    <h3>이건 index.js의 h3요소</h3>
    <h4>이것도 index.js의 h4요소</h4>
    {/* <div className={homeStyle.bb}>모듈 클래스 선택자 연습</div> */}
    
    <nav>
        <ul>
          <li><a>aaa</a></li>
          <li><a>aaa</a></li>
          <li><a>aaa</a></li>
        </ul>
    </nav>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
