const db = require('../../data/db-config');

async function getAll() {
  return db('cultures');
}

async function getBy(id) {
  return db('cultures').where('id', id).first();
}
async function postNew(image) {
  return 'postNew';
}
module.exports = {
  getAll,
  getBy,
  postNew,
};
