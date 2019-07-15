const db = require('../dbConfig');

module.exports = {
  insert: ({ name, budget }) => {
    return db('accounts').insert({ name, budget }, ['id', 'name', 'budget']);
  }
};