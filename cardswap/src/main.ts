import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import { Icon } from '@iconify/vue';
import axios from 'axios';
import { useAuthStore } from './stores/auth';

const app = createApp(App);
const pinia = createPinia();

// Primeiro registra o Pinia
app.use(pinia);
app.use(router);
app.component('IconifyIcon', Icon);

// Agora sim podemos usar o store
const auth = useAuthStore();
if (auth.token) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${auth.token}`;
  auth.fetchUser();
}

app.mount('#app');
