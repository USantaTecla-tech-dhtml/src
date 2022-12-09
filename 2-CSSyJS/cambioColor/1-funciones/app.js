function load() {
    getTitle().classList.add('title');
}

function getTitle() {
    return document.getElementsByTagName('h1')[0];
}

function changeColor() {
    getTitle().style.color = this.getRandomColor();
}

function getRandomColor() {
    let color = '#';
    for (let i = 0; i < 'RGB'.length; i++) {
        let number = Math.floor(Math.random() * 256).toString(16);
        if (number.length == 1) {
            number = '0' + number;
        }
        color += number
    }
    return color;
}