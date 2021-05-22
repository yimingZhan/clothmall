<template>
  <div class="wrapper">
      <ul class="content">
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
        <li>fenlei</li>
      </ul>
    </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:'Category',
  data(){
    return{
      //创建一个变量scoll
      scroll: null 
    }
  },
  //不能在created中获取标签的原因是:当组件刚创建完就调用,此时的模版还未被挂载.
  mounted(){
    //将scroll指向构造函数,并获取滚动标签的class属性
    this.scroll = new BScroll(document.querySelector('.wrapper'),{
      //设置监听滑动位置参数:0/1不监听,2/3实施监听
      probeType: 3,
      //上拉加载更多参数
      pullUpLoad: true
    })
    //获取滑动到的位置
    this.scroll.on('scroll', (position) => {
      console.log(position)
    })
    //设置上拉加载更多
    this.scroll.on('pullingUp', () => {
      console.log("上拉加载更多!!")
    })
  }
  }
</script>
<style scoped>
.wrapper{
  background-color: cadetblue;
  height: 500px;
  overflow: hidden;
}
</style>