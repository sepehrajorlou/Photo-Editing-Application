import { createApp } from 'vue'
import './style.css'
import App from './App.vue'


import drag from "v-drag"




import './style.css'


import router from './router/router.js'

createApp(App).use(router).use(drag).mount('#app')
