import { IProduct, IProductInCart } from './product'

export default interface IState {
  cart: IProductInCart[],
  products: IProduct[],
  currentProduct: IProduct | null
}
