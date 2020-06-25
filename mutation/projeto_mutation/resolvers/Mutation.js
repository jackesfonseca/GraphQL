const { users, nextId } = require('../data/db')
const { noSubselectionAllowedMessage } = require('graphql/validation/rules/ScalarLeafs')
const { duplicateVariableMessage } = require('graphql/validation/rules/UniqueVariableNames')

function userIndex(filter){
    if(!filter) return -1

    const { id, email } = filter //desistruturando email e id
    if(id){
        return users.findIndex(u => u.id === id)
    }else if(email){
        return email.findIndex(u => u.email === email)
    }
}
module.exports = {
     //{ name, email, age}

    newUser(_, { datas }){
        //tendo os três dados será criado um novo usuário e adiciona-lo dentro do array de usuários (users) através do método PUSH
        const existenteEmail = users.some(u => u.email === datas.email)

        if(existenteEmail){
            throw new Error('E-mail já cadastrado')
        }

        const user = {
            id: nextId(),
            ...datas, //adiciona todos os atributos dentro do objeto
            profile_id: 1,
            status: 'ACTIVE'
        }

        users.push(user)
        //Com o mutation pode-se receber algo como resposta nesse caso será enviiado o novo usuário
        return user
    },

    //operador destructring
    deleteUser(_, { id }){
        const index = users.findIndex(u => u.id === id)

        if(index < null) return null

        const excludeds = users.splice(index, 1)//splice serve para excluir/substituir um elemento (o primeiro paâmetro é o lemento que se deseja ecluir e o segundo é a quantidade)
        return excludeds ? excludeds[0] : null 
    },

    changeUser(_, args){
        const index = users.findIndex(u => u.id === args.id)

        if(index < null) return null

        const user = {
            ...users[index],//obtém todas as informações do usuário
            ...args//os valores dos argumentos terão preferência sobre o usuário atual
        }
        
        users.splice(index, 1, user)
        return user
    }
}
