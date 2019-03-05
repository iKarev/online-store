import { IProduct } from './product'

export default interface IState {
  cart: IProduct[],
  products: IProduct[],
  currentProduct: IProduct | null
}
