import BaseComponent from "../core/BaseComponent";
import Transform from "../core/Transform";

class SliderComponent extends BaseComponent {
    constructor(value = 0, {transform = Transform.one(), color = "#474747", backgroundColor = '#000', tag = '', onClick}) {
        super(tag, transform, onClick);
        this.color = color;
        this.value = value;
        this.backgroundColor = backgroundColor;
    }

    draw(ctx) {
        ctx.beginPath();
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(this.transform.x, this.transform.y, this.transform.sizeX, this.transform.sizeY);
        ctx.stroke();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.transform.x, this.transform.y, this.transform.sizeX * this.value, this.transform.sizeY);
        ctx.stroke();
    }

    setValue = (value) => this.value = value;
}


export default SliderComponent;
