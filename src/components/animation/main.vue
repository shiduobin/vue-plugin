<template>
  <div>
    <div v-if="type==='fade'">
      <transition name="fade" enter-active-class="animated fadeIn"
                  leave-active-class="animated fadeOut">
        <div v-if="show">
          <slot>fade动画</slot>
        </div>
      </transition>
    </div>
    <div v-if="type==='bounce'">
      <transition name="bounce" enter-active-class="animated bounceIn"
                  leave-active-class="animated bounceOut">
        <div v-if="show">
          <slot>bounce动画</slot>
        </div>
      </transition>
    </div>
    <div v-if="type==='zoom'">
      <transition name="zoom" enter-active-class="animated zoomIn"
                  leave-active-class="animated zoomOut">
        <div v-if="show">
          <slot>zoom动画</slot>
        </div>
      </transition>
    </div>
    <div v-if="type==='flip'">
      <transition name="zoom" enter-active-class="animated flipInY" leave-active-class="animated flipOutY">
        <div v-if="show">
          <slot>flip动画</slot>
        </div>
      </transition>
    </div>
    <div v-if="type==='opacity'">
      <transition name="opacity">
        <div v-if="show">
          <slot>opacity动画</slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<style>
  @import url('./animation.css');

  .opacity-enter-active, .opacity-leave-active {
    opacity: 1;
    transition: all .3s linear;
  }

  .opacity-enter, .opacity-leave-to {
    opacity: 0;
  }
</style>

<script>
  export default {
    name: 'animation',
    props: ['type', 'show'],
    data() {
      return {
        msg: 'hello vue'
      }
    }
  }
</script>
