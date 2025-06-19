import { createApp } from 'vue'
import App from './App.vue'

// Global styles
import './style.css'

// Optional: Global plugins, e.g., router, pinia, etc.
// import router from './router'
// import store from './store'

const app = createApp(App)

// Register global plugins here
// app.use(router)
// app.use(store)

app.mount('#app')