import { createApp } from 'vue'
import './style.css'
import { QTimeline } from 'quasar'
import Quasar from 'quasar/src/vue-plugin.js';
import 'quasar/dist/quasar.css'
import App from './App.vue'

const app = createApp(App);
app.use(Quasar, {
    components: { QTimeline },
});

app.mount('#app')
