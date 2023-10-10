import config from '../config/config.js'
import knex from 'knex'
export default class ProductService{

    constructor(){
        this.knex = knex(config)
    }

    getProducts = async() =>{
        const productos = await this.knex.from('productos').select('*')
        return Object.values(JSON.parse(JSON.stringify(productos)))
    }
    
    
    addProduct = async(producto) =>{
      return this.knex ('productos').insert(producto)
    }

    deleteProduct = async (id) => {
        return this.knex('productos')
        .where('activated', false)
        .del(id)
    }

    updateProduct = async (id,objProduct,) => {
       return this.knex('products').update(id)
    }

    getProductsById = async(id) =>{
    const productId = 1
            this.knex('productos')
    .select('*')
    .where('id', productId)
    .then((rows) => {
        if (rows.length > 0) {
        const producto = rows[0];
        console.log(producto);
        } else {
        console.log('No se encontró ningún producto con el ID especificado.');
        }
    })
    .catch((error) => {
        console.error('Error al obtener el producto por ID:', error);
    })
    .finally(() => {
        knex.destroy();
    });
    
    }
}
