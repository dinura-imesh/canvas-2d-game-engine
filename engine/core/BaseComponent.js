import IdGenerator from "../utils/IdGenerator";
import Transform from "./Transform";

class BaseComponent {
    constructor(tag, transform = Transform.one(), onClick, visible = true) {
        this.guid = IdGenerator.guid();
        this.visible = visible;
        tag.length === 0 ? this.tag = this.guid : this.tag = tag;
        this.transform = transform;
        this.onClick = onClick;
    }

    setTag = (tag) => this.tag = tag;

    initialize() {

    }

    setOnClick = (onClickFunc) => {
        this.onClick = onClickFunc;
    }

    draw(ctx) {

    }

    loop() {

    }

    setVisibility = (isVisible) => this.visible = isVisible;
}

export default BaseComponent;
