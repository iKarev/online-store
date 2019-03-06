import Vue from 'vue'
import Router from 'vue-router'
import Products from './views/Products.view.vue'
import Product from './views/Product.view.vue'
import Cart from './views/Cart.view.vue'
import NotFound from './views/NotFound.view.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    { path: '/', name: 'products', component: Products},
    { path: '/product/:id', name: 'product', component: Product},
    { path: '/cart', name: 'cart', component: Cart},
    { path: '/notFound', component: NotFound},
  ],
})

router.beforeEach((to, from, next) => {
  if (!to.matched.length)
    next('/notFound')
  else
    next()
})

export default router
