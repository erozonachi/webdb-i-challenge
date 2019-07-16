const server = require('./server.js');
const routes = require('./routes/accountsRoute');

const PORT = process.env.PORT || 4000;

server.use('/api/accounts', routes);

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});