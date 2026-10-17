import { createApp } from 'vue'
import './style.css'
import { QBtn, QTimeline, QToolbar, QToolbarTitle } from 'quasar'
import Quasar from 'quasar/src/vue-plugin.js';
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'
import App from './App.vue'

const app = createApp(App);
app.use(Quasar, {
    components: { QBtn, QTimeline, QToolbar, QToolbarTitle },
});

app.mount('#app')
