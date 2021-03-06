/*
入口JS
*/
import Vue from 'vue'
import App from './App.vue'
import Item from './components/Item.vue'

import './base.css'

// 给Vue原型对象添加一个属性
Vue.prototype.m = 1

// 注册全局组件
Vue.component('Item', Item)


/* 只能当前文件有效 */
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: {
    App
  },
  template: '<App />'
})

