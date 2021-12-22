import { createApp } from 'vue'
import Toast from "vue-toastification";
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/main.scss'
import "vue-toastification/dist/index.css";
createApp(App).use(store).use(router).use(Toast).mount('#app')
