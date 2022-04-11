const users = [
    'Guilherme','Pedro','Ana'
];

const gender = {
    MAN: Symbol('M'),
    WOMAN: Symbol('F')
}

const persons = [
    {
        name: 'Guilherme',
        age:26,
        gender:gender.MAN
    },{
        name: 'Pedro',
        age:30,
        gender:gender.MAN
    },{
        name: 'Ana',
        age:18,
        gender:gender.WOMAN
    },
]

// criar um arrays

// [empty x 3]
const arr = Array(3);
// [3, 2]
const arr2 = Array(3,2);


// Array.from
//cria uma nova instancia de array a partir de um parametro array-like ou iterable object
const divs = document.querySelectorAll('div');
const arr3 = Array.from(divs);


// insere elementos em um array
const frutas = ['melancia','banana'];
frutas.push('pera');

// remove elemetos, ela remove o ultimo elemento de um arrays
frutas.pop();
console.log(frutas);

// adiciono no inicio, ele retorna o tamanho do array
frutas.unshift();
console.log(frutas);

// concatenar um array ou mais arrays
const salgados = ['coxinha','kibe','empada'];
const alimentos = frutas.concat(salgados);
console.log(alimentos);

// retorna um novo array 'fatiando' o array de acordo com inicio e fim
alimentos.slice(0,2);
console.log(alimentos);

// insere e remove elementos de um array, recebe o inicio e o fim
alimentos.splice(2);

alimentos.splice(0,0,'coxinha');

// Retorna a quantidade de itens de um array
console.log('Items: ',persons.length);

// verificar os itens do array
console.log('A variavel persons e um array: ',Array.isArray(persons));

// itera sobre os elementos do array
persons.forEach((person,index,arr) =>{
    console.log('nome:  $(person.name) index: $(index)',arr);
});

// filtra elementos do array
const mens = persons.filter(persons => persons.m);

// retorna um novo objeto
const personsWithCurse = persons.map(person => {
    person.curse = 'Introdução ao javascritp';
    return person;
});

// Transforma um array em um outro tipo
const totalAge = persons.reduce((age,person) => {
    age += person.age; // possibilita primeiro paramentro é o novo objeto depois o item que eu estou iterando.
    return age;
}, 0);

console.log('\nSoma de idade das pessoas', totalAge);

// jutando operações
const totalEvanges = persons.filter(person => person.age % 2 == 0).reduce((age, person) => {
    age += person.age;
    return age;
},0);

console.log('\nSoma de idades das pessoas que possuem idade par',totalEvanges);

// iterar elementos de um arrays
frutas.forEach((fruta,index) => {
    console.log(`${index}: ${fruta}`);
});


// iterar Elementos
frutas.map((fruta,index)=>`${index}:${fruta}`);

// retona um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada(depth)
alimentos.push(frutas);
frutas.flat();

// retorna uma novo array assim como  afunção map e xecuta um flat de profundidade 1
arr = [1,2,3,4];
arr.flatMap(value=>[value*2]);
// [2,4,6,8];

// encontra o proximo elemento
frutas.values();
const frutasIterator = frutas.entries();
frutas.next();

// encontra Elementos
frutas.find('pera');

// retorna o primeiro indice
frutas.findIndex(value=>value>2);

//retorna um novo array com todos os elementos que satisfazem a condição
frutas.filter(value=>value>2);

// retorna o primeiro indice em que um elemento pode ser encontrado em um array
frutas.indexOf();

// retorna o ultimo indice
frutas.lastIndexOf();

// retorna um boolean verificado se determinado elemento existe no array
frutas.includes(1);
//true

// retorna um boolean verificando se pelo menos um elemento é encontrado no array
frutas.some(value=>value%2===0);
// true

// retorna um boolean verificando se todos os itens de um array satisfazem a condição
frutas.every(value=>value==='pera');

// ordena elementos de um array de acordo com a condição
frutas.sort();
frutas.sort(current,next =>current.grade - next.grade);

// inverter o sentido do arrays
frutas.reverse();

