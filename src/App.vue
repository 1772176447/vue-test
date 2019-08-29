<template>
  <div id="app">
     <div>
      <scroller :on-refresh="refresh" refreshText="下拉啥啊" refreshLayerColor="red" :on-infinite="infinite" ref="my_scroller">
         <HelloWorld>
   </HelloWorld>
      </scroller>
    </div>
  
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { setTimeout } from 'timers';

export default {
  data(){
    return {
      img:require('./static/imgs/logo.jpg')
    }
  },
  methods:{
     infinite(done) {
      this.pageNumber++;
      console.log("infinite");
      // this.getOrderList(this.selectTabIndex, done);
      setTimeout(()=>{
      this.$refs.my_scroller.finishInfinite(true)
      },2000)
    },
  refresh() {
      //下拉刷新
      console.log("已刷新");
      setTimeout(() => {
        this.$refs.my_scroller.finishPullToRefresh();
      }, 1500);
    },
   

  },
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style lang="less">

</style>
