// variaveis

// como declarar variaveis
let teste = 0;// escopo local de bloco. pode ter seu valor alterado, se não tiver um valor inicial sera tratado como null.
var teste1 = 0;// escopo local e global de bloco. seu valor pode ser alterado, se não tiver um valor inicial sera tratado como null.
const teste2 = 0;// escopo local de bloco, somente leitura, o valor inicial obrigatorio, não pode ser alterado.

// boolean
var vOuF = false;
console.log(typeof(vOuF));

// number
var numberQualquer = 1;
console.log(typeof(numberQualquer));

// string
var nome = 'joao';
console.log(typeof(nome));

// escopo global e local
var escopoGlobal = 'global';
console.log(escopoGlobal);

function escopoLocal(){
    let escopoLocalInterno = 'local';//fora de qualquer limite
}

console.log(escopoLocalInterno);