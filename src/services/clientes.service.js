import config from '../config/config.js'
import knex from 'knex'
export default class ClientesService{
    constructor(){
        this.knex = knex(config)
    }

    async getClientes(){
        const clientes = await this.knex.from('clientes').select('*')
        return Object.values(JSON.parse(JSON.stringify(clientes)))
    }

}