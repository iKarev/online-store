export interface IProduct {
  albumId: number,
  id: number,
  price: number,
  title: string,
  url: string,
  thumbnailUrl: string,
}

export interface IProductInCart {
  product: IProduct,
  count: number,
}
