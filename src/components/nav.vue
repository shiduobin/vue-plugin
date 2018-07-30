<template>
  <div>
    <div id="menu">
      <ul>
        <li v-for="(item,index) in menu.list" @mouseover="movebg(index)">
          <a :href="item.href" target="_blank"> {{item.title}}</a>
        </li>
        <div class="menubg" :style="'background:'+menu.hoveBackground"></div>
      </ul>
    </div>
  </div>
</template>

<style>
  html,
  body,
  ul,
  li {
    padding: 0;
    margin: 0;
    list-style: none
  }

  #menu {
    width: 80%;
    background: #024067;
    box-shadow: 0 2px 3px rgba(0, 0, 0, .2);
    padding: 0 10%;
  }

  #menu ul {
    display: flex;
    position: relative
  }

  #menu ul li {
    flex: 1;
    cursor: pointer;
    text-align: center;
    position: relative;
    z-index: 2
  }

  #menu ul li a {
    display: inline-block;
    line-height: 40px;
    height: 40px;
    width: 100%;
    color: #fff;
    font-size: 14px;
    text-decoration: none;
  }

  .menubg {
    position: absolute;
    background: #8f0000;
    height: 40px;
    top: 0;
    z-index: 1;
    transition: all .3s;
    left: 0
  }
</style>

<script>

  export default {
    props: ['menu'],
    data() {
      return {
        index: 0
      }
    },
    mounted() {
      this.initWidth();
      window.addEventListener('resize', () => {
        this.initWidth();
        this.movebg(this.index);
      });
    },
    methods: {
      initWidth() {
        //获取menu宽度
        let menuwidth = document.querySelector("#menu ul").offsetWidth;
        //获取li
        let liwidth = document.querySelectorAll("#menu li");
        //背景
        let bgWidth = document.querySelector(".menubg");
        //设置背景的宽度
        bgWidth.style.width = liwidth[0].offsetWidth + 'px';
      },
      movebg(index) {
        this.index = index;
        let bgWidth = document.querySelector(".menubg");
        let selfLeft = document.querySelectorAll("#menu li")[index].offsetLeft;
        bgWidth.style.left = selfLeft + 'px';
      }
    }
  }
</script>
