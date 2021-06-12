const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')

const app = express();
dotenv.config({path: 'config.env'})
const port = process.env.port

app.use(morgan('tiny'));

app.get('/', (req,res) => {
    res.send('crud application');
});

app.listen(port, () => {
    console.log(`server is running on port https://localhost:${port}`)
});