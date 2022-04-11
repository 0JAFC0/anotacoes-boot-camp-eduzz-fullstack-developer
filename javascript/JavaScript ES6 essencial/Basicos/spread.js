//spread ...
// ele consegue meio que iterar em cada item desse objeto e passar para o parametro.
// ele é muito utilizado quando se quer concatenar array, conceita da imutabilidade, 
// nunca iremos mudar um sempre iremos criar um apartir dele.
var partes = ['ombro','joelhos'];
var musica = ['cabeca',...partes,'e','pes'];

function fnix(x,y,z){}

var args = [0,1,2];

fn(...args);