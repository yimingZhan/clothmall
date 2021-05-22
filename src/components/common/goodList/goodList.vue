<template>
  <div class="goodList">
    <!-- 将遍历的小item:即list里面的一个个object文件,传到ListItem文件中 -->
    <list-item v-for="item in goods" :goodsItem="item"></list-item>
  </div>
</template>

<script>
import ListItem from './ListItem'

export default {
  name: 'goodList',
  components:{
    ListItem
  },
  props:{
    goods:{
      type: Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style >
.goodList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}
</style>
