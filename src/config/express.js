import express from 'express'
import cors from 'cors'

import loggerMiddleware from '../middlewares/logger'
import routes from '../routes/index'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(loggerMiddleware)
app.use(routes)

export default app
