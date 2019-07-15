const db = require('../dbConfig');

module.exports = {
  insert: function ({ name, budget }) {
    return db('accounts')
    .insert({ name, budget })
    .then(([id]) => this.get(id));
  },

  get: function (id = null) {
    if(id) {
      return db('accounts')
        .where({ id });
    }
    return db('accounts');
  },

  update: function (id, { name, budget }) {
    return db('accounts')
      .where({ id })
      .update({ name, budget })
      .then(count => (count > 0 ? this.get(id) : null));
  },

  remove: function (id) {
    return db('accounts')
      .where({ id })
      .del();
  },
};
