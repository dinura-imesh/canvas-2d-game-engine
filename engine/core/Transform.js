import Engine from "./Engine";

class Transform {
    constructor(x, y, sizeX, sizeY) {
        this.x = x;
        this.y = y;
        this.sizeX = sizeX;
        this.sizeY = sizeY;
        this.initialX = this.x;
        this.initialY = this.y;
        this.initialSizeX = this.sizeX;
        this.initialSizeY = this.sizeY;
    }

    static fromPosition = (x, y) => new Transform(x * Engine.instance.ratioX , y * Engine.instance.ratioY, 1 , 1)

    static one = () => new Transform(1, 1, 1, 1)

    static squareSize = (x, y, size) => new Transform(x * Engine.instance.ratioX, y * Engine.instance.ratioY, size * Engine.instance.ratioX, size * Engine.instance.ratioX);

    static fromAll = (a) => new Transform(a * Engine.instance.ratioX, a * Engine.instance.ratioX, a * Engine.instance.ratioX, a * Engine.instance.ratioX);

    static centered = (x, y, sizeX, sizeY) => new Transform(x * Engine.instance.ratioX - (sizeX * Engine.instance.ratioX / 2), y * Engine.instance.ratioY - (sizeY * Engine.instance.ratioY / 2), sizeX * Engine.instance.ratioX, sizeY * Engine.instance.ratioY);


    moveX = (val) => this.x += val * Engine.instance.ratioX;

    moveY = (val) => this.y += val * Engine.instance.ratioY;

    move = (x, y) => {
        this.x += x * Engine.instance.ratioX;
        this.y += y * Engine.instance.ratioY;
    }

    setScale(scale) {
        this.sizeX = this.initialSizeX * scale;
        this.sizeY = this.initialSizeY * scale;
        this.x = this.initialX + ((this.initialSizeX - (this.initialSizeX * scale)) / 2);
        this.y = this.initialY + ((this.initialSizeY - (this.initialSizeY * scale)) / 2);
    }

}

export default Transform;
