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

//agregar un contacto
router.post('/addContacto', (req,res) =>{
    let contacto = "(\'" + req.body.Nombres + "\',\'" + req.body.Apellidos + "\',\'" + req.body.Telefono + "\',\'" + req.body.Correo + "\',false,false)"
    let consulta = `INSERT INTO Contacto
    (Nombres,Apellidos,Telefono,Correo,Favorito,Eliminar)
    VALUES ` + contacto;
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});

//editar un contacto
router.put('/updateContacto/:id', (req,res) =>{
    let contacto = "UPDATE Contacto SET Nombres=\'" + req.body.Nombres + "\',Apellidos=\'" + req.body.Apellidos + "\',Telefono=\'" + req.body.Telefono + "\',Correo=\'" + req.body.Correo + "\'"
    let consulta = contacto + ' WHERE Id = ' + req.params.id;
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});

//eliminar un contacto
router.delete('/deleteContacto/:id', (req,res) =>{
    let contacto = "DELETE FROM Contacto "
    let consulta = contacto + ' WHERE Id = ' + req.params.id;
    mysqlConnection.query(consulta, (err, rows, fields) => {
        if (!err){
            res.json(rows);
        }else {
            console.log(err);
        }
    })
});

//CRUD
//CREATE
//UPDATE
//DELETE

module.exports = router;