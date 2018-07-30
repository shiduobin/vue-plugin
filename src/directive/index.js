/**
 * @author shiduobin
 * @data 2018/7/23 15:41
 * @fileName index.js
 * @Description: 自定义指令
 */
let Directive = {
  myHtml: {
    inserted: (el, binding) => {
    },
    bind: (el, binding, vnode) => {
      el.innerHTML = binding.value;
    }
  },
  myText: {
    bind(el, binding, vnode) {
      console.log('当该指令第一次绑定到元素上时调用，只调用一次，可以用来执行初始化操作');
      el.innerText = binding.value;
    },
    inserted(el, binding) {
      console.log('被绑定有自定义指令的元素插入到DOM（父节点）中时调用');
    },
    update() {
      console.log('当被绑定的元素所在模板更新时调用');
    },
    componentUpdated() {
      console.log('当被绑定的元素所在模板完成一次更新时调用（模板更新后调用）');
    },
    unbind() {
      console.log('当指令和元素解绑的时候调用，只执行一次');
    }
  }
};

export default Directive;
