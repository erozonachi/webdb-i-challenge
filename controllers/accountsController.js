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

  read: async (req, res) => {
    try {
      if(req.account) {
        return res.status(200).json(req.account);
      }
      const accounts = await acctModel.get();

      res.status(200).json(accounts);
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },

  update: async (req, res) => {
    try {
      const account = await acctModel.update(req.account.id, req.body);
      res.status(200).json(account[0]);
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },

  delete: async (req, res) => {
    try {
      await acctModel.remove(req.account.id);
      res.status(200).json({ message: 'Delete successful' });
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },
}
