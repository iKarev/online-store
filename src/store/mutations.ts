import State from '../interfaces/state'
import { IProduct, IProductInCart } from '../interfaces/product'

import { saveCart } from '@/helpers/storage'

export default {
  setProductsList(state: State, products: IProduct[]) {
    state.products = products.map(p => {
      p.price = setFakePrice(p)
      return p
    })
  },

  setCurrentProduct(state: State, product: IProduct) {
    product.price = setFakePrice(product)
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
      cart.unshift({product, count: 1})
    saveCart(cart)
  },
  decreaseProductInCart(state: State, id: number) {
    const item = state.cart[getProductIndex(state.cart, id)]
    if (item.count < 1)
      return

    item.count--
    saveCart(state.cart)
  },
  removeProductFromCart(state: State, id: number) {
    state.cart.splice(getProductIndex(state.cart, id), 1)
    saveCart(state.cart)
  },
  clearCart(state: State, product: IProduct) {
    state.cart = []
    saveCart(state.cart)
  },
}

function getProductIndex(cart: IProductInCart[], id: number) {
  return cart.findIndex(item => item.product.id === id)
}

// Имитация единой цены, приходящей с сервера
function setFakePrice(p: IProduct): number {
  return (p.albumId * (p.id % 13) * 7.3) + 9
}
