import express from 'express'
import helmet from 'helmet'

const app = express()
app.use(helmet())
app.use(express.json())

app.listen(3033)
console.log('running on port 3033')