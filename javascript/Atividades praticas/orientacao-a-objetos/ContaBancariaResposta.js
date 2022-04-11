class ContaBancaria{
    constructor(agencia,numero,tipo,saldo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this.saldo = saldo;
    }

    get getSaldo(){
        return this.saldo;
    }
    set setSaldo(saldo){
        this.saldo = saldo;
    }

    sacar(valor){
        if(this.valor > 0){
            this.valor -= valor;
        }
    }

    depositar(valor){
        this.valor += valor;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia,numeros,cartaoCredito){
        super(agencia,numeros,"corrente");
        this.cartaoCredito = cartaoCredito;
    }

    get getCartaoCredito(){
        return this.cartaoCredito;
    }
    set setCartaoCredito(cartaoCredito){
        this.cartaoCredito = cartaoCredito;
    }
}

class ContaPoupanca extends ContaBancaria{

}

class ContaUniversitaria extends ContaBancaria{
    sacar(valor){
        if(valor > 0 && valor < 500){
            this.valor -= valor;
        }else{
            return "operação negada!";
        }
    }
}

const minhaConta = new ContaCorrente(1, 211, true);
const contaUni = new ContaUniversitaria(2, 333);