<template>
  <div>
    <div class="gs-menu-bg"></div>
    <div class="gs-header">
      <div class="gs-quick-menu">
        <div class="gs-profile">
          <span>你好</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <router-link class="gs-link" to='/userinfo'>
              个人中心
          </router-link>
          <span>消息 <strong>0</strong></span>
        </div>
        <ul class="gs-nav">
          <li class="gs-nav-item">
            <router-link class="gs-link" to="/order">我的订单</router-link>
          </li>
          <li class="gs-nav-item">
            <router-link class="gs-link" to="/cart">
              <i class="fa fa-shopping-cart"></i>&nbsp;购物车
            </router-link>
          </li>
          <li class="gs-nav-item">
            <router-link class="gs-link " to="/collection">
				    收藏夹
				    </router-link>
          </li>
          <li class="gs-nav-item">
            <router-link class="gs-link " to="/merchants">
				    多多客服
				    </router-link>
          </li>
          <li class="gs-nav-item">
            <span class="gs-link" >商家入口</span>
          </li>
        </ul>
      </div>
      <div>
        <div class="gs-logo" @click="toHomepage"></div> <!-- 阿里多多logo -->
        <div class="gs-search-box">
          <input
            class="gs-search-input"
            type="text"
            placeholder="请输入 商品/店铺"
            v-model="search_word"
            @keyup.enter="searchGoods">
            <span class="gs-search-btn"  >
            搜&nbsp;&nbsp;索
            </span>
        </div>
      </div>
    </div>
    <div class="gs-dividor"></div>
    <router-view/> 
    <Foot></Foot>
  </div>
 
</template>

<script>
import UserInfo from'@/components/UserInfo'
import Search from'./components/Search.vue'
import Foot from'./views/Foot'
  export default {
    name: 'App',
    data(){
      return{
        search_word:""
      }
    },
    components:{
      Search,UserInfo,Foot
    },
    methods: {
      searchGoods(){
        // console.log(this.search_word)
        this.$router.push({path:'/search',query:{good_word:this.search_word}})
      },
      toHomepage () {
        this.$router.push('/')
      },
      

    },
    
    
  }
</script>

<style>
  .gs-link {
    color: #999;
    text-decoration: none;
    outline: none;
  }
  .gs-forbid {
    cursor: not-allowed;
  }
  .gs-menu-bg {
    position: absolute;

    width: 100%;
    height: 30px;
    background-color: #f2f2f2;
    border-bottom: 1px solid #e5e5e5;
  }
  .gs-header {
    width: 1120px;
    margin-left: auto;
    margin-right: auto;
  }
  .gs-quick-menu {
    position: relative;
    font-size: 12px;
    color: #999;
    background-color: #f2f2f2;
  }
  .gs-profile {
    display: inline-block;
    line-height: 30px;
    cursor: pointer;
  }
  .gs-nav {
    position: absolute;
    right: 0;
    display: inline-block;
    line-height: 30px;
    list-style: none;
  }
  .gs-nav-item {
    margin-left: 12px;
    display: inline-block;
  }
  .gs-logo {
    display: inline-block;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 188px;
    height: 75px;
    cursor: pointer;
    background-image: url(./assets/images/logo-ALIDD.png);
    background-repeat: no-repeat;
    background-size: cover;
  }
  .gs-search-box {
    display: inline-block;
    line-height: 100px;
    float: right;
  }
  .gs-search-input {
    box-sizing: border-box;
    width: 240px;
    line-height: 32px;
    padding-left: 6px;
    outline: none;
    border: 2px solid #00aaff;
    vertical-align: middle;
  }
  .gs-search-btn {
    display: inline-block;
    line-height: 36px;
    padding-left: 16px;
    padding-right: 16px;
    color: #fff;
    font-weight: 600;
    background-color: #00aaff;
    vertical-align: middle;
    cursor: pointer;
    user-select: none;
  }
  .gs-dividor {
    height: 2px;
    background-color: #3ab5ee;
  }
</style>

