const db = require('../config/db')


const novoUsuario = {
    nome: 'Bob',
    email: 'bob@company.com',
    senha: '12345678'
}
//update... db('').where({}).update({})

async function exercicio() {
    const { qtde } = await db('usuarios').count('* as qtde').first()// as chaves em {qtde} é um operador de desustruturação 
        
    //inserir se a tabela estiver vazia
    if(qtde === 0){
        await db('usuarios').insert(novoUsuario)//o await faz com o trecho seja executado
    }

    //consultar
    let { id } = await db('usuarios')
        .select('id').limit(1).first()

    console.log(id)

    //alterar
    await db('usuarios').where({ id})
        .update({ nome: 'Bob Singer'})

    return await db('usuarios').where({ id })
}

exercicio()
    .then(usuario => console.log(usuario))
    .finally(() => db.destroy())