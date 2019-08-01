import React from 'react';
import ReactDOM from 'react-dom';
import './style/common.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';//处理日期
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

ReactDOM.render(<LocaleProvider locale={zhCN}><App /></LocaleProvider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
