import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactView from '../views/ContactView.vue'
import AddContactView from '../views/AddContactView.vue'
import EditContactView from '../views/EditContactView.vue'

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/contact/:id', name: 'Contact', component: ContactView },
  { path: '/add', name: 'AddContact', component: AddContactView },
  { path: '/edit/:id', name: 'EditContact', component: EditContactView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
