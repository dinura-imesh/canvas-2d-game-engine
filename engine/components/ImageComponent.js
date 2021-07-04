import BaseComponent from "../core/BaseComponent";
import Transform from "../core/Transform";
import ElementProvider from "../utils/ElementProvider";

class ImageComponent extends BaseComponent {
    constructor(imageUrl, {transform = Transform.one(), tag = '', onClick}) {
        super(tag, transform, onClick);
        this.image = ElementProvider.getImage(imageUrl);
    }

    draw = (ctx) => {
        ctx.drawImage(this.image,
            this.transform.x,
            this.transform.y,
            this.transform.sizeX, this.transform.sizeY);
    }

    setImage = (imageUrl) => {
        this.image = ElementProvider.getImage(imageUrl);
    }
}


export default ImageComponent;
