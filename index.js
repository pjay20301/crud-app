const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

const connectDB = require('./server/database/connection');

const app = express();

dotenv.config({path: 'config.env'})
const port = process.env.port

app.use(morgan('tiny'));

connectDB();

app.use(express.urlencoded({
    extended:true
}));

app.use(express.static('static'))

app.use(express.static('./server/routes/router.js'))

app.use('/', require('./server/routes/router'))

app.listen(port, () => {
    console.log(`server is running on port https://localhost:${port}`)
});