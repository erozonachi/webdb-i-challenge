const db = require('../dbConfig');

module.exports = {
  insert: ({ name, budget }) => {
    return db('accounts').insert({ name, budget }, ['id', 'name', 'budget']);
  },

  get: (id = null) => {
    if(id) {
      return db('accounts')
        .where({ id });
    }
    return db('accounts');
  },

  update: (id, { name, budget }) => {
    return db('accounts')
      .where({ id })
      .update({ name, budget });
  },

  remove: (id) => {
    return db('accounts')
      .where({ id })
      .del();
  },
};
