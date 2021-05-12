//popup for requesting number of diamond size
let number = parseInt(window.prompt('Please input a number:'));
while(isNaN(number) === true || number <= 0) {
    number = parseInt(window.prompt('Please input a number:'))
}

let diamondBox = document.getElementById('diamond-container');
// timer variable using funciton move
//let timer = window.setInterval(move, 1000);

//moves diamond box by 20 px.
// function move(){
//     diamondBox.style.left = 20 + 'px';
// }

window.setInterval(function(){
    let leftSide = diamondBox.offsetLeft
    diamondBox.style.left = (leftSide + 5) + 'px';
}, 10)


