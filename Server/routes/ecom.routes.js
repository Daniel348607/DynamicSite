const express = require('express');
const router = express.Router();

//const configMensaje = require('../email');

const ecom = require('../controllers/ecom.controller');


//////////////////////////////////////////////////////////////////////////
//Routers Usuarios
router.post('/usuariologin', ecom.getUsuarioLogin); //Devuelvo si el usuario se puede logear
router.get('/usuario/:id', ecom.getUsuario); //Devuelvo los usuarios



//////////////////////////////////////////////////////////////////////////
//Routers Parametros UIX
router.get('/getparamuix/:val', ecom.getparamUIX); //Devuelve los valores para la configuracion de la UIX



module.exports = router;


