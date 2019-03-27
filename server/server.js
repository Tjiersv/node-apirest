const express = require('express');
require('./config/config');

const app = express();
const bodyParser = require('body-parser');

const PORT = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
    // parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.json('Get Usuario!')
})

app.post('/usuario', function(req, res) {
    let body = req.body;
    res.json(body);
})

app.put('/usuario/:id', function(req, res) {
    console.log('Param id: ', req.params.id);
    res.json('Put Usuario!')
})

app.delete('/usuario', function(req, res) {
    res.json('Delete Usuario!')
})

app.listen(process.env.PORT, () => {
    console.log(`Iniciando servidor express en el puerto ${process.env.PORT}`);
})