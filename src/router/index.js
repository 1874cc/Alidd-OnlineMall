import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Cart from '@/components/Cart'
import Order from '@/components/Order'
import Goods from '@/components/Goods'
import UserInfo from '@/components/UserInfo'
import Search from'@/components/Search'
import Collection from '@/components/Collection'
import Merchants from'../components/Merchants'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
    {
      path: '/cart',
      name: 'Cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'Order',
      component: Order
    },
    {
      path:'/userinfo',
      name:'UserInfo',
      component:UserInfo
    },
    {
      path:'/search',
      name:'Search',
      component:Search
    },
    {
      path:'/collection',
      name:'Collection',
      component:Collection
    },
    {
      path:'/merchants',
      name:'Merchants',
      component:Merchants
    }
  ]
})

