import BaseComponent from "../core/BaseComponent";
import Transform from "../core/Transform";

class DividerComponent extends BaseComponent {
    constructor({transform = Transform.one(), color = "#474747", tag = '', onClick}) {
        super(tag, transform, onClick);
        this.color = color;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.lineWidth = "4";
        ctx.fillStyle = this.color;
        ctx.fillRect(this.transform.x, this.transform.y, this.transform.sizeX, this.transform.sizeY)
        ctx.stroke();
    }
}

export default DividerComponent;
