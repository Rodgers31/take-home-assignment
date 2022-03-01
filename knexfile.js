// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data.form.db3',
    },
    useNullAsDefault: true,
  },

  testing: {
    //etc
  },

  production: {
    //etc
  },
};
