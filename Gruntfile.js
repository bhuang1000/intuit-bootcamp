module.exports = function(grunt){
	grunt.initConfig({
		webServer: {
			rootFolder: "www",
			port: 8080
		}
	});
	
	grunt.registerTask('default', 'start a web server', function(){
		var webServer = require('./web-server'),
			webServerConfig = grunt.config("webServer");

		this.async();
		webServer(webServerConfig, function() {
			grunt.log.writeln("Web server listening on port " + webServerConfig.port);
		});
		/*var http = require("http"),
		    express = require("express"),
		    app = express();
		    webServerConfig = grunt.config("webServer");
		    webServer = require("./web-server");
		    
		this.async();//keep running webserver when this is done
		
		app.use(express.static(webServerConfig.rootFolder));//serve static documents from root folder

		
		http.createServer(app).listen(webServerConfig.port, function(){
			grunt.log.writeln("web server listening on port: " + webServerConfig.port);
		}); */
	});
};