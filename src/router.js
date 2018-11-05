import Vue from 'vue'
import Router from 'vue-router'

import top from '@/pages/top'
import about from '@/pages/about'
import skill from '@/pages/skill'
import work from '@/pages/work'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'top',
      component: top
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/skill',
      name: 'skill',
      component: skill
    },
    {
      path: '/work',
      name: 'work',
      component: work
    }
  ]
})
