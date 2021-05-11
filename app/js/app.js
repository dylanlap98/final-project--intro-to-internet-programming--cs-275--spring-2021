window.onload = () => {
    console.log(`%c JavaScript works!`,
        `background-color: yellow; font-weight: bold;`);
};

let number = parseInt(window.prompt('Please input a number:'));
while(isNaN(number) === true || number <= 0) {
    number = parseInt(window.prompt('Please input a number:'))
}

let diamondBox = document.getElementById('diamond-container');

// timer variable using funciton move
let timer = window.setInterval(move, 1000);

//moves diamond box by 10 px.
function move(){
    diamondBox.style.left = 10 + 'px';
}


