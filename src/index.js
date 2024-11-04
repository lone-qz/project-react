// 京东移动端样式引入   京东置顶 电梯层
import '@nutui/nutui-react/dist/style.css'
// 安装了京东、ad、vant移动端    再安装一个腾讯pc端
// 腾讯pc端的样式引入
import 'tdesign-react/es/style/index.css'; // 少量公共样式
// 引入动画'animate.css';
import 'animate.css';
import router from './router';
import store from './store';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
// index页面内容
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <Provider store={store}>
     <RouterProvider router={router} />
   </Provider>
  </React.StrictMode>
);

