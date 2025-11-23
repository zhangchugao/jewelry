import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import NewsView from './views/NewsView.vue';
import NewsDetailView from './views/NewsDetailView.vue';
import FeaturedView from './views/FeaturedView.vue';
import ContactView from './views/ContactView.vue';
import CertificateDetailView from './views/CertificateDetailView.vue';

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
  },
  {
    path: '/certificate/:certificateNumber',
    name: 'certificateDetail',
    component: CertificateDetailView
  },
  {
    path: '/news/:id',
    name: 'newsDetail',
    component: NewsDetailView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;