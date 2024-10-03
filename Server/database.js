const mysql = require('mysql');

//prod
// const db = mysql.createConnection({
//     host: 'localhost', //ultimo numero sesenta y siete
//     user: 'jjuanena_admin2', //'juan4_admin3',
//     password: 'Lavioleta1976', 
//     database: 'jjuanena_ecomcinap'//'juan4_jjuanena_ecomcinap'
// });


//demo 
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'Nocnoc02',  
    database: 'ecommbd'
});
 
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('Conexión a la Base OK!!!')
});
 
module.exports = db;