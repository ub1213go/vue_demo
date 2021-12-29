import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Price from '../views/Price.vue'
import SelfChoice from '../views/SelfChoice.vue'
import Hold from '../views/Hold.vue'
import Member from '../views/Member.vue'
import Recharge from '../views/Recharge.vue'
import Draw from '../views/Draw.vue'
import MemberModify from '../views/MemberModify.vue'
import StockPurchase from '../views/StockPurchase.vue'
import Verified from '../views/Verified.vue'
import DepositoryAccount from '../views/DepositoryAccount.vue'
import MoneyDetail from '../views/MoneyDetail.vue'
import RechargeDetail from '../views/RechargeDetail.vue'
import AddAccount from '../views/AddAccount.vue'
import PriceDetail from '../views/PriceDetail.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Search from '../views/Search.vue'
import NewsDetail from '../views/NewsDetail.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/price/:id?',
    name: 'Price',
    component: Price
  },
  {
    path: '/selfchoice',
    name: 'SelfChoice',
    component: SelfChoice
  },
  {
    path: '/hold/:id?',
    name: 'Hold',
    component: Hold
  },
  {
    path: '/member',
    name: 'Member',
    component: Member
  },
  {
    path: '/recharge',
    name: 'Recharge',
    component: Recharge
  },
  {
    path: '/draw',
    name: 'Draw',
    component: Draw
  },
  {
    path: '/membermodify',
    name: 'MemberModify',
    component: MemberModify
  },
  {
    path: '/stockpurchase',
    name: 'StockPurchase',
    component: StockPurchase
  },
  {
    path: '/verified',
    name: 'Verified',
    component: Verified
  },
  {
    path: '/depositoryaccount',
    name: 'DepositoryAccount',
    component: DepositoryAccount
  },
  {
    path: '/moneydetail',
    name: 'MoneyDetail',
    component: MoneyDetail
  },
  {
    path: '/rechargedetail',
    name: 'RechargeDetail',
    component: RechargeDetail
  },
  {
    path: '/addaccount',
    name: 'AddAccount',
    component: AddAccount
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  },
  {
    path: '/newsdetail/:code?',
    name: 'NewsDetail',
    component: NewsDetail
  },
  {
    path: '/pricedetail/:code?',
    name: 'PriceDetail',
    component: PriceDetail
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
