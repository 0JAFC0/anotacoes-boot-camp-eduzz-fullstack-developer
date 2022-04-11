/**
for ([expressaoInicial];[condiçao];[incremento])
    declaracao
 */

const array = ['one','two','three'];

for(let index = 0;index < array.length; index++){
    const element = array[index];
    console.log(`element ${index}: ${element}.`);
}

/**
while(condicao){
    declaracao
}
 */

var n = 0;
var x = 0;
while(n<3){
    n++;
    x+=n; // 1,3,6
}

console.log(x);

/**
do{
    declaracao
}while(condicao)
 */

let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 3);

/*
for in
for of
*/

let arr = [3,5,7];
arr.foo = 'hello';
for(let i in arr){
    console.log(i); // logs "0", "1", "2", "foo"
}

// so executa possibilidades que são numeradas.
for(let i of arr){
    console.log(i); // logs "3", "5", "7"
}

// controle de repetição
console.log('Exemplo da utilziação de break');

var index = 0;

// break
while(true){
    index++;

    if(index > 2){
        break;
    }
    console.log(index);
}

// continue. ele vai pular uma execução
console.log('\nExemplo da utilização de continue');

const arra = [1,2,3,4,5,6];
for(let index = 0;index < arra.length;index++){
    const element = arra[index];
    if(element % 2 === 0){
        continue;
    }

    console.log(element);
}