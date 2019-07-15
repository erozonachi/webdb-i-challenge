const acctModel = require('../data/models/accounts');
module.exports = {
  validateId: async (req, res, next) => {
    try {
      const { id } = req.params;

      const account = await acctModel.get(id);
      if(account[0] && account[0].name) {
        req.account = account;
        return next();
      }
      res.status(400).json({ message: 'Invalid account id' });
    } catch(error) {
      res.status(500).json({ error: 'server error' });
    }
  },
}
