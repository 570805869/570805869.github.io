---
title: iView-UI组件-api&loading
date: 2020-09-27
categories:
 - iView-UI
tags:
 - iView-UI
---

> 这篇主要是记录在vue项目中结合iview中的loading组件，实现通用发送请求时页面展示loading组件。

这篇笔记适用与后台有请求存在的项目，在项目中统一处理api的js文件中，我们可以这样：<br >
以公司的项目为例，该项目是基于vue&iview搭建的，在同一处理api的文件中，我们可以这样写：<br>
在axios.js(根据自己项目定义，统一处理请求响应的文件)：<br>

第一步：
```JS
// 全局定义好变量
let loadingCount = 0; // 正在请求的接口数量
let toastLoading; //打开的loading

/**
 * 全局注册loading,开始及结束事件
 */
const loading = {
    startLoading () {
        if (loadingCount === 0) {
            toastLoading = toast.loading( {
                loadingType: 'spinner',
                duration: 0,
                forbidClick: true,
                position: 'middle',
                message: '加载中...',
                size: 10
            } );
            loadingCount += 1;
        }
    },
    closeLoading() {
        if ( loadingCount <= 0 ) {
            return;
        }
        loadingCount = loadingCount - 1;
        if ( loadingCount === 0 ) {
            toastLoading && toastLoading.clear();
        }
    }
}
```

在请求拦截部分(instance.interceptors.request.use)：

```js
在return的config中单独处理，在请求上设置一个属性
const method = config.method.toLowerCase() === 'post' ? 'data' : 'params';
config[method] = config[method] || {};
if ( config[method].showLoading && !config.showLoading ) {
    loading.startLoading();
    config.showLoading = true;
    delete config[method].showLoading;
}
```

在响应拦截部分(instance.interceptors.response.use):
```js
res.config.showLoading && loading.closeLoading(); // 判断属性，并关闭
```

附上两版处理api请求代码整js代码<br>

版本1:（住宿管理）
```js
import axios from 'axios'
import qs from 'qs'
import toast from 'vant/lib/toast';
const BASE_UTL = process.env.NODE_ENV === 'development' ? "测试地址**" : "/"
let loadingCount = 0; // 正在请求的接口数量
let toastLoading; //打开的loading
class HttpRequest {
    constructor(baseUrl = baseURL) {
        this.baseUrl = baseUrl
        this.queue = {}
    }
    getInsideConfig() {
        const config = {
            baseURL: this.baseUrl,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            data: {},
            params: {},
            withCredentials: false, // 默认的
        }
        return config
    }
    destroy(url) {
        delete this.queue[url]
        if (!Object.keys(this.queue).length) {
            // Spin.hide()
        }
    }
    interceptors(instance, url) {
        // 请求拦截
        instance.interceptors.request.use(config => {
            config.showLoading && loading.startLoading();
            this.queue[url] = true
            return HandleCommonParam(config);
        }, error => {
            return Promise.reject(error)
        })
        // 响应拦截
        instance.interceptors.response.use(res => {
            this.destroy(url)
            const {
                data,
                status
            } = res
            if (status === 200) {
                // 判断是否登录
                if (res.data.isValidCodeLogin === false) {
                    // 未登录，跳转至登录
                    console.log("未登录，跳转至登录")
                    window.location.href = BASE_UTL + "/education/zsgl"
                }
            } else {
                return {
                    code: -2,
                    message: '错误error：' + status
                }
            }
            res.config.showLoading && loading.closeLoading();
            return data
        }, error => {
            this.destroy(url)
            errorHandle(error)
            return Promise.reject(error)
        })
    }
    request(options) {
        const instance = axios.create({
            timeout: 10000
        })
        options = Object.assign(this.getInsideConfig(), options)
        this.interceptors(instance, options.url)
        return instance(options)
    }
}

/**
 * 接口error处理
 */
const errorHandle = error => {
    let apiName = '';
    let logCode = '';
    // if ( uuid.getXDFUUID() !== '' ) {
    //     logCode = uuid.getXDFUUID().slice( 0, 8 );
    //     logCode = '[' + logCode + ']';
    // }
    try {
        apiName = error.config.url.replace( /http:\/\/[^\/]+/, '' );
    }
    catch (err) {
    }
    if ( error.response ) {
        // 接口错误
        toast( '(' + apiName + ') ' + error.response.status + '-服务器内部错误' + logCode );
        return;
    } else if ( error.request ) {
        if ( error.message && error.message.includes( 'timeout' ) ) { //接口超时
            toast( '(' + apiName + ') ' + Math.round( error.request.timeout / 1000 ) + 's请求超时！' + logCode );
            /*window.$mvvm.showError({
             type: showCode,
             msg: errMsg+logCode
             });用于超时阻断*/
            return;
        } else if ( error.message && error.message.match( /network/i ) ) { //网络异常
            toast( '网络异常，请重试!' + logCode );
        } else {//其他错误
            toast( apiName + 'error!' + logCode );
        }
    } else {//其他错误
        toast( '服务器内部错误!' + logCode );
    }
};

/**
 * 全局注册loading
 */
const loading = {
    startLoading () {
        if (loadingCount === 0) {
            toastLoading = toast.loading( {
                loadingType: 'spinner',
                duration: 0,
                forbidClick: true,
                position: 'middle',
                message: '加载中...',
                size: 10
            } );
            loadingCount += 1;
        }
    },
    closeLoading() {
        if ( loadingCount <= 0 ) {
            return;
        }
        loadingCount = loadingCount - 1;
        if ( loadingCount === 0 ) {
            toastLoading && toastLoading.clear();
        }
    }
}

/**
 * 处理发送请求时参数
 */
const HandleCommonParam = (config) => {
    if (config.method === 'post') {
        config.data = qs.stringify(config.data)
    }
    const method = config.method.toLowerCase() === 'post' ? 'data' : 'params';
    config[method] = config[method] || {};
    if ( config[method].showLoading && !config.showLoading ) {
        loading.startLoading();
        config.showLoading = true;
        delete config[method].showLoading;
    }
    return config
}

export default HttpRequest

```

版本2(教师端)：
```js
import axios from 'axios';
import '@/styles/commonLayer.scss';
import qs from 'qs';
import {
  MessageBox,
  Message,
} from 'element-ui';
import store from '@/store';
import {
  TOKEN,
  getToken,
  removeStore,
} from '@/utils/auth';
import { regExpUrl } from '@/utils/index';
import router from '@/router';

const baseURL = location.href.indexOf('wecode123') !== -1 ? 'https://saasapi.wecode123.com' : 'https://saas.api.codeus.vip';
const api = axios.create({
  // baseURL: process.env.NODE_ENV === 'development' ? false : baseURL,
  baseURL: baseURL,
  withCredentials: false, // 携带cookies
});
let MessageShowFlag = true;

const postApiUrlAry = [
  '/coach-manager/api/upload/image',
  '/channel/enroll/readExcel',
  '/ai/img/upload',
  '/aiteach/clazz/save',
  '/aiteach/clazz/update',
  '/aiteach/clazz/status/update',
  '/aiteach/clazz/admin/save',
  '/aiteach/clazz/admin/update',
  '/aiteach/clazz/student/add',
  '/aiteach/clazz/student/delete',
  '/aiteach/student/doStatus',
  '/aiteach/poster/doStatus',
  '/aiteach/appointment/followlog',
  '/aiteach/poster/delete',
  '/aiteach/poster/upload-qrCode',
  '/aiteach/poster/save',
  '/auth/preauth/check',
  '/aiteach/organ/logo',
  '/aiteach/organ/info',
  '/aiteach/poster/logo/upload',
  '/aiteach/organ/theme/update',
  '/aiteach/subscribe-customer/save',
  '/aiteach/appointment/followlog-new',
  '/aiteach/student/exp/join/clazz',
  '/aiteach/student/exp/update/check',
];

api.interceptors.request.use(
  (config) => {
    config.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
    if (config.method.toLowerCase() === 'post') {
      if (new RegExp('/auth/').test(config.url) || new RegExp('/user/user/change/').test(config.url) || config.url.indexOf('aiteach/freestyle/checkCode') >= 0 || config.url.indexOf('cloud/ai/asr') >= 0 || config.url.indexOf('/freestyle/exec') >=0) {
        config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
        config.data = qs.stringify(config.data);
      } else if (regExpUrl(postApiUrlAry, config.url)) {
        config.headers.post['Content-Type'] = 'multipart/form-data';
      } else {
        config.data = JSON.stringify(config.data);
      }
    }
    if (store.getters.token) {
      config.headers.Authorization = getToken(TOKEN);
    }
    return config;
  },
  error => Promise.reject(error),
);

api.interceptors.response.use(
  (response) => {
    const res = response.data;
    const config = response.config;
    const isLogin = new RegExp('/auth/login').test(config.url);
    if (response.status === 200) {
      if (res.status === 0 || (isLogin && typeof res.access_token === 'string')) {
        return res; // 返回接口有效信息
      } else if ((res.status === 403 && res.message === 'Access Denied') || (res.status === 401 && res.message === 'Unauthorized') || (res.status === 403 && res.message === 'Force Out')){
        let lastSymbol = document.referrer.indexOf('class.edu.codeus.vip') === -1 && document.referrer.indexOf('c.wecode123.com') === -1
        if ((res.status === 403 && res.message === 'Force Out') && lastSymbol) {
          if (MessageShowFlag) {
            MessageShowFlag = false;
            MessageBox.alert('该账号已在其他地方登录，您已退出!', '登录异常', {
              confirmButtonText: '确定',
              customClass: 'loginMessageBox',
              showClose: false,
              callback: action => {
                MessageShowFlag = true;
                removeStore();
                location.href = `${location.origin}${location.pathname}#/login`
                window.location.reload();
              }
            });
          }
        } else {
          removeStore()
          router.push({
            path: '/login',
          });
        }
      } else if(res.status === 4031){
        router.push({ path: '/qrcode' });
      } else if (res.status !== 0) {
        const cheackPre = new RegExp('/auth/preauth/check').test(config.url);
        if (res.message && !(cheackPre && res.status === 150) ) {
          Message({
            message: res.message,
            type: 'error',
            duration: 3 * 1000,
          });
        }
        if (isLogin) { // 登录返回401：用户不存在|账号或密码错误
          return Promise.reject(new Error(res.message));
        }
        return Promise.resolve(res);
      }
    }
  },
  (error) => {
    if (error.message === 'Network Error') {
      Message({
        message: '网络异常请稍后！',
        type: 'error',
        duration: 3 * 1000,
      });
    } else if (error.message.indexOf('401') > 0) {
      Message({
        message: '401 Error',
        type: 'error',
        duration: 5 * 1000,
      });
    } else if (error.message.indexOf('500') > 0) {
      Message({
        message: 'Internal Server Error',
        type: 'error',
        duration: 5 * 1000,
      });
    }
    return Promise.reject(new Error(error.message));
  },
);

const getBuffer = (url, params) => api.get(url, { params, responseType: 'arraybuffer' });
const get = (url, params) => api.get(url, { params });
const post = (url, data) => api.post(url, data);
const put = (url, data) => api.put(url, data);
const del = (url, data) => api.delete(url, data);
const tts =`${baseURL}`;

export { get, post, put, del, getBuffer, tts };

```


