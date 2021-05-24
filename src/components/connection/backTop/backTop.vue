<template>
  <div class="backTop" @click="topClick">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'backTop',
  methods:{
    topClick(){
      this.$emit('backTop')
    }
  }
}
</script>

<style scoped>
.backTop img{
  height: 43px;
  width: 43px;
}
</style>
