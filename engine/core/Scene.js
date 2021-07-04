import Engine from "./Engine";
import IdGenerator from "../utils/IdGenerator";

class Scene {
    components = [];

    constructor(components, {backgroundColor = '#fff', tag = '', visible = true}) {
        this.guid = IdGenerator.guid();
        this.components = components;
        tag.length === 0 ? this.tag = this.guid : this.tag = tag;
        Engine.instance.setBackgroundColor(backgroundColor);
        this.isVisible = visible;
    }

    draw = (ctx) => {
        if (!this.isVisible)
            return;
        this.components.forEach(e => {
            if (e.visible)
                e.draw(ctx);
            e.loop();
        });

    }

    handleClick = (x, y) => {
        if (!this.isVisible)
            return;
        this.components.forEach(e => {
                if (e.onClick != null) {
                    if (x >= e.transform.x && x <= (e.transform.x + e.transform.sizeX) && y >= e.transform.y && y <= (e.transform.y + e.transform.sizeY))
                        e.onClick();
                }
            }
        );
    }

    setVisibility = (visible) => this.isVisible = visible;

    removeScene = () => new Engine().removeScene(this.tag);

    findComponentByTag = (tag) => {
        return this.components.find(e => e.tag === tag);
    }
}

export default Scene;
