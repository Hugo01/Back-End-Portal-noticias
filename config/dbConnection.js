
const mysql = require('mysql');

var connMysql = function (){
    console.log("Conexão com banco de dados foi estabelecida");
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'os123',
        database: 'portal_noticias'
    });
};

module.exports = function () {
    console.log("AutoLoad do Banco de dados ON");
    return connMysql;
};
