import { IProductInCart } from '@/interfaces/product'

export function getCart() {
  const cart = localStorage.getItem('os-cart')
  if (cart)
    return JSON.parse(cart)
}

export function saveCart(cart: IProductInCart[]) {
  localStorage.setItem('os-cart', JSON.stringify(cart))
}
