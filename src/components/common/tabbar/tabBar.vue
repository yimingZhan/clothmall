<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  components:{},
  props:{},
  data(){
    return {
    }
  },
  watch:{},
  computed:{},
  methods:{},
  created(){},
  mounted(){}
}
</script>
<style >
#tab-bar {
  /* 显示居中 */
    display: flex;
    background-color: #f6f6f6;
    /* 开启bfc模式 */
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgb(100,100,100,.3);
  }
</style>