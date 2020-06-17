//importar os arrays Profile e Users

const {users, profiles} = require('../data/db')

//exportar todos os resolvers dentro de Query

module.exports = {
    //função que retorna a string
    ola(){
        return 'Hello World'
    },
    horaAtual(){
        return `${new Date()}`
    },
    hora(){
        return new Date()
    },
    userMaster(){
        return{
            id: 1,
            name: 'Bob',
            email: 'bob@gmail.com',
            age: 20,
            salary_real: 1260.95,
            vip: true
        }
    },

    featuredProduct(){
        return{
            name: 'Stove',
            price: 1000.00,
            discount: 0.25
        }
    },

    megaSenaNumbers(){
        const crescente = (a, b) => a-b
        return Array(6).fill(0).map(n=> parseInt(Math.random() * 60 + 1)).sort(crescente)
    },

    users(){
        return users
    },

    user(_, args){
        const selected = users.filter(u => u.id === args.id)
        return selected ? selected[0] : null
    },

    profiles(){
        return profiles
    },

    profile(_, args){
        const selected = profiles.filter(p => p.id === args.id)
        return selected ? selected[0] : null           
    }
}