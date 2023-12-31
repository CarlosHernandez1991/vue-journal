import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { styles } from '@/scss/styles.scss'
import store from './store'


createApp(App)
    .use(store)
    .use(router)
    .use(styles)
    .mount('#app')
