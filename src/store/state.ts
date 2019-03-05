import { getCart } from '@/helpers/storage'

export default {
  cart: getCart() || [],
  products: [],
  currentProduct: null,
}
