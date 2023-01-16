//General Imports
import Vue from 'vue'
import VueRouter from 'vue-router'
//Page Imports
import Chat from '../views/chat.vue'
import Admin from '../views/admin.vue'
import Menu from "@/views/menu";
import Home from "@/views/home";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: Home,
  },
  {
    path: '/chat',
    name: 'chatPage',
    component: Chat
  },
  {
    path: '/menu',
    name: 'menuPage',
    component: Menu
  },
  {
    path: '/administration',
    name: 'administrationPage',
    component: Admin
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
