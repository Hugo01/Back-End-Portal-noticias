/*
class Singletown{
    method(start){
        start.get('/form', function (req,res) {
            res.render("/admin/form_add_noticia");

        });

    }

}
module.exports = new Singletown();
*/
module.exports = function  (server) {
    server.get('/form', function (req, res) {
        server.app.controllers.admin.formulario_inclusao_quarto(server,req,res);
    });

    server.post('/reservas/salvo', function (req, res) {
        server.app.controllers.admin.reservas_salvo(server, req, res);
        //res.render("noticias/noticias");
    });
}


