function troca(array){
    if(!array) return -1;
    if(!array.length) return -1;

    for(let i = 0;i<array.length/2;i++){
        if(array[i]!==array[array.length-1-i]){
            let temp = array[i];
            array[i] = array[array.length-1-i];
            array[array.length-1-i] = temp;
        }
    }
    return array;
}

console.log(troca([1, 3, 4, 6, 80, 33, 23, 90]));