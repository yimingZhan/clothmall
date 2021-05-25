<template>
  <div class="goods-item" @click="goodsItemClick">
    <img :src="goodsItem.show.img" >
    <div class="goods-info">
      <p class="title"> {{goodsItem.title}} </p>
      <div class="item-info">
        <span class="price"> {{'¥'+goodsItem.price}} </span>
        <span class="collect"> {{goodsItem.cfav}} </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props:{
    goodsItem:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    goodsItemClick(){
      console.log("点击了");
      this.$router.push('/detail')
    }
  }
}
</script>

<style >
.goods-item {
    padding-bottom: 30px;
    /* 水平居中 */
    justify-content: space-around;
    /* 自动换行 */
    flex-wrap:wrap;
    display: flex;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    height: 80%;
    border-radius: 5px;
    margin-bottom: 8px;
  }

  .goods-info {
    font-size: 14px;
    bottom: 5px;
    left: 0;
    right: 0;
    display: flex;
    flex-wrap:wrap;
  }

  .goods-info .title {
    /* White-space:nowrap;
    Overflow:hidden;
    text-overflow: ellipsis;  */
    white-space: wrap;
    margin-bottom: 3px;
    font-size: 14px;
    text-align: center;
  }

  .item-info{
    display: flex;
    justify-content: space-around;
    width: 100%;
  }
  .goods-info .price {
    color: var(--color-high-text);
    margin: 8px auto;
    font-size: 16px;
  }

  .item-info .collect {
    display: flex;
    /* position: relative; */
    margin-right: 40px;
    text-align: center;
    padding-top: 10px;
  }

  .item-info .collect::before {
    content: '';
    /* position: absolute; */
    left: -15px;
    top: 10px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>
