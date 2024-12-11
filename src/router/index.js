import { createWebHistory, createRouter } from 'vue-router'
import RegisterView from '../views/RegisterView.vue';
import LoginView from '../views/LoginView.vue';
import MoviesView from '../views/MoviesView.vue';
import HomeView from '../views/HomeView.vue';
import DetailView from '../views/DetailView.vue';
import CartView from '../views/CartView.vue';
import SettingsView from '../views/SettingsView.vue'


const routes = [
    { path: '/', component: HomeView },
    { path: '/register', component: RegisterView },
    { path: '/login', component: LoginView },
    { path: '/cart', component: CartView },
    { path: '/movies', component: MoviesView },
    { path: '/movies/:id', component: DetailView },
    { path: '/settings', component: SettingsView },

]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;