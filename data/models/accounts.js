const db = require('../dbConfig');

module.exports = {
  insert: function ({ name, budget }) {
    return db('accounts')
    .insert({ name, budget })
    .then(([id]) => this.get(id));
  },

  get: function (id = null, limit = 50, sortby = 'id', sortdir = 'asc') {
    if(id) {
      return db('accounts')
        .where({ id });
    }
    return db('accounts')
      .orderBy(sortby, sortdir)
      .limit(limit);
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
