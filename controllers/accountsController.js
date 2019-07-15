const acctModel = require('../data/models/accounts');

module.exports = {
  create: async (req, res) => {
    try {
      const account = await acctModel.insert(req.body);
      res.status(201).json(account[0]);
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },
}
