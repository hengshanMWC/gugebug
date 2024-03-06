import { createApp } from 'vue'
import { router } from './routes'

// import 'normalize.css/normalize.css'
import 'uno.css'
import App from './App'

const app = createApp(App)
app.use(router)

app.mount('#app')
