//React: 框架核心包
// ReactDOM: 专门做渲染


import React from 'react';
import ReactDOM from 'react-dom/client';
// 全局样式
import './index.css';
// 引入根组件
import App from './App';

// 渲染根组件app 到一个id为root的dom节点上
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
