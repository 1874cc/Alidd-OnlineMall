<template>
<transition name='fade'> 
    <div class="rec-banner" :good_word='good_word'>
      <h1 class="banner-title">搜索"{{this.$route.query.good_word}}"的结果如下</h1>
      <ul class="rec-list" v-show="searchgoods(goods_key)!=null">
        <li
          class="rec-card"
          v-for="(item, index) in searchgoods()"
          :key="index"
          @click="togglePage(item)">
          <img class="rec-media" :src="item.cover"/>
          <div class="rec-profile">
            <h4>{{ item.text }}</h4>
            <p class="rec-params">
              <!-- 原价: <span class="rec-price">￥{{ item.price }}</span>&nbsp; -->
              <span class="rec-online-price">￥{{ item.onlinePrice }}</span>
            </p>
          </div>
        </li>
      </ul>
      <h3 v-show="searchgoods(goods_key).length==0">Not Found 404 搜索无此商品~~~请换个关键词吧！</h3>
    </div>
    </transition> 
</template>

<script>
  import config from '@/config/config'
  export default {
    name: 'Search',
    data () {
      return {
        index: 0,
        goods_key:this.$route.query.good_word
      }
    },
    props:['good_word'],
    computed: {
      
      goods () {
        return config.goods
      },
      user(){
        return config.User
      },

    },
    methods: {
      togglePage (item) {//点击跳转页面router，
        this.$router.push({ path: 'goods', query: { name: item.name } })
      },
      //筛选商品
      searchgoods(){
          return this.goods.filter(item=>{
              if(item.text.includes(this.$route.query.good_word)){ 
                  return item
              }
          })
      }
    },

  }
</script>
<style scoped>
  .container {
    position: relative;
    background-color: #f5f5f5;
    border-bottom: 1px solid transparent;
  }
  .swiper-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 500px;
    background-color: #e5e5e5;
  }
  .stage {
    width: 1120px;
    margin-left: auto;
    margin-right: auto;
    background-color: #789;
  }
  .category-nav {
    display: inline-block;
    position: absolute;
    width: 200px;
    height: 500px;
    z-index: 2;
    list-style: none;
    background-color: rgba(0, 0, 0, 0.55);
  }
  .cate-nav-item {
    padding-left: 12px;
    line-height: 35.7143px;
    color: #fff;
    cursor: pointer;
  }
  .cate-nav-item:hover {
    color: #787878;
    background-color: rgba(255, 255, 255, .8);
  }
  .cate-nav-icon {
    opacity: .5;
  }
  .swiper {
    height: 500px;
    background-color: #e8e8e8;
  }
  .rec-banner {
    margin: 30px auto;
    padding-top: 30px;
    padding-bottom: 50px;
    width: 1120px;
    background-color: #fff;
  }
  .banner-title {
    padding: 8px 15px;
    text-align: center;
  }
  .rec-list {
    list-style: none;
  }
  .rec-card {
    display: inline-block;
    width: 25%;
    text-align: center;
    vertical-align: top;
    cursor: pointer;
  }
  .rec-media {
    width: 240px;
  }
  .rec-profile {
    width: 200px;
    display: inline-block;
    color: #444;
  }
  .rec-price {
    text-decoration: line-through;
  }
  .rec-online-price {
    color: #ff0036;
    font-size: 16px;
  }
  .rec-params {
    font-size: 12px;
    color: #888;
  }
</style>