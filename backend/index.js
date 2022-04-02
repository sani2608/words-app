const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json(0));



var mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'wordListdb'
});


mysqlConnection.connect((err) => {
    if (!err) {
        console.log('DB connection succeded.');
    } else {
        console.log('DB connection failed \n Error : ' + JSON.stringify(err, undefined, 2));
    }
})


app.listen(3000, () => console.log('Express server is runnig at port no : 3000'));

app.get('/wordlist', (req, res) => {
    mysqlConnection.query('SELECT * FROM wordlist', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        console.log(rows);
    })
});


app.delete('/wordlist/:id', (req, res) => {
    mysqlConnection.query('DELETE FROM wordlist WHERE id= ?; ', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        console.log(rows);
    })
});

app.get('/wordlist/:name', (req, res) => {
    mysqlConnection.query(`INSERT INTO wordlist (word) VALUES (?);`, [req.params.name], (err, rows, fields) => {
        if (!err)
            res.send(rows);
        console.log(rows);
    })
});
