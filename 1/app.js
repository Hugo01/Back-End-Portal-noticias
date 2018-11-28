const startServer = require('./config/server');
const moduleTest = require('./config/mod');
/*
const routeHome = require('./app/routes/home');
const routeForm = require('./app/routes/form');
const routeNot = require('./app/routes/noticias')
const routeModT = require('./config/mod.js');

routeHome(start);
routeForm.method(start);
routeNot(start);
*/
// let s = routeModT.method();

startServer.listen(8000, function () {
    console.log("Rodando");
});