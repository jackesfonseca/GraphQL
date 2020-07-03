//incrementa o banco de dados
exports.up = function(knex) {
    return knex.schema.createTable('prefis', table => {
        table.increments('id').primary()
        table.string('nome').notNull().unique()
        table.string('rotulo').notNull()
    })
};
//decrementa o banco de dados
exports.down = function(knex) {
  
};
