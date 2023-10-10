import express from 'express'
import ProductRouter from './src/routes/products.router.js'
import __dirname from './src/utils.js'
//import config from '../ProyectoVentas/src/config/config.js'
import config from './src/config/config.js'

const app = express()

app.use(express.static(`${__dirname}/public`))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//app.use('/api/clientes',ProductRouter)
app.use('/api/productos',ProductRouter)

app.listen(8085,()=>{console.log('listen on port 8085')})