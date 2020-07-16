const db = require('../config/db')

//escluir por id
db('usuarios').where({ id: 1 })
    .delete()
    .then(res => console.log(res))//não irá retornar o id excluido mas a quantidade
    .finally(() => db.destroy())

//excluir tabela
db('perfis')
    .delete()
    .then(res => console.log(res))//não irá retornar o id excluido mas a quantidade
    .finally(() => db.destroy())