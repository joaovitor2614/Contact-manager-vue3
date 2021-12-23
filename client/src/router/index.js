import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddContact from '../views/AddContact'
import EditContact from '../views/EditContact'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-contact',
    name: 'AddContact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AddContact
  },
  {
    path: '/edit-contact/:id',
    name: 'EditContact',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: EditContact
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
