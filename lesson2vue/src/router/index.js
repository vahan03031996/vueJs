import Vue from 'vue'
import Router from 'vue-router'
import Users from '@/components/Users'
import UsersDatails from '@/components/UsersDatails'
import UsersCreate from '@/components/UsersCreate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/users/create',
      name: 'User-create',
      component: UsersCreate
    },
    {
      path: '/user/:user_id/datails',
      name: 'User-Datails',
      component: UsersDatails
    }
  ]
})
