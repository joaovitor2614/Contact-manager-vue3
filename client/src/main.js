import { createApp } from 'vue'
import Toast from "vue-toastification";
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import './styles/main.scss';
import "vue-toastification/dist/index.css";
import { loadFonts } from './plugins/webfontloader'
import 'material-design-icons-iconfont/dist/material-design-icons.css'


loadFonts()

createApp(App)
  .use(router)
  .use(store)
  .use(vuetify)
  .use(Toast)
  .mount('#app')
