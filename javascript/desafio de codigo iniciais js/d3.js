// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

const numTotal = parseInt(input())
const numFigCompradas = parseInt(input())
const setFig = new Set()

for(let n = 0;n < numFigCompradas;n++){
  const fig = parseInt(input())
  setFig.add(fig);
}

print(numTotal - setFig.size)