import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import testRoutes from './routes/testRoutes.js'

dotenv.config()

import connectdb from './config/db.js'
const port = process.env.PORT ||8080
const app = express()

connectdb()

app.use('/api/v1/test',testRoutes)

app.listen(port,()=>{
  console.log("running".bgWhite.bold)
})

