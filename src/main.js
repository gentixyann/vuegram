import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { firestorePlugin } from 'vuefire'
import { auth } from './firebase.js'

Vue.config.productionTip = false
Vue.use(firestorePlugin);


let app;
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
