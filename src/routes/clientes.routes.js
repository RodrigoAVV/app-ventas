import {Router} from 'express'
const router = Router()

import ClientesService from '../services/clientes.service.js'
const cliente = new ClientesService()

router.get('/',async(req,res) => {
    try {
        const clientes = await cliente.getClientes()
        return res.status(200).json(clientes)
    } catch (error) {
        console.log('error')
    }
})

router.delete('/',async(req,res) => {
    res.status(200).json({success:true,message:'hola desde ruta delete'})
})

export default router