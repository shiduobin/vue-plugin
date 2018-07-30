import animation from './animation';

const components = [animation];

const install = (Vue, Options) => {
  components.forEach(component => {
    Vue.component(component.name, component);
  })
};

export default install;
