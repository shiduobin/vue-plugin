/**
 * @author shiduobin
 * @data 2018/7/23 15:40
 * @fileName index.js
 * @Description: 自定义插件
 */
const install = (Vue, Options) => {
  Vue.prototype.getYMD = (split) => {
    let date = new Date();
    split = split || '-';
    let Y = date.getFullYear();
    let M = date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : `${date.getMonth() + 1}`;
    let D = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
    return `${Y}${split}${M}${split}${D}`;
  }
  Vue.prototype.getSum = (arr) => {
    if (Array.isArray(arr)) {
      let sum = arr.reduce((previousValue, currentValue, index, arr) => {
        // previousValue:上一次回调返回的值，currentValue:当前元素，index:索引，arr:原数组
        return previousValue + currentValue;
      }, 0);
      return sum;
    } else {
      console.log('请输入数组');
      return false;
    }
  }
};
export default {install};
