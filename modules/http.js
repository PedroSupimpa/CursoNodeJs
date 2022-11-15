const http = require('http')

const  port = 8080;

const server = http.createServer((req, res) => {
    if (req.url == '/home') {
        res.writeHead(200, {"Content-Type": "text/html"})
         res.end("<h1> lalinha sebosa </h1><br> <h2> lalinha</h2>");
         
    }
    if (req.url == "/users") {
        const users = [
            {
                name:"lalinha",
                email:"cagona",
            },
            {
                name:"pedinho",
                email:"lindinho",
            },
        ]
            res.writeHead(200, { "Content-Type": "application/json"});
            res.end(JSON.stringify(users));

    }
});
 
server.listen(port, () => console.log(`Rodando na porta ${port}`));