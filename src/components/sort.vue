<template>
  <div class="main">
    <div class="drag-box-left">
      <div class="drag-title">拖动排序</div>
      <div class="drag-list" draggable="true"
           v-for="list in sortData"
           :data-id="list.id"
           @dragstart="dragstartEvent"
           @dragend="dragendEvent"
           @dragenter="dragenterEvent"
           @dragleave="dragleaveEvent"
           @dragover="dragoverEvent"
      >{{list.title}}
      </div>
    </div>
  </div>
</template>

<script>
  const _this = this;
  export default {
    props: ['sortData'],
    data() {
      return {
        dragElement: null, // 当前拖动的DOM
        dragId: null,
        lock: true,
        sortArr: []
      }
    },
    methods: {
      // 开始拖动一个元素或者一个选择文本的时候，dragstart事件就会触发
      dragstartEvent(ev) {
        const _this = this;
        _this.dragElement = ev.target;
        _this.dragId = Number(ev.target.getAttribute('data-id'));
        ev.target.style.backgroundColor = '#fdfdfd';
      },
      // 拖动操作正在结束时（通过释放鼠标按钮或点击退出键），dragend事件会触发
      dragendEvent(ev) {
        ev.target.style.backgroundColor = '#fff';
        ev.preventDefault();
      },
      // 拖动的元素或文本选择进入有效的放置目标时，dragenter事件被触发。
      dragenterEvent(ev) {
        const _this = this;
        if (_this.dragElement !== ev.target) {
          let arr = _this.sortArr;
          let index1 = Number(_this.sortArr.indexOf(_this.dragId));
          arr.splice(index1, 1);
          console.log('删除后：', arr);
          let index2 = _this.sortArr.indexOf(Number(ev.target.getAttribute('data-id')));
          arr.splice(index2, 0, _this.dragId);
          console.log('重新排序后：', arr);
          ev.target.parentNode.insertBefore(_this.dragElement, ev.target);
        } else {
          console.log('当前拖动DOM顺序未发生变化');
        }
        ev.preventDefault();
      },
      // 拖动元素或文本选择离开有效放置目标时，dragleave事件会触发。
      dragleaveEvent(ev) {
        const _this = this;
        if (_this.dragElement !== ev.target) {
          if (_this.lock && (ev.target === ev.target.parentNode.lastElementChild || ev.target === ev.target.parentNode.lastChild)) {
            _this.sortArr.pop();
            _this.sortArr.splice(_this.sortArr.length - 1, 0, Number(ev.target.getAttribute('data-id')));
            console.log(_this.sortArr);
            ev.target.parentNode.appendChild(_this.dragElement);
            _this.lock = false;
          } else {
            _this.lock = true;
          }
        }
      },
      // 元素或者选择的文本被拖拽到一个有效的放置目标上时，dragover事件会触发(每几百毫秒触发一次)。
      dragoverEvent(ev) {
        ev.preventDefault(); // 阻止浏览器默认行为
      }
    },
    mounted() {
      this.sortData.forEach((val) => {
        this.sortArr.push(Number(val.id));
      });
      console.log('原数组：', this.sortArr);
    }
  }
</script>

<style scoped lang="less">
  .main {
    .drag-box-left {
      float: left;
      width: 45%;
      .drag-list {
        border: 1px solid #ddd;
        padding: 10px;
        margin-bottom: 10px;
        transition: border 1s;
        cursor: move;
      }

      .drag-title {
        font-weight: 400;
        line-height: 25px;
        margin: 10px 0;
        font-size: 22px;
        color: #1f2f3d;
      }
    }

    .drag-box-right {
      float: right;
      width: 45%;
    }
    &:after {
      clear: both;
      content: '';
      display: block;
      width: 0;
      height: 0;
      visibility: hidden;
    }
  }


</style>
