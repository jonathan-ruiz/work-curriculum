import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

// Import global styles
import '@/assets/styles/main.css'

// Create app instance
const app = createApp(App)

// Install Pinia
const pinia = createPinia()
app.use(pinia)

// Mount app
app.mount('#app')