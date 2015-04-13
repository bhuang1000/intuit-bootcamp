module.exports = function(grunt){
	grunt.initConfig({
		webServer: {
			rootFolder: "www",
			port: 8080
		}
	});
	
	grunt.registerTask('default', 'start a web server', function(){
		var http = require("http"),
		    express = require("express"),
		    app = express();
		    webServerConfig = grunt.config("webServer");
		    
		this.async();//keep running webserver when this is done
		
		app.use(express.static(webServerConfig.rootFolder));//serve static documents from root folder

		
		http.createServer(app).listen(webServerConfig.port, function(){
			grunt.log.writeln("web server listening on port: " + webServerConfig.port);
		});  
	});
};