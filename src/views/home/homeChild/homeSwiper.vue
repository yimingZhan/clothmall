<template>
  <swiper>
    <swiper-item v-for="items in banners">
      <a :href="items.link">
        <img :src="items.image" @load="imageLoad">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper/index'

export default {
  name: 'homeSwiper',
  props:{
    banners: {
      type: Array,
      default(){
        return []
      }
    }
  },
  data(){
    return{
      isLoad : false
    }
  },
  components:{
    Swiper, 
    SwiperItem
  },
  methods: {
    imageLoad(){
      //使事件只发送一次就行
      if(!this.isLoad){
        this.$emit("swiperImageLoad")
        this.isLoad = true
      }
    }
  }
}
</script>

<style >

</style>
