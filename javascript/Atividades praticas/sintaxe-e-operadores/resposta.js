function maiorMenor(num1,num2){
    return `Os números ${num1} e ${num2} ${saoIguais(num1,num2)} iguais. Sua soma é ${soma(num1,num2)}, que é ${maiorQueDez(num1,num2)} que 10 e ${menorQueVinte(num1,num2)} que 20.`;
}

function saoIguais(num1,num2){
    return (num1 === num2)?'são':'não são';
}

function soma(num1,num2){
    return num1+num2;
}

function maiorQueDez(num1,num2){
    return (soma(num1,num2)>10)?'maior':'menor'
}

function menorQueVinte(num1,num2){
    return (soma(num1,num2))?'menor':'maior'
}

console.log(maiorMenor(2,2))