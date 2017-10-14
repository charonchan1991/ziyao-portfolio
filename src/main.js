import 'babel-polyfill'

import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App'
import router from './router'

Vue.use(Vuetify)

Vue.config.productionTip = false

const isIE = () => {
  const ua = window.navigator.userAgent
  const msie = ua.indexOf('MSIE ')
  if (msie > 0) {
    // IE 10 or older => return version number
    return true
  } else {
    // IE 11
    const trident = ua.indexOf('Trident/')
    return (trident > 0)
  }
}

/* eslint-disable no-new */
if (isIE()) {
  document.getElementById('unsupported').style.display = 'block'
} else {
  new Vue({
    el: '#app',
    router,
    render: h => h(App)
  })
}
