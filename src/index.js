import React from 'react';
import ReactDOM from 'react-dom';
import './style/common.less';
import App from './router';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';//处理日期
import 'moment/locale/zh-cn';

moment.locale('zh-cn');

ReactDOM.render(<LocaleProvider locale={zhCN}><App /></LocaleProvider>, document.getElementById('root'));

