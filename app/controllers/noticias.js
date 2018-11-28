module.exports.reservas_p= function (server, req ,res) {

    const connection = server.config.dbConnection();
    const reservasModel = server.app.models.NoticiasDAO;

    reservasModel.getReservas(connection,function (error, result) {
        if (result) {
            res.render("reserva/reservas", {reservas: result});

        } else {
            console.log("error");
        }
        //res.render("noticias/noticias");
    });
};

module.exports.reserva = function (server, req , res) {
    const connection = server.config.dbConnection();
    const reservasModel = server.app.models.NoticiasDAO;
    let ID = req.query.id_noticias
    console.log('id',ID)
    //console.log(req.query)
    reservasModel.getReserva(ID, connection, function (error, result) {
        //console.log(!!result)
        if(result) {
            res.render("reserva/reserva", {reserva: result});
            console.log(typeof result)
        }else{
            console.log("error no carregamento da rota");
        }
    });

}
