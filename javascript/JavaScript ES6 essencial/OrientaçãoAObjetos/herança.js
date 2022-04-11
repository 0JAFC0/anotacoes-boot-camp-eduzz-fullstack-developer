'use strict';

const myText = 'hello prototype';

myText.split(''); // <- de onde vem esse "split"?

console.log(myText.__proto__.split);

console.log(myText.__proto__.split===String.prototype.split);
//true

console.log(myText.__proto__.split===String);
//true

'use strict';

function Animal(){
    this.qtdPatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdPatas);
//4

/*
    o que ocorre quando eu chamo a função new? ele vai chamar o um novo objeto é criado, herdando .prototype
    criando o cachorro é criado o __proto__ e o proto aponta para o prototype de animal. 
    onde o prototype de cachorro aponta para o de animal
*/

console.log(cachorro instanceof Animal);
console.log(cachorro instanceof Function);

'use strict';

function Animal(qtdPatas){
    this.qtdPatas = qtdPatas;
    this.movimentar = function(){}
}

function Cachorro(morde){
    Animal.call(this,4); //função call permite que a gente passe um contexto para que possa ser executado.
    this.morde = morde;
    this.latir = function(){
        console.log('Au! au!');
    }
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

console.log(pug);
// Cachorro {qtdPatas: 4,morde: false};

Animal.prototype.qtdPatas = 0;
Animal.prototype.movimentar = function(){}