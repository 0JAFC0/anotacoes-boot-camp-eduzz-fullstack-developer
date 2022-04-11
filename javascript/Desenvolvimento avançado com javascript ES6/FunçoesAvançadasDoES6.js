
function log(value){
    console.log(value);
}

log('teste');

// funções anonimas
var tLog = function(value){
    console.log(value);
}

tLog('teste');

// arrow function são funções anonimas, 
var sum = (a,b)=> a + b;

var sum1 = (a,b)=> {
    return a + b
};
console.log(sum(5,10));