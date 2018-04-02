<template>
  <div>
    <sort :sortData="sortData"></sort>
  </div>
</template>

<style>

</style>

<script>
  import sort from '../components/sort';

  export default {
    data() {
      return {
        sortData: [
          {id: 1, title: '这里是列表1'},
          {id: 2, title: '这里是列表2'},
          {id: 3, title: '这里是列表3'},
          {id: 4, title: '这里是列表4'},
          {id: 5, title: '这里是列表5'},
          {id: 6, title: '这里是列表6'},
          {id: 7, title: '这里是列表7'}
        ]
      }
    },
    components: {
      sort
    }
  }
</script>
