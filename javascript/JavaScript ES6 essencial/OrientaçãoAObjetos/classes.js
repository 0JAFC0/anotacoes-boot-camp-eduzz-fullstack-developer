/**
    class 
    por enquanto so tem dois tipos disponiveis, mas
    ainda não esta disponivel na web.
 */

class Person{
    #name = '';

    constructor(initialName){
        this.#name = initialName;
    }

    setName(name){
        this.#name = name;
    }

    getName(){
        return this.#name;
    }
}

// static acessar metodos e Atributos sem instanciar aquela classe.

class Person{
    static walk(){
        console.log('walking....');
    }
}

console.log(Person.walk());
// "walking..."