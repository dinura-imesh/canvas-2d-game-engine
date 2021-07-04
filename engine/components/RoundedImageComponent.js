import BaseComponent from "../core/BaseComponent";
import Transform from "../core/Transform";
import ElementProvider from "../utils/ElementProvider";

class RoundedImageComponent extends BaseComponent {
    constructor(imageUrl, {transform = Transform.one(), tag = '', onClick}) {
        super(tag, transform, onClick);
        this.image = ElementProvider.getImage(imageUrl);
    }

    setImage = (imageUrl) => {
        this.image = ElementProvider.getImage(imageUrl);
    }

    draw = (ctx) => {
        ctx.save();
        ctx.fillStyle = "black";
        ctx.beginPath();
        ctx.arc(this.transform.x + this.transform.sizeX / 2, this.transform.y + this.transform.sizeY / 2, this.transform.sizeX / 2, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();
        ctx.drawImage(this.image,
            this.transform.x,
            this.transform.y, this.transform.sizeX, this.transform.sizeY);
        ctx.restore();
    }
}

export default RoundedImageComponent;
