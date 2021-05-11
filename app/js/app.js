window.onload = () => {
    console.log(`%c JavaScript works!`,
        `background-color: yellow; font-weight: bold;`);
};

let number = parseInt(window.prompt('Please input a number:'));
while(isNaN(number) === true || number <= 0) {
    number = parseInt(window.prompt('Please input a number:'))
}
