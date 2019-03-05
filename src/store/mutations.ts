import State from '../interfaces/state'
import { IProduct } from '../interfaces/product'

export default {
  setProductsList(state: State, products: IProduct[]) {
    state.products = products
  },
  setCurrentProduct(state: State, product: IProduct) {
    state.currentProduct = product
  },
}
