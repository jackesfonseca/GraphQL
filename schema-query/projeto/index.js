const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')//basta importar a pasta que já lê o index.js
const schemaPath = './schema/index.graphql'

const server = new ApolloServer ({
    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})

//ATENÇÃO

/*
OBS: como o graphql será imprtado não é necessário desse trecho de código
*/

/*const typeDefs = gql`
//  
`
*/

/*
OBS: Como os resolvers foram exportados esta função não será necessária
*/

/*const resolvers = {
    Product: {
        
    },
    User: {
        
    },

    //será criado um resolver para consulta
    //Query representa um objeto em javascript
    Query: {
        
    }

}
*/

//instanciação do apollo server