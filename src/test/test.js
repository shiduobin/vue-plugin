/**
 * @author shiduobin
 * @data 2018/7/23 10:13
 * @fileName test.js
 * @Description: 原型链继承
 */


Object.prototype.haha = function () {
  console.log('哈哈');
};
let obj = new Object();
obj.haha();

function Dog(name) {
  this.type = 'Dog';
  this.name = name
}

Dog.prototype.speak = function () {
  console.log('旺旺');
};

let dog = new Dog('吉娃娃');
console.log(dog);

function demo() {
  console.log('萝卜兔');
}

let arr = new Array();

console.log(demo.constructor === Function);
console.log(arr.constructor === Array);

function Fn(name, age) {
  this.name = name;
  this.age = 20;
}

function Son(name, age, sex) {
  Fn.call(this, name, age)                //借调继承Fn；
  this.sex = sex;
};
var s1 = new Son("李四", 20, "男");
console.log(s1);

let ddd = function () {
  let k = 1;
  let ff = () => {
    return k + 2;
  }
  return ff();
};

console.log(ddd());
