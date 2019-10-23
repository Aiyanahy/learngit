import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { LocaleProvider } from 'antd';
import { Provider } from 'mobx-react';
import { CookiesProvider } from 'react-cookie';
import zh_CN from 'antd/lib/locale-provider/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';
import store from 'store/Store'

moment.locale('zh-cn');

ReactDOM.render(
  <LocaleProvider locale={zh_CN}>
    <CookiesProvider>
      <Provider {...store}>
        <App />
      </Provider>
    </CookiesProvider>
  </LocaleProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
