const clone = (array)=>{
    const set = new Set();
    for(let i = 0;i<array.length;i++){
        set.add(array[i]);
    }
    return set;
} 

console.log(clone([30, 30, 40, 5, 223, 2049, 3034, 5]));