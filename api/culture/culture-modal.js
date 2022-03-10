const db = require('../../data/db-config');

async function getAll() {
  return db('culture');
}
async function findForming() {
  return db('culture').where('forming', true);
}
async function findNonforming() {
  return db('culture').where('forming', false);
}
async function findUnclassified() {
  return db('culture').where('forming', null);
}

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
  findForming,
  findUnclassified,
  findNonforming,
};
