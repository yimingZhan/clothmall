<template>
  <swiper>
    <swiper-item v-for="items in banners">
      <a :href="items.link">
        <img :src="items.image">
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
  components:{
    Swiper, 
    SwiperItem
  }
}
</script>

<style >

</style>
