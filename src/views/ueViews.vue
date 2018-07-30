<template>
  <div>
    <uediter :value="ueditor.value" :config="ueditor.config" ref="ue"></uediter>
    <input type="button" value="显示编辑器内容（从控制台查看）" @click="returnContent">

  </div>
</template>

<style>

</style>

<script>
  import slider from '../components/slider';
  import uediter from '../components/ue'

  export default {
    data() {
      return {
        msg: 'hello vue',
        dat: {
          content: ''
        },
        ueditor: {
          value: '编辑器默认文字',
          config: {
            initialFrameWidth: '100%'
          }
        }
      }
    },
    methods: {
      returnContent() {
        this.dat.content = this.$refs.ue.getUEContent();
        console.log(this.dat.content)
      }
    },
    components: {
      slider,
      uediter
    }
  }
</script>
