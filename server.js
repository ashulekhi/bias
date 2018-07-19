var Express = require('express');
var  PORT = process.env.PORT || 5000



var server = Express();

server.use(Express.static(__dirname+'/dist'))

server.listen(PORT , function(){
    console.log("Server is running");
})