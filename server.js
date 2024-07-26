import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'


dotenv.config()
const port = process.env.PORT ||8080
const app = express()

app.get('/',(req,res)=>{
  res.send("<h1>Welcome to job portal</h1>")
})

app.listen(port,()=>{
  console.log("running".bgWhite.bold)
})