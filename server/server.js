const jsonServer = require('json-server');
const auth = require('json-server-auth');
const server = jsonServer.create();
const path = require('path');
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

const rules = auth.rewriter({
    users: 600,
});

server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(auth);
server.use(router);
server.use(rules);

const port = 4000;
server.listen(port, () => {
    console.log(`JSON Server is running, port(${port})`);
});

// npx json-server ./data.json --port 4000 db 생성
// npm start
