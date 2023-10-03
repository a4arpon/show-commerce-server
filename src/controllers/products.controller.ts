import { Request, Response } from 'express'
import { errorHandler } from '../errors/error'
import { productType } from '../types/product.type'
import data from '../utils/dummyData.json'

const products = data as productType[]

export default class ProductsController {
  constructor() {}

  public async allProducts(req: Request, res: Response): Promise<void> {
    try {
      await Promise.resolve().then(async () => {
        res.status(200).json(products)
      })
    } catch (err: unknown) {
      await errorHandler(err, res)
    }
  }

  public async singleProduct(req: Request, res: Response): Promise<void> {
    try {
      await Promise.resolve().then(async () => {
        const { id } = req.params
        const product = products.find((item) => item._id === id)
        res.status(200).json(product)
      })
    } catch (err) {
      await errorHandler(err, res)
    }
  }
}
