var http = require('http')
const port = 3000

function handleReq (request,response){
    response.end("Server running at "+request.url)
}
var myserver = http.createServer(handleReq)
myserver.listen(port,function(){
    console.log("server running")
})