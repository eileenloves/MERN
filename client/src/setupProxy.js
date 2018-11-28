// file name: setupProxy.js 로 꼭 설정해야 동작함
const proxy = require('http-proxy-middleware');

module.exports = (app) => {
  // 내가 3000port에 있지만 5000port로 보내라는 proxy
  app.use(proxy('/auth/google',{target: 'http://localhost:5000'}))
  app.use(proxy('/api',{target: 'http://localhost:5000'}))
}