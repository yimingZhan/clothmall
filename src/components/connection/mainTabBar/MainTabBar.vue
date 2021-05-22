<template>
  <tab-bar>
      <!-- 这里的“home”是数据源,path是子组件要接受的值的名称 -->
      <!-- 渲染时是以app文件内,template中path标签中的路径为准显示在浏览器的搜索栏中. -->
      <tab-bar-item path='home' activeColor='deeppink'>
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" >
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" >
        <div slot="item-text" >首页</div>
      </tab-bar-item>
      <tab-bar-item path='category' activeColor='deeppink'>
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" >
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" >
        <div slot="item-text" >分类</div>
      </tab-bar-item>
      <tab-bar-item path='cart' activeColor='deeppink'>
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" >
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" >
        <div slot="item-text" >购物车</div>
      </tab-bar-item>
      <tab-bar-item path='profile' activeColor='deeppink'>
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" >
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" >
        <div slot="item-text" >我的</div>
      </tab-bar-item>
    </tab-bar>
</template>

<script>
import tabBar from 'components/common/tabbar/tabBar'
import tabBarItem from 'components/common/tabbar/tabBarItem'

export default {
  name:'MainTabBar',
  components:{
    tabBar,
    tabBarItem
  }
}
</script>
<style>

</style>