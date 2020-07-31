import Vue from 'vue'
import App from './App.vue'
import store from './store'
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faSpinner } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as fb from 'firebase'
// import AsyncComputed from 'vue-async-computed'

// Vue.use(AsyncComputed)

// library.add(faSpinner)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  created(){    
    fb.initializeApp({
        apiKey: 'AIzaSyAhtvwWknBpjAzi2EODTjPJvENKPCowHTs',
        authDomain: 'vue-folders.firebaseapp.com',
        databaseURL: 'https://vue-folders.firebaseio.com',
        projectId: 'vue-folders',
        storageBucket: 'vue-folders.appspot.com',
        messagingSenderId: '1042520052478',
        appId: '1:1042520052478:web:8c68c1f0d62668b1d18baf'
      }
    );
    this.$store.dispatch('fetchFolders');
    this.$store.dispatch('fetchModalInfo')
  }
}).$mount('#app')
