exports.up = async function (knex) {
  await knex.schema.createTable('culture', (table) => {
    table.increments(); // primary of id auto incrementing
    table.text('url').unique().notNullable();
    table.text('lastModified', 128).notNullable();
    table.boolean('forming');
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('culture');
};
