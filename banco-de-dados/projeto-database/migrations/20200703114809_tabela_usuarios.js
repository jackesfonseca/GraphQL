//incrementa o banco de dados
exports.up = function(knex) {
    return knex.schema.createTable('usuarios', table => {
        table.increments('id').primary()
        table.string('nome').notNull()
        table.string('email').notNull().unique()
        table.string('senha').notNull()
        table.boolean('ativo', 60).notNull().defaultTo(true)
        table.timeStamp('data_criacao').defaultTo(knex.fn.now())
    })
};
//decrementa o banco de dados
exports.down = function(knex) {
    return knex.schema.dropTable('usuarios')
};
