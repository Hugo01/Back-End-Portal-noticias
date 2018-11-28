/*module.exports = function(app) {

};
*/
//const dbConnection = require('../../config/dbConnection');

module.exports = function(server) {

        server.get('/reservas', function (req, res) {
        server.app.controllers.noticias.reservas_p(server, req,res);

    });
    server.get('/reserva', function (req, res) {
        server.app.controllers.noticias.reserva(server,req,res);
    });
};
/*



class Singleton {
    method(start) {

        let connection = dbConnection.connect();
        start.get('/noticias', function (eq,res) {


            connection.query('SELECT * FROM noticias', function(error, result){
                if(result) {
                    res.render("noticias/noticias", {noticias : result});
                }else {
                    console.log("error");
                }
                console.log("aaa");
                res.render("noticias/noticias");
            });

            //res.render("noticias/noticias");
        });
    }
};
*/

