const scanner = require("sonarqube-scanner");
scanner(
{
serverUrl: "http://localhost:9000",
login: "admin",
password: "anamika06dorustree",
options: {
    "sonar.sources": "./src",
},
},
() => process.exit()
);