/**
 * 
 * if(condition){
 *  // code here
 * }
 */

const array = [0,1,2,3,4,5,6,8,10,15]

console.log('\nif')
array.forEach(item=>{
    if(item%2===0){
        console.log(`numero ${item} é divisivel por 2.`);
    }if(item%3===0){
        console.log(`numero ${item} é divisivel por 3.`);
    }if(item%5===0){
        console.log(`numero ${item} é divisivel por 5.`);
    }
})

/**
 * else if
 */

console.log('\nelse if')
array.forEach(item=>{
    if(item%2===0){
        console.log(`numero ${item} é divisivel por 2.`);
    }else if(item%3===0){
        console.log(`numero ${item} é divisivel por 3.`);
    }else if(item%5===0){
        console.log(`numero ${item} é divisivel por 5.`);
    }
})

/**
 * switch(expressao){
 *  case(valor1):
 *      [break;]
 *  case valueN:
 *      [break;]
 *  default:
 *      [break;]
 * }
 */

console.log('\nswitch case')
const fruit = 'pera';
switch (fruit) {
    case 'banana':
        console.log('R$ 3,00 / Kg');
        break;
    case 'mamão':
        console.log('R$ 2,00 / Kg');
        break;
    case 'pera':
        console.log('R$ 2,00 / Kg');
    default:
        console.log('Produto não existe no estoque.');
        break;
}