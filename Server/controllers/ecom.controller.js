const connection = require('../database');

const ecommCtrl = {};
let ProCod;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//USUARIOS
//Consulta Usuarios para Login
ecommCtrl.getUsuarioLogin = async (req, res, next) => {
    var usuariosali= req.body.username;
    var usuariospas= req.body.password;

    //console.log("SELECT * FROM usuarios where usuarioali = '" + usuariosali + "' and usuariopas = '" + usuariospas + "'");
    connection.query("SELECT * FROM usuarios where usuarioali = '" + usuariosali + "' and usuariopas = '" + usuariospas + "'", (err, result) => {    
        res.send(result);
})
};

//Consulta un usuario
ecommCtrl.getUsuario = async (req, res, next) => {
    connection.query('SELECT * FROM usuarios where UsuarioId = '+ req.params.id, (err, result) => {
    res.send(result);
})
};



//////////////////////////////////////////////////////////////////////////
// Parametros UIX
ecommCtrl.getparamUIX = async (req, res, next) => {
    connection.query("SELECT paramuixVal FROM paramuix where paramuixNom = '" + req.params.val + "'", (err, result) => {    
        console.log(result);
        res.json(result); 
})
};


module.exports = ecommCtrl;