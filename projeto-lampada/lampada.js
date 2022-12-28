/*
const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}

function lampOn(){
    if(!isLampBroken ()){
        lamp.src = 'img/ligada.jpg';
    }
}

function lampOff(){
    if(!isLampBroken ()){
        
        lamp.src = 'img/desligada.jpg';
    }
}

function lampBroken(){
    lamp.src = 'img/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);
*/

const turn = document.getElementById('turn');
const lamp = document.getElementById('lamp');

function isLampBroken(){
    return lamp.src.indexOf('quebrada') > -1; //verifica se a lâmpada está quebrada e retorna um valor.
}

function lampOn(){
    if(!isLampBroken ()){
        lamp.src = 'img/ligada.jpg';
    }
}

function lampOff(){
    if(!isLampBroken ()){
         lamp.src = 'img/desligada.jpg';
    }
}

function lampTurn(){
    if(turn.textContent == 'Ligar'){
        lampOn();
        turn.innerText = 'Desligar';
    } else if(turn.textContent == 'Desligar'){
        lampOff();
        turn.innerText = 'Ligar';
    }
}

function lampBroken(){
    lamp.src = 'img/quebrada.jpg';
}

turn.addEventListener('click', lampTurn);
lamp.addEventListener('dblclick', lampBroken);

