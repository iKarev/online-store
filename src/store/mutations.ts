import State from '../interfaces/state'
import { IProduct, IProductInCart } from '../interfaces/product'

import { saveCart } from '@/helpers/storage'

export default {
  setProductsList(state: State, products: IProduct[]) {
    state.products = products
  },

  setCurrentProduct(state: State, product: IProduct) {
    state.currentProduct = product
  },
  clearCurrentProduct(state: State) {
    state.currentProduct = null
  },

  addProductToCart(state: State, product: IProduct) {
    const cart = state.cart
    const productIndex = getProductIndex(cart, product.id)
    if (productIndex > -1)
      cart[productIndex].count++
    else
      cart.push({product, count: 1})
    saveCart(cart)
  },
  decreaseProductInCart(state: State, id: string) {
    state.cart[getProductIndex(state.cart, id)].count--
    saveCart(state.cart)
  },
  removeProductFromCart(state: State, id: string) {
    state.cart.splice(getProductIndex(state.cart, id), 1)
    saveCart(state.cart)
  },
  clearCart(state: State, product: IProduct) {
    state.cart = []
    saveCart(state.cart)
  },
}

function getProductIndex(cart: IProductInCart[], id: string) {
  return cart.findIndex(item => item.product.id === id)
}








