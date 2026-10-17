import { createApp } from 'vue'
import './style.css'
import { QAvatar, QBtn, QTimeline, QTimelineEntry, QToolbar, QToolbarTitle } from 'quasar'
// @ts-ignore’
import Quasar from 'quasar/src/vue-plugin.js';
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'
import App from './App.vue'

const app = createApp(App);
app.use(Quasar, {
    components: { QAvatar, QBtn, QTimeline, QTimelineEntry, QToolbar, QToolbarTitle },
});

app.mount('#app')
