function fazGet(url){
    let request = new XMLHttpRequest();
    request.open("GET",url,false);
    request.send();
    return request.responseText
}

function criaMensagem(conselho){
    let h1 = document.getElementById('mensagem');
    h1.innerHTML = conselho;
}

function main(){
    let data = new Date.now();
    let cookie = document.cookie = 
    if(){}
    conselhoJson = JSON.parse(fazGet("https://api.adviceslip.com/advice"));
    criaMensagem(conselhoJson.slip.advice);
}

main()