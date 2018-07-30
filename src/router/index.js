import Vue from 'vue'
import Router from 'vue-router'
import sort from '../views/sortViews';
import slider from '../views/sliderViews';
import nav from '../views/navViews';
import ue from '../views/ueViews';
import animation from '../views/animationViews';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/animation'
    },
    {
      path: '/ue',
      component: ue
    },
    {
      path: '/sort',
      component: sort
    },
    {
      path: '/slider',
      component: slider
    },
    {
      path: '/nav',
      component: nav
    },
    {
      path: '/animation',
      component: animation
    }
  ]
})
