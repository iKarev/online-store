import Vue from 'vue'
import Router from 'vue-router'
import Products from './views/Products.view.vue'
import Product from './views/Product.view.vue'
import Cart from './views/Cart.view.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products,
    },
    {
      path: '/product/:id',
      name: 'product',
      component: Product,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
  ],
})
