const Query = require('./Query')
const User = require('./User')
const Mutation = require('./Mutation/index')//o /index é opcional pois o pragrama irá procurar inicialmente pelo arquivo index assim que entrar na pasta
//modelo de modulos do nodejs

//será passo como referência para criar o apollo server
module.exports = {
    Query,
    Mutation,
    User
}