const { ApolloServer, gql } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')//basta importar a pasta que já lê o index.js
const schemaPath = './schema/index.graphql'

//os resolvers são passados para a criação do servidor
const server = new ApolloServer ({
    typeDefs: importSchema(schemaPath),
    resolvers
})

server.listen().then(({ url }) => {
    console.log(`Executando em ${url}`)
})