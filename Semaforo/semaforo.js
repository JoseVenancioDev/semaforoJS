const img = document.getElementById('img');
const buttons = document.getElementById('buttons');
let colorIndex = 0;
let intervalId = null;

const traficLight = (event) => {

    stopAutomatic()
    turnOn[event.target.id]()
}
const changeColor = (event) => {
    const colors = ["red", "yellow", "green"]
    const color = colors[colorIndex];
    turnOn[color]();
    nextIndex();
}

const nextIndex = () => {
    if(colorIndex < 2){
        colorIndex++;
    }else{
        colorIndex = 0;
    }
}

const stopAutomatic = () => {
    clearInterval(intervalId);
}

const turnOn = {
    "red" : () => img.src = "./img/vermelho.png",
    "yellow" : () => img.src = "./img/amarelo.png",
    "green" : () => img.src = "./img/verde.png",
    "automatic" : () =>  intervalId = setInterval(changeColor, 1000)//Em milisegundos
}
buttons.addEventListener('click', traficLight);
