import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'; // App 컴포넌트의 경로가 올바른지 확인하세요.
import './index.css'; // 필요한 경우 스타일시트를 import하세요.

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
