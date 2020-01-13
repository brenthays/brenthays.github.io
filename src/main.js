import DefaultLayout from '~/layouts/Default.vue'

import BootstrapVue from 'bootstrap-vue'
import './assets/styles/main.scss'

import checkIfMobile from './mixins/checkIfMobile'

export default function (Vue, { router, head, isClient }) {
  Vue.use(BootstrapVue)
  var VueScrollTo = require('vue-scrollto');
  Vue.use(VueScrollTo, {
    duration: 500,
    easing: "ease",
    offset: -55,
  })
  Vue.component('Layout', DefaultLayout)
  Vue.mixin(checkIfMobile)
}
