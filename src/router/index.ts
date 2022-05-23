import {
  createRouter,
  createWebHistory,
  RouteRecordRaw,
  createWebHashHistory,
} from 'vue-router'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue'),
  },
  {
    path: '/create-wallet',
    name: 'create-wallet',
    component: () => import('../views/CreateWallet.vue'),
  },
  {
    path: '/wallet/:id',
    name: 'wallet',
    component: () => import('../views/Wallet.vue'),
  },
  {
    path: '/wallets',
    name: 'wallets',
    component: () => import('../views/ViewWallets.vue'),
  },
  {
    path: '/utxo-checker',
    name: 'utxo-checker',
    component: () => import('../views/UTXOChecker.vue'),
  },
]

const router = createRouter({
  //electron only works with hash
  history: process.env.IS_ELECTRON
    ? createWebHashHistory()
    : createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 }
  },
})

export default router

//createWebHistory(process.env.BASE_URL)
