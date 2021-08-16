const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./server/db.json')
const middlewares = jsonServer.defaults()

const users = [
    { name: 'user1', password: 'user@123' },
    { name: 'user2', password: 'user@2' },
    { name: 'user3', password: 'user@3' },
];

let user = {};

const isAuthorized = (req) => {
    const username = req.get('authorization');
    return user.name && username === user.name;
}

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// Add custom routes before JSON Server router
server.get('/echo', (req, res) => {
    res.jsonp(req.query)
})

server.use(jsonServer.bodyParser);
server.post('/authenticate', (req, res) => {
    if (req.body) {
        const { username, password: pwd } = req.body;
        const match = users.find(item => (item.name === username && item.password === pwd))
        if (match) {
            user = { ...match }
            res.status(200).send({ user: { username: match.name } });
        } else {
            res.status(404).send({ user: {} });
        }
    }
    res.status(403).send();
});

server.use((req, res, next) => {
    if (isAuthorized(req)) { // add your authorization logic here
        next() // continue to JSON Server router
    } else {
        res.sendStatus(401)
    }
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
// server.use(jsonServer.bodyParser)
server.use((req, res, next) => {
    if (req.method === 'POST') {
        req.body.createdAt = Date.now()
    }
    // Continue to JSON Server router
    next()
})

server.use(router);

// Use default router
server.listen(3000, () => {
    console.log('JSON Server is running')
})