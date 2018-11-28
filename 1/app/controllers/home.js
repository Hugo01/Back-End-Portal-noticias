module.exports.index= function (start, req ,res) {
	
	const connection = start.config.dbConnection();
	const noticiasModel = start.app.models.NoticiasDAO;

	noticiasModel.get5not(connection,function(error , result){
	res.render("home/index", {notresult : result})
 	
 	//console.log(result)


});

}