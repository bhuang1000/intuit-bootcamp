
module.exports = function(webServerConfig, webServerCallback) {


    var http = require("http"),
        express = require("express"),
        app = express();
        //webServerConfig = grunt.config("webServer");
        //webServer = require("./web-server");

    //this.async();//keep running webserver when this is done

    app.use(express.static(webServerConfig.rootFolder));//serve static documents from root folder


    http.createServer(app).listen(webServerConfig.port, webServerCallback);
};