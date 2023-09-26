
import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import Connection from './util/db.js'
import UserRoutes from './routes/user.js'
import BlogRoutes from './routes/blogRoutes.js'
import ProductRoutes from './routes/productRoutes.js'
import CategoryRoutes from './routes/categoryRoutes.js'
import dotenv from 'dotenv'
import morgan from 'morgan'

dotenv.config()

const app=express()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
Connection()
app.use('/user',UserRoutes)
app.use('/product',ProductRoutes)
app.use('/blog',BlogRoutes)
app.use('/category',CategoryRoutes)
app.listen(process.env.PORT,()=>{
    console.log('Server started')
})