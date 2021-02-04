import {createApp} from 'vue';
import VuePlyr from 'vue-plyr';
import 'vue-plyr/dist/vue-plyr.css';
import reveal from './plugins/reveal.js';
import App from './App.vue';

createApp(App).use(VuePlyr, {plyr: {}}).use(reveal).mount('#app');
