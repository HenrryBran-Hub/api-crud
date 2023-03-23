const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');


//lista de contactos
router.get('/getContactos',(req, res) => {
    let consulta = `SELECT *
    FROM contacto`;
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});

module.exports = router;