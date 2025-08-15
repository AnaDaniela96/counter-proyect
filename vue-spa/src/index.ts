import HomePage from '@/modules/landing/pages/HomePage.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import FeaturesPage from '@/modules/landing/pages/FeaturesPage.vue'
import PricingPage from '@/modules/landing/pages/PricingPage.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
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
})

export default router
