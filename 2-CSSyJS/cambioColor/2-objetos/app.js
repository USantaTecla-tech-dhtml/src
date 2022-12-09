class ColorChanger {

    load() {
        // desaconsejado!!! 
        this.#getTitle().style.cssText =
            "color:red; font-family:Arial, Helvetica, sans-serif;";
    }

    #getTitle() {
        return document.getElementsByTagName("h1")[0];
    }

    changeColor(event, element) {
        console.log(event);
        console.log(element);
        this.#getTitle().style.color = this.#getRandomColor();
    }

    #getRandomColor() {
        let color = "#";
        for (let i = 0; i < "RGB".length; i++) {
            let number = Math.floor(Math.random() * 256).toString(16);
            if (number.length == 1) {
                number = "0" + number;
            }
            color += number
        }
        return color;
    }

}

const colorChanger = new ColorChanger();
