function valid(array,number) {
    try {
        if(!array && !number){
            ReferenceError("Envie os parametros!");
        }
        if(typeof array !== "object"){
            throw new TypeError("Envie o parametro do tipo Array!");
        }
        if(typeof number !== "number"){
            throw new TypeError("Envie o parametro do tipo Number!");
        }
        if(!array.length != number){
            throw new RangeError("tamanho do array invalido!");
        }
    } catch (error) {
        if(error instanceof ReferenceError){
            console.log('referenceError');
            console.log(error.stack);
        }else if(error instanceof TypeError){
            console.log('TypeError');
            console.log(error.stack);
        }else if(error instanceof RangeError){
            console.log('RangeError');
            console.log(error.stack);
        }else{
            console.log('outroError');
            console.log(error.stack);
        }
    }
}