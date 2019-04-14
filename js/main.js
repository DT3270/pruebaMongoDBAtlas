/* 
 * mongodb+srv://dt3270:<password>@cluster0-itmdj.mongodb.net/test?retryWrites=true
 * 
 * 
 */

var okButton = document.getElementById('okButton');

okButton.onclick = handleAuthClick;

function handleAuthClick(event) {
    console.log("anda el boton")

/*    var http = require("http");

    http.createServer(function(request, response) {
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Hola Mundo");
        response.end();
    }).listen(8888);
*/
    const mongoClient = require('mongodb').MongoClient;
    const uri = "mongodb+srv://dt3270:fuiyu00!@cluster0-itmdj.mongodb.net/test?retryWrites=true"
    MongoClient.connect(uri, function(err, client) {
    if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
    }
    console.log('Connected...');
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
    });
};
