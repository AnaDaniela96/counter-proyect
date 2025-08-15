import HomePage from '@/modules/landing/pages/HomePage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import FeaturesPage from '@/modules/landing/pages/FeaturesPage.vue'
import PricingPage from '@/modules/landing/pages/PricingPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modules/landing/layouts/LandingLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomePage,
        },
        {
          path: '/contact',
          name: 'contacto',
          component: () => import('@/modules/landing/pages/ContactPage.vue'),
        },
        {
          path: '/features',
          name: 'features',
          component: FeaturesPage,
        },
        {
          path: '/pricing',
          name: 'pricing',
          component: PricingPage,
        },
      ],
    },

    // Auth
    {
      path: '/auth',
      redirect: { name: 'login' },
      component: () => import('@/modules/auth/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('@/modules/auth/pages/LoginPage.vue'),
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('@/modules/auth/pages/RegisterPage.vue'),
        },
      ],
    },
  ],
})

export default router
