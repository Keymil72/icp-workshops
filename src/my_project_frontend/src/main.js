import { createPinia } from 'pinia';
import { createApp } from 'vue';
import './index.scss';
import './output.scss';
import App from './App.vue';

createApp(App).use(createPinia()).mount('#app');
