<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="isActive">
      <slot name="item-icon-active"></slot>
    </div>
    <div v-else>
      <slot name="item-icon"></slot>
    </div>
    <!-- 将太过于复杂的代码抽离到computed中,涉及判断的代码 -->
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'tabBarItem',
  computed:{
    isActive(){
      //对比判断当前活跃的路由是否是当前组件的路径,如果一致则可以返回ture,从而激活class
      return this.$route.path.indexOf(this.path) !== -1
    },
    activeStyle(){
      return this.isActive ? {color: this.activeColor} : {}
    }
  },
  //子组件接收值的名称为path,类型为string
  props:{
    path:String,
    activeColor:{
      type:String,
      default:'red'
    }
  },
  data(){
    return {
      //isActive:true
    }
  },
  methods:{
    itemClick(){
      //将获取的path值直接push到history历史中.实现页面跳转.
      this.$router.push(this.path)
    }
  },
  created(){},
  mounted(){}
}
</script>
<style  scoped>
.tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
  }
  .active{
    color: royalblue;
  }
</style>