<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'

export default {
  name: 'scroll',
  data(){
    return{
      scroll: null,
    }
  },
  props:{
    probeType:{
      type: Number,
      default:1 
    },
    pullUpLoad:{
      type: Boolean,
      default:false
    }
  },
  mounted(){
    //初始化BCscroll
    if (!this.$refs.wrapper) return
    this.scroll = new BScroll(this.$refs.wrapper,{
      //设置该选项,可以是的scroll对象中的按钮可点击
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad
    })
    //监听滚动位置,并发送.
    this.scroll.on('scroll',position => {
     // console.log(position)
      this.$emit('scroll',position)
    })
    //监听上拉事件
    this.scroll.on('pullingUp',()=>{
      console.log("上拉加载更多!");
      this.$emit('pullingUp')
    })
  },
  methods:{
    //封装scrollTo方法
    scrollTo(x,y,time=500){
      this.scroll&&this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll&&this.scroll.finishPullUp()
    },
    }
  }

</script>

<style >

</style>
