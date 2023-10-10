import {Router} from 'express'
const router = Router()

import ProductService from '../services/products.service.js'
const product = new ProductService()
//ok
router.get('/',async (req,res) => {
    try {
        const productos = await product.getProducts()
        return res.status(200).json(productos)
    } catch (err) {
        console.log('error'+err)
    }
})

router.post('/',async (req,res) =>{
    const producto = req.body
    const respuesta = await product.addProduct(producto)
    res.status(200).json(respuesta)
}) 

router.delete('/:id',async(req,res)=> {
    const producto = req.body
    const respuesta = await  product.deleteProduct(producto)
    res.status(200).json(respuesta)
})

router.put('/:id',async(req,res) =>{
    const producto = req.body
    const respuesta = await  product.updateProduct(producto)
    res.status(200).json(respuesta)
})

router.get('/id', async(req,res)=>{
    const producto = req.body
    const respuesta = await  product.getProductsById(producto)
    res.status(200).json(respuesta)
})
export default router