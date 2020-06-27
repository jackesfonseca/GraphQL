const { profiles, nextId } = require('../../data/db')

function profileIndex(filter){
    if(!filter) return -1

    const { id } = filter //desistruturando email e id
    if(id){
        return users.findIndex(u => u.id === id)
    }
    return -1
}
module.exports = {
    newProfile(_, { datas }){

        //{ name }
        //tendo os três dados será criado um novo usuário e adiciona-lo dentro do array de usuários (users) através do método PUSH
        const existenteName = profiles.some(u => u.name === datas.name)

        if(existenteName){
            throw new Error('Perfil já cadastrado')
        }

        const profile = {
            id: nextId(),
            ...datas, //adiciona todos os atributos dentro do objeto
        }

        profiles.push(profile)
        //Com o mutation pode-se receber algo como resposta nesse caso será enviiado o novo perfil
        return profile
    },

    //operador destructring
    deleteProfile(_, { filter }){
        const index = userIndex(filter)

        if(index < null) return null

        const excludeds = profiles.splice(index, 1)//splice serve para excluir/substituir um elemento (o primeiro paâmetro é o lemento que se deseja ecluir e o segundo é a quantidade)
        return excludeds ? excludeds[0] : null 
    },

    changeProfile(_, { filter, datas }){
        const index = userIndex(filter)

        if(index < null) return null

        const profile = {
            ...profiles[index],//obtém todas as informações do usuário
            ...datas//os valores dos argumentos terão preferência sobre o usuário atual
        }
        
        profiles.splice(index, 1, profile)
        return profile
    }
}
