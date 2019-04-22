import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import SubmissionSuccess from './components/SubmissionSuccess'
import SubmissionFail from './components/SubmissionFail'
import SportsAPI from './components/SportsAPI'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/thanks',
      name: 'success',
      component: SubmissionSuccess
    },
    {
      path: '/404',
      name: 'fail',
      component: SubmissionFail
    },
    {
      path: '/sports',
      name: 'sportsapi',
      component: SportsAPI
    }
  ]
})
