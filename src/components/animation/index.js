import animation from './main';

animation.install = function (Vue) {
  Vue.component(animation.name, animation);
};
export default animation;
