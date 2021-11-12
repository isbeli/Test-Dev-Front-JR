import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contacts from '../views/Contacts.vue'
import Contact from '../views/Contact.vue'

Vue.use(VueRouter)

const routes = [
  /* Main route */
  {
    path: '/',
    name: 'Home',
    component: Home, 
    beforeEnter: (to, from, next) => { 
        $cookies.remove("user")
        next();  
    }
  },
  /* Contacts route */
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts
  },
  /* Route for new contact */
  {
    path: '/contacts/new',
    name: 'new',
    component: Contact, 
    beforeEnter: (to, from, next) => { 
      if (!$cookies.isKey("user")) next({ name: 'Home' })
        next();  
    }
  },
  /* Route for edit contact */
  {
    path: '/contacts/edit',
    name: 'edit',
    component: Contact, 
    beforeEnter: (to, from, next) => { 
      if (!$cookies.isKey("user")) next({ name: 'Home' })
        next();  
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
