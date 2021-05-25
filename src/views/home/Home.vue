<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">优衣橱</div></nav-bar>
    <tab-contral :title=" ['流行', '新款' , '精选' ] " @tabClick="tabClick" v-show="isActive" ref='tabContral1'></tab-contral>
    <scroll class="content" ref="scroll" 
    @scroll="contentScroll" 
    :probeType ="3"
    :pull-up-load="true"
    @pullingUp="LoadMore">
    <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <week-recommend></week-recommend>
    <tab-contral 
    :title=" ['流行', '新款' , '精选' ] "  
    @tabClick="tabClick" 
    ref='tabContral2' 
    v-show="!isActive"
    ></tab-contral>
    <!-- 将home这里获取的list数据传到goodlist文件中, 需要用goodlist文件做展示,currentType可以动态改变其字符串-->
    <good-list :goods="goods[currentType].list"></good-list>
    </scroll> 

    <back-top @backTop="backTop" class="backTop" v-show="isShowBackTop" >
      <img src="~assets/img/common/top.png" alt="">
    </back-top>
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
  import backTop from "components/connection/backTop/backTop"

  import {request} from "network/request"
  import {NEW, POP, SELL, BACKTOP_DISTANCE} from "common/const";

export default {
  components:{
    homeSwiper,
    homeRecommend,
    weekRecommend,
    navBar,
    tabContral,
    goodList,
    scroll,
    backTop
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
       currentType: 'pop',
       isShowBackTop: false,
       tabOffSetTop: 0,
       isActive: false,
       saveY: 0
    }
  },
  deactivated(){
    console.log("离开了"+this.$refs.scroll.scroll.y);
    this.saveY = this.$refs.scroll.scroll.y
    
  },
  activated(){
    console.log("进来了"+this.saveY);
    this.$refs.scroll.scrollTo(0,this.saveY,1)
    this.$refs.scroll.scroll.refresh()
  },
  created() {
    console.log('创建mouted');
    //请求轮播图数据
    this.gteHomeMlutidata();
    //请求商品信息数据
    this.getHomeGoods('pop');
    this.getHomeGoods('new');
    this.getHomeGoods('sell');
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
      //这里的index就是点击的那个按钮的index
      this.$refs.tabContral1.currentIndex = index
      this.$refs.tabContral2.currentIndex = index
    },
    contentScroll(position){
      //y值超过1000,使‘回到顶部按钮消失‘
      this.isShowBackTop = -position.y > BACKTOP_DISTANCE
      //y值超过offsettop的值,开启吸顶模式
      this.isActive=(-position.y)>this.tabOffSetTop
    },
    LoadMore(){
      //console.log("收到加载信号!");
      this.getHomeGoods(this.currentType)
    },
    backTop(){
      //console.log("点击成功!");
      //调用scrollTo方法
      this.$refs.scroll.scrollTo(0,0)
    },
    swiperImageLoad(){
    //获取tabControl的offettop值
    this.tabOffSetTop=this.$refs.tabContral2.$el.offsetTop-44
    console.log(this.tabOffSetTop);
    
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
      //在加载完一页之后重新刷新一个PullUp函数
      this.$refs.scroll.finishPullUp()
    })
    },
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
.backTop{
  position: fixed;
  right: 10px;
  bottom: 60px;
}
</style>