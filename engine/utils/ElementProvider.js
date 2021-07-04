class ElementProvider {
    static getImage(url) {
        let img = new Image();
        img.src = url;
        return img;
    }
}

export default ElementProvider;
