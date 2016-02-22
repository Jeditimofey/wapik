'use strict';

var http = require ('http')
,	app = require('./app')
,	port = app.get('port');

require('./routes');

http.createServer(app).listen(port, function(){
	console.log("Visit localhost://" + port + "to work");
});