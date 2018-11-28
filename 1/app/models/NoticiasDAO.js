/*
module.exports = function(){

    this.getNoticias = function(connection, callback){

    }

    this.getNoticia = function(connection, callback){
}

    this.salvarNoticia = function (noticia, connection,callback) {
        connection.query('insert into noticias set ?', noticia, callback);

    };
    return this;
*/
class NoticiasDAO {

    getReservas(connection, callback) {
        connection.query('select * from noticias ORDER BY data_criacao desc', callback);
    };
    getReserva(ID , connection, callback){
       //console.log(ID.id_noticias)
        connection.query('select * from noticias where id_noticias = ' + ID, callback);
    };
    salvarQuarto(reserva, connection,callback) {
        //console.log(noticia);
        connection.query('insert into noticias set ?', reserva, callback);
    }
    salvarTeste(index, connection, callback){
        connection.query('insert into noticias(test) VALUE(index)', callback);
    }
    get5not(connection,callback){
        connection.query('select * from noticias ORDER BY data_criacao desc limit 5', callback);
    }
}
module.exports = new NoticiasDAO();


