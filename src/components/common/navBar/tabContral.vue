<template>
  <div class="tabContral" >
    <div v-for="(items,index) in title" class="tabContral-item" 
    :class="{active: index===currentIndex}" @click="itemsClick(index)">
      <span> {{items}} </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabContral',
  props: {
    title: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      currentIndex: 0
    }
  },
  methods:{
    itemsClick(index){
      this.currentIndex = index,
      //监听点击事件,告诉home哪个按钮被点击了
      this.$emit('tabClick',index)
      //this.$emit('nba')
    }
  }
}
</script>

<style >
.tabContral{
  position: sticky;
  top: 44px;
  background-color: white;
  padding: 10px 0 6px;
  display: flex;
  text-align: center;
  line-height: 40px;
}
.tabContral-item{
  flex: 1;
}
.active{
  color:deeppink;
}
.active span{
  border-bottom: 3px solid deeppink;
  padding: 5px;
}
</style>
