const path = require('path');

//metodos de modulos

// apenas o nome do arquivo atual

console.log(path.basename(__filename));

// O nome do diretorio atual
console.log(path.dirname(__filename));

// Extencao do arquivo

console.log(path.extname(__filename))

//criar objeto path
console.log(path.parse(__filename));

//Juntar caminho de arquivos
console.log(path.join(__dirname, 'teste', 'test.html'));
