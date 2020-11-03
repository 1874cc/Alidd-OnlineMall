<template>
<div class="content">
  <div v-if="flag==false">
    <h3>阿里多多--登录</h3>
    <input type="text" placeholder="请输入账号" v-model="inputId" />
    <input type="password" placeholder="请输入密码" v-model="inputPassword" />
    <button @click="login" @keyup.enter="login" >登录</button>
    <h3 class='Warrning' v-show="Errpassword==true">密码或账号错误，请重新输入</h3>
  </div>

  <div v-if="flag==true">
    <h1>我的信息</h1>
    <ul  v-for="(user,index) in searchUser" :key="index">
      <li  v-if="user.id==inputId" >
         <img :src="user.headImage" class="headImg">
         <span class='base_info'>
          <h2>会员名：{{user.userName}}</h2>
     
          <h2>手机号：{{user.tel}}</h2>
          <h2>地址：{{user.address}}</h2>
        </span>
      </li>
    </ul>
  </div>
</div>


   
</template>
<script>
  // import "bootstrap/dist/css/bootstrap.min.css"
  // import "bootstrap/dist/js/bootstrap.min.js"
  import config from '@/config/config'
  export default {
    name: 'UserInfo',
    data () {
      return {
        inputId:null,
        inputPassword:'',
        Errpassword:false,
        user:config.user,
        islogin:false,
        flag:false
      }
    },
    methods:{
       login(){
        for(let i=0;i<this.user.length;i++){
          console.log('正在遍历。。。')
          if(this.inputId==this.user[i].id&&this.inputPassword==this.user[i].password){

            this.islogin=true;
            console.log('账号密码正确。。正在登陆。。。')
            this.flag=true;
            return null;
          }
        }
        this.Errpassword=true;
      },
    },
    computed: {
      searchUser(){
        return this.user.filter(user=>{
              if(user.password==this.inputPassword){
                // ES6中 includes( ) 方法：用来判断一个 数组/字符串 是否包含一个指定的值，如果是返回 true，不是返回false。
                  return user
              }
          })
      },
      result () {
        return {
          name:this.users.name,
          id:this.users.id,
          password:this.users.password
        }
      }
    }
  }
</script>
<style scoped>
  .Warrning{
    margin: 0 auto;
    text-align: center;
    width: 250px;
    height: 40px;
    line-height: 40px;
    background: rgb(207, 67, 67);
  }
  ul{
    list-style: none;
    padding: 0px;
    margin: 0px;
  }
  ul li{
   height: 200px;
  
   padding: 20px 0px;
  }
 .content {
    width: 1120px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
  }
  .base_info{
    display:inline-block;
    text-align: left;
  }
  span {
    display: inline;
    margin-left: 20px;
  }
  .headImg{
    vertical-align: middle;
    width: 200px;
    height: 200px;
  }


</style>
<style scoped>
.login-wrap {
  text-align: center;
}

h3 {
  text-align: center;
}
span {
  text-align: center;
}
input {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  margin-bottom: 10px;
  outline: none;
  border: 1px solid #888;
  padding: 10px;
  box-sizing: border-box;
}

.NoAccount {
  color: red;
  text-align: center;
}

button {
  display: block;
  width: 250px;
  height: 40px;
  line-height: 40px;
  margin: 0 auto;
  border: none;
  background-color: #41b883;
  color: #fff;
  font-size: 16px;
  margin-bottom: 5px;
}

span {
  cursor: pointer;
}


</style>

