export interface IProduct {
  albumId: string,
  id: string,
  title: string,
  url: string,
  thumbnailUrl: string,
}

export interface IProductInCart {
  product: IProduct,
  count: number,
}
