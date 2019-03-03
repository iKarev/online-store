import Vue from 'vue'
import Router from 'vue-router'
import Products from './views/Products.vue'
import Item from './views/Item.vue'
import Cart from './views/Cart.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'products',
      component: Products,
    },
    {
      path: '/item/:id',
      name: 'item',
      component: Item,
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart,
    },
  ],
})
