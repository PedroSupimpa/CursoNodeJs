 const fs = require('fs');
 const path = require('path')

 //criar uma pasta

/* fs.mkdir(path.join(__dirname, '/test'), (error) => {

    if (error) {
        console.log('erro', error)
        return
    }

    console.log("Pasta criada com sucesso!")
})*/

 //criar um arquivo

 fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'hello node!', (error) => {
    if (error){
        return console.log("Erro:", error);

    }
    console.log("Arquivo criado com sucesso!")
 })

 fs.writeFile(path.join(__dirname, '/test', 'test.txt'), 'hello world node!', (error) => {
    if (error){
        return console.log("Erro:", error);

    }
    console.log("Arquivo criado com sucesso!")
 })


 // adicionar a um arquivo

 fs.appendFile(path.join(__dirname, "/test", "test.txt"), "hello WOLRD!", (error) => {
    if(error){
        return console.log("Erro", error);
    }
    console.log("Arquivo modificado com sucesso!")
 });

 // Ler arquivo

 fs.readFile(path.join(__dirname, '/test', '/test.txt'), "utf-8", (error, data) => {
    if(error){
        return console.log("Erro", error)
    }
    console.log("Lendo arquivo...")
    console.log(data)
 })