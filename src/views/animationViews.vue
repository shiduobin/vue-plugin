<template>
  <div class="container">
    <div class="item">
      <div class="box">
        <animation type="fade" :show="fadeShow">
          <div>孙猴子</div>
        </animation>
      </div>
      <button @click="fadeShow=!fadeShow">动画</button>
    </div>
    <div class="item">
      <div class="box">
        <animation type="bounce" :show="bounceShow">
          <div>白龙马</div>
        </animation>
      </div>
      <button @click="bounceShow=!bounceShow">动画</button>
    </div>
    <div class="item">
      <div class="box">
        <animation type="zoom" :show="zoomShow">
          <div>猪八戒</div>
        </animation>
      </div>
      <button @click="zoomShow=!zoomShow">动画</button>
    </div>
    <div class="item">
      <div class="box">
        <animation type="flip" :show="flipShow">
          <div>沙僧</div>
        </animation>
      </div>
      <button @click="flipShow=!flipShow">动画</button>
    </div>
    <div class="item">
      <div class="box">
        <animation type="opacity" :show="opacityShow">
          <div>唐僧</div>
        </animation>
      </div>
      <button @click="opacityShow=!opacityShow">动画</button>
    </div>
  </div>
</template>

<style scoped>
  .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
  }

  .item {
    width: 20%;
    text-align: center;
    box-sizing: border-box;
    box-shadow: 1px 2px 5px #eee;
  }

  .box {
    min-height: 50px;
  }
</style>

<script>
  export default {
    data() {
      return {
        msg: 'hello vue',
        fadeShow: true,
        bounceShow: true,
        zoomShow: true,
        flipShow: true,
        opacityShow: true
      }
    },
    methods: {},
    mounted() {
    }
  }
</script>
