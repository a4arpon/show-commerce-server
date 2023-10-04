import cors from 'cors'
import dotEnv from 'dotenv'
import express, { Application, Request, Response } from 'express'
import rateLimit from 'express-rate-limit'
import helmet from 'helmet'
import hpp from 'hpp'
import morgan from 'morgan'
import productsRouter from './routes/products.route'

class App {
  private app: Application

  constructor() {
    this.app = express()
    this.configurationMiddleware()
    this.establishConnection()
    this.setupRoutes()
  }

  private configurationMiddleware(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cors())
    this.app.use(morgan('dev'))
    this.app.use(helmet())
    this.app.use(hpp())
    this.app.use(
      rateLimit({
        windowMs: 10 * 60 * 1000,
        max: 100,
      })
    )
  }

  private setupRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.status(200).send('Server online. Are you ready to handle?')
    })
    this.app.use('/api/products', productsRouter)
  }

  private establishConnection(): void {
    const PORT = process.env.PORT || 4000
    this.app.listen(PORT, () => console.log('Server Running Port On ' + PORT))
  }
}
dotEnv.config()
new App()
