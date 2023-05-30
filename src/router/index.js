import { createRouter, createWebHistory } from 'vue-router'
import FormView from '../views/FormView.vue'
import PreviewView from '../views/PreviewView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form',
      component: FormView
    },
    {
      path: '/preview',
      name: 'preview',
      component: PreviewView
    }
  ]
})

export default router
