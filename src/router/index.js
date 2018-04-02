import Vue from 'vue'
import Router from 'vue-router'
import sort from '../views/sortViews';
import slider from '../views/sliderViews';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sort',
      component: sort
    },
    {
      path: '/slider',
      component: slider
    }
  ]
})
