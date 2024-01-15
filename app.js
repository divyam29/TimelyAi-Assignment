const express = require('express');
require('dotenv').config();
const bodyparser = require('body-parser');
const sequelize = require('./util/database');
const Posts = require('./models/posts');

const app = express();
var port = 8000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.get('/', (req, res) => res.json({ message: 'Hello World' }));
app.use('/posts', require('./routes/crud'));
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});

sequelize
    .sync()
    .then((result) => {
        console.log('Database connected');
        app.listen(port, () => {
            console.log(`Server running at http://localhost:${port}`);
        });
    })
    .catch((err) => console.log(err));
