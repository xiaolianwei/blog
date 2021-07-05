import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Home from '../views/Home/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/skillShare',
    name: 'SkillShare',
    component: () => import('../views/SkillShare.vue'),
  },
  {
    path: '/programView',
    name: 'ProgramView',
    component: () => import('../views/ProgramView.vue'),
  },
  {
    path: '/myCase',
    name: 'MyCase',
    component: () => import('../views/MyCase.vue'),
  },
  {
    path: '/aboutMy',
    name: 'AboutMy',
    component: () => import('../views/AboutMy.vue'),
  },
  {
    path: '/speak',
    name: 'Speak',
    component: () => import('../views/Speak.vue'),
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: () => import('../views/Article.vue'),
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (from.path === '/search') {
    store.commit('headelSearch', '');
  }
  next();
});

export default router;
