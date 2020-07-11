const db = require ('../config/db')//caminho relativo

//COMO CONSULTAR

//EX. 1: 
// db('perfis')
//     .then(res => res.map(p => p.nome))//pegará apenas o nome pode ser substituído conforme ex. 1
//     .then(nomes => console.log(nomes))
//     .finally(() => db.destroy())

//ex. 1: db('perfis').then(res => console.log(res))

//irá trazer um array de objetos

//EX. 2:
// db('perfis')
//     .select('nome', 'id')
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

//EX. 3:
// db.select('nome', 'id')
//     .from('perfis')
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

// //EX. 4:
// db.select('nome', 'id')
//     .from('perfis')
//     .limit(4)
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

//EX. 5:
// db.select('nome', 'id')
//     .from('perfis')
//     .limit(4).offset(0)
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

//EX. 6:
// db('perfis')
//     .where({ id: 2 })
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

//EX. 7:
// db('perfis')
//     .whereNot({ id: 2 })
//     .then(res => console.log(res))
//     .finally(() => db.destroy())

//EX. 8:
db('perfis')
    .whereIn('id', [1, 2, 3])
    .then(res => console.log(res))
    .finally(() => db.destroy())