const Query = require('./Query')
const User = require('./User')
const Mutation = require('./Mutation')
//modelo de modulos do nodejs

//será passo como referência para criar o apollo server
module.exports = {
    Query,
    Mutation,
    User
}