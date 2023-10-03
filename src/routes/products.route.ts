import { Router } from 'express'
import ProductsController from '../controllers/products.controller'

const productsRouter = Router()
const productsInstance = new ProductsController()

productsRouter.get('/', productsInstance.allProducts)

productsRouter.get('/:id', productsInstance.singleProduct)

export default productsRouter
