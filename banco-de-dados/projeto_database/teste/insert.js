const db = require('../config/db')

// const novoPerfil = {
//     nome: 'visitante',
//     rotulo: 'Visitante'
// }

// //ctrl + alt + n para executar e ctrl + alt + m para parar
// //OBS1.: o THEN, CATHC, FINALLY são chamados de promisse
// //OBS2.: o .finally(() => db.destroy()) não seria usado em uma API real pois o próprio knex ficaria responsável pelo gerenciamento das conecções (localizado no knexfile/pool)
// db('perfis').insert(novoPerfil).then(res => console.log(res)).catch(err => console.log(err.sqlMessage)).finally(() => db.destroy())

const perfilSU = {
    nome: 'root' + Math.random(),
    rotulo: 'Super Usuario'
}

//No MySQL ficaria
//INSERT INTO perfis(nome, rotulo)
//VALUES('...', '...')

db.insert(perfilSU).into('perfis')
    .then(res => res[0])
    .then(res => console.log(res))
    .catch(err => console.log(err.sqlMessage))
    .finally(() => db.destroy())