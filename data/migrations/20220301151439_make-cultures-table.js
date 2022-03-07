exports.up = async function (knex) {
  await knex.schema.createTable('culture', (table) => {
    table.increments(); // primary of id auto incrementing
    table.text('url');
    table.text('lastModified', 128);
    table.boolean('forming');
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTableIfExists('culture');
};
