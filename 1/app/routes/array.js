module.exports = function(server){
    server.get('/array', function (req , res) {
        server.app.controllers.admin.array(server,req,res);
    })
}