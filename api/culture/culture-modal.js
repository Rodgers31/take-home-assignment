const db = require('../../data/db-config');

async function getAll() {
  return db('culture');
}
// async function findBy(filter) {
//   return db('culture').where(filter);
// }

async function getById(id) {
  return db('culture').where('id', id).first();
}
async function update(id, newInfo) {
  return db('culture').where('id', id).update(newInfo);
}
module.exports = {
  getAll,
  getById,
  update,
};
