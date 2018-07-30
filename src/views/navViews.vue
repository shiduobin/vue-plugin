<template>
  <div>
    <navigation :menu="menu"></navigation>
  </div>
</template>

<style>

</style>

<script>
  import navigation from '../components/nav';

  export default {
    data() {
      return {
        menu: {
          list: [
            {
              title: 'UI',
              href: 'https://www.autohome.com.cn'
            },
            {
              title: '输入',
              href: 'https://www.autohome.com.cn'
            },
            {
              title: '媒体',
              href: 'https://www.autohome.com.cn'
            },
            {
              title: '导航',
              href: 'https://www.autohome.com.cn'
            },
            {
              title: '其他',
              href: 'https://www.autohome.com.cn'
            },
            {
              title: '网页模板',
              href: 'https://www.autohome.com.cn'
            },
            {
              title: '常用代码',
              href: 'https://www.autohome.com.cn'
            }
          ],
          hoveBackground: '#dd5052'
        }
      }
    },
    components: {
      navigation
    }
  }
</script>
