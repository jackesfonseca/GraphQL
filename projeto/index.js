const { ApolloServer, gql } = require('apollo-server')
const { argsToArgsConfig } = require('graphql/type/definition')

const users = [{
    id: 1,
    name: 'Bob',
    email: 'bob@gmail.com',
    age: 30,
    profile_id: 2
}, {
    id: 2,
    name: 'Ana',
    email: 'ana@gmail.com',
    age: 16,
    profile_id: 1    
}, {
    id: 3,
    name: 'Dean',
    email: 'dean@gmail.com',
    age: 20,
    profile_id: 1
}]

const profiles = [
    {id: 1, name: 'common'},
    {id: 2, name: 'adm'}
]

const typeDefs = gql`
    #Ponto de entrada da API!
    #Consulta

    #criando scalar
    scalar Date

    #criando novo tipo
    
    type Profile{
        id: Int
        name: String
    }

    type User{
        id: Int	
		name: String
		email: String
		age: Int
		salary: Float
        vip: Boolean
        profile_id: Int
        profile: Profile
    }
    
    type Product{
        name: String!
        price: Float!
        discount: Float!
        discountPrice: Float
    }


    type Query{
        #Definição da consulta ola do tipo String
        ola: String
        horaAtual: String
        hora: Date
        userMaster: User
        featuredProduct: Product
        megaSenaNumbers: [Int!]!
        users: [User]
        user(id: Int): User
        profiles: [Profile]
        profile(id: Int): Profile
    }
`

const resolvers = {
    Product: {
        discountPrice(product){
            if(product.discount){
                return product.price * (1 - product.discount)
            }else{
                return product.price
            }
        }
    },
    User: {
        salary(user){
            return user.salary_real
        },
        profile(user){
            const selected = profiles.filter(p => p.id === user.profile_id)
            return selected ? selected[0] : null
        }
    },

    //será criado um resolver para consulta
    //Query representa um objeto em javascript
    Query: {
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

}

const server = new ApolloServer ({
    typeDefs,
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})