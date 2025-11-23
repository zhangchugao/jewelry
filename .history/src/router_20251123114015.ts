import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import NewsView from './views/NewsView.vue';
import FeaturedView from './views/FeaturedView.vue';
import ContactView from './views/ContactView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/news',
    name: 'news',
    component: NewsView
  },
  {
    path: '/featured',
    name: 'featured',
    component: FeaturedView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;