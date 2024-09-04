import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import { createRouter, createWebHistory } from 'vue-router';
import PokemonDetails from './components/PokemonDetails.vue';

const routes = [
  { path: '/', component: App },
  { path: '/pokemon/:id', component: PokemonDetails, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});
 
const app = createApp(App);
const pinia = createPinia();
 
app.use(pinia);
app.use(router);
app.mount('#app');

 