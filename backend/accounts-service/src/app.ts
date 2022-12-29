import express from 'express'
import helmet from 'helmet'
import router from './routes/accounts'

export const app = express()
app.use(helmet())
app.use(express.json())
app.use(router)