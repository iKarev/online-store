import State from '../interfaces/state'

export default {
  products(state: State) {
    return state.products
  },
  currentProduct(state: State) {
    return state.currentProduct
  },
  cart(state: State) {
    return state.cart
  },
  productsInCart(state: State) {
    return state.cart.reduce((sum, item) => sum += item.count, 0)
  },
  cartCost(state: State) {
    return state.cart.reduce((sum, item) => sum += (item.product.price * item.count), 0).toFixed(2)
  },
}
