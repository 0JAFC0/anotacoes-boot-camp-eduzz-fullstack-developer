async function getObject(){
    var requestURL = "https://api.adviceslip.com/advice"
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function(){
        var conselho = request.response;
        getSlip(conselho);
    };
}

function getSlip(jsonObj){
    var mySlip = jsonObj['advice'];
    console.log(mySlip);
}

getObject();