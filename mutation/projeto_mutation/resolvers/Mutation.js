const { users, nextId } = require('../data/db')
const { noSubselectionAllowedMessage } = require('graphql/validation/rules/ScalarLeafs')

module.exports = {
    newUser(_, {name, email, age}){
        //tendo os três dados será criado um novo usuário e adiciona-lo dentro do array de usuários (users) através do método PUSH
        const user = {
            id: nextId(),
            name,
            email,
            age,
            profile_id: 1,
            status: 'ACTIVE'
        }

        users.push(user)
        //Com o mutation pode-se receber algo como resposta nesse caso será enviiado o novo usuário
        return user
    }
}