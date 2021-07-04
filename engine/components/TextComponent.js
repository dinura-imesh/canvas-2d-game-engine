import BaseComponent from "../core/BaseComponent";
import Transform from "../core/Transform";
import TextStyle from "../configs/TextStyle";
import Engine from "../core/Engine";

class TextComponent extends BaseComponent {
    constructor(text, {style = new TextStyle(), transform = Transform.one(), tag = '', onClick}) {
        super(tag, transform, onClick);
        this.text = text;
        this.style = style;
    }

    draw(ctx) {
        ctx.font = this.style.getFont();
        ctx.fillStyle = this.style.fillStyle;
        ctx.textAlign = this.style.textAlign;
        let words = this.text.split(' ');
        let line = '';
        let y = this.transform.y;
        for (let n = 0; n < words.length; n++) {
            let testLine = line + words[n] + ' ';
            let metrics = ctx.measureText(testLine);
            let testWidth = metrics.width;
            if (testWidth > this.style.maxWidth && n > 0) {
                ctx.fillText(line, this.transform.x, y - Engine.instance.ratioY * 1.4);
                line = words[n] + ' ';
                y += this.style.lineHeight;
            } else {
                line = testLine;
            }
        }
        ctx.fillText(line, this.transform.x, y);
    }

    setText(text) {
        this.text = text;
    }
}


export default TextComponent;
