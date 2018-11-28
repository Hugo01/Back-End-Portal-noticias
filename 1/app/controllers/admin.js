module.exports.formulario_inclusao_quarto = function (server, req ,res) {
    res.render("admin/form_add_quarto", {validacao: {}, noticiaJSON : {}});
};


module.exports.array = function(server,req,res){
	res.render('admin/array', {array: arrayT})
}
let arrayT = [1,2,3,4,'array','a']



module.exports.reservas_salvo = function (server, req , res) {
    let reserva = req.body;


    let keytoFind = "titulo";
    let index = Object.keys(reserva).indexOf(keytoFind);
    console.log(reserva);


    req.assert('nome','Nome é obrigatorio').notEmpty();
    req.assert('resumo','Resumo é obrigatorio').notEmpty();
    req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor','Autor é obrigatorio').notEmpty();
    req.assert('reserva','reserva é obrigatorio').notEmpty();

    let erros = req.validationErrors();
    //console.log(erros)
 
    //console.log(!!erros)
    if(erros){
        res.render("admin/form_add_quarto", {validacao : erros, reservaJSON: reserva});
        console.log(erros)
        return;
    }


    //res.send(noticia);

    const connection = server.config.dbConnection();
    const noticiasModel = server.app.models.NoticiasDAO;

    noticiasModel.salvarTeste(index,connection, function (error,result) {

    });
    noticiasModel.salvarQuarto(reserva, connection ,function (error, result) {

        res.redirect('/reservas');

    });
}
