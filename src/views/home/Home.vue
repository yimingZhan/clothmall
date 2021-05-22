<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">优衣橱</div></nav-bar>

    <scroll class="content">
    <home-swiper :banners="banners"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <week-recommend></week-recommend>
    <tab-contral :title=" ['流行', '新款' , '精选' ] " @tabClick="tabClick"></tab-contral>
    <!-- 将home这里获取的list数据传到goodlist文件中, 需要用goodlist文件做展示,currentType可以动态改变其字符串-->
    <good-list :goods="goods[currentType].list"></good-list>
    </scroll> 
  </div>
  
</template>

<script>

  import homeSwiper from "views/home/homeChild/homeSwiper"
  import homeRecommend from "views/home/homeChild/homeRecommend"
  import weekRecommend from "views/home/homeChild/weekRecommend"
  
  import navBar from "components/common/navBar/navBar"
  import tabContral from "components/common/navBar/tabContral"
  import goodList from "components/common/goodList/goodList"
  import scroll from "components/common/scroll/scroll"

  import {request} from "network/request"

export default {
  components:{
    homeSwiper,
    homeRecommend,
    weekRecommend,
    navBar,
    tabContral,
    goodList,
    scroll
  },
  data(){
    return{
      banners: [],
      recommend: [],
      goods: {
        'pop': {page: 0, list: []},
        'new': {page: 0, list: []},
        'sell': {page: 0, list: []},
      },
       //设置默认值currentType,注意写的位置在goods外面
       currentType: 'pop'
    }
  },
  created() {
    //请求轮播图数据
    this.gteHomeMlutidata()
    //请求商品信息数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /*
    网络请求相关方法
    */
    tabClick(index){

      //切换currentType,改变请求的数据.
      switch(index){
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
    },
    /*
    网络请求相关方法
    */
    gteHomeMlutidata() {
      request({url: 'home/multidata',}).then(res =>{
      this.banners = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
      },
    getHomeGoods(type ){
      //page为动态获取,请求页=当前页+1;这里的加一不是加到goods中,而是加到请求里的页码了
      const page = this.goods[type].page + 1
      request({
      url: 'home/data',
      params: {
        //这里就是设置在路径后面的查询字符串 ?type=pop&page=1
        type: type,
        page: page
      }}).then(res =>{
      //console.log(res);
      //将服务器中请求的list数据push到data/goods/pop数组中,这里用到里扩展运算符;
      this.goods[type].list.push(...res.data.list)
      //完成数据请求后,将其pop数组中的page加1;在此前的基础上累加
      this.goods[type].page += 1
    })
    }
    }
}
</script>
<style scoped>
#home{
  padding-top: 44px;
  height: 100vh;
}
.home-nav{
  background-color:rgb(248, 162, 176);
  color: white;
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  z-index: 100;
}
.content{
  height: 700px;
  /* padding-bottom: 60px; */
  overflow: hidden;
  height: calc(100% - 49px);
}
</style>