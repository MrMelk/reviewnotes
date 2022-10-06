import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import "./assets/assets.css";

loadFonts()

const pinia = createPinia()

createApp(App)
  .use(vuetify)
  .use(pinia)
  .mount('#app')
 