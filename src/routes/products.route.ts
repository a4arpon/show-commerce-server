import { Router } from 'express'
import productsController from '../controllers/products.controller'

const productsRouter = Router()
const productsInstance = new productsController()

productsRouter.get('/', productsInstance.allProducts)

productsRouter.get('/:id', productsInstance.singleProduct)

export default productsRouter
