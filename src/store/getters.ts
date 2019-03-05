import State from '../interfaces/state'

export default {
  products(state: State) {
    return state.products
  },
  currentProduct(state: State) {
    return state.currentProduct
  },
}
