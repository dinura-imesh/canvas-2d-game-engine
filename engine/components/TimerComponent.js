import BaseComponent from "../core/BaseComponent";
import Transform from "../core/Transform";
import Engine from "../core/Engine";
import TextStyle from "../configs/TextStyle";

class TimerComponent extends BaseComponent {
    constructor(duration, onTimerEnd, {
        color = "white",
        backgroundColor = "#220B43",
        transform = Transform.one(),
        tag = '',
        style = new TextStyle()
    }) {
        super(tag, transform);
        this.duration = duration;
        this.showTime = duration;
        this.onTimerEnd = onTimerEnd;
        this.elapsed = 0.0001;
        this.color = color;
        this.backgroundColor = backgroundColor;
        this.runTimer = true;
        this.style = style;
    }

    draw = (ctx) => {
        ctx.save();

        ctx.fillStyle = this.backgroundColor;
        ctx.strokeStyle = this.color;
        ctx.lineWidth = Engine.instance.ratioX / 2.5;
        ctx.beginPath();
        ctx.arc(this.transform.x + this.transform.sizeX / 2, this.transform.y + this.transform.sizeY / 2, (this.transform.sizeX / 2), 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();

        ctx.lineWidth = Engine.instance.ratioX;
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.transform.x + this.transform.sizeX / 2, this.transform.y + this.transform.sizeY / 2, this.transform.sizeX / 2 + (0.12 * Engine.instance.ratioX), Math.PI * 1.5, Math.PI * 1.5 - (Math.PI * 2 * this.elapsed / this.duration));
        ctx.stroke();
        ctx.restore();

        ctx.font = this.style.getFont();
        ctx.fillStyle = this.style.fillStyle;
        ctx.textAlign = this.style.textAlign;
        ctx.fillText(`${this.showTime}`, this.transform.x + this.transform.sizeX / 2, this.transform.y + this.transform.sizeY / 1.59);

    }

    loop() {
        if (this.runTimer) {
            this.showTime = Math.floor(this.duration - parseInt(this.elapsed));
            this.elapsed += Engine.instance.time.deltaTime;
        }
        if (this.elapsed >= this.duration) {
            this.showTime = "0";
            this.elapsed = this.duration - 0.0001;
            if (this.onTimerEnd)
                this.onTimerEnd();
            this.runTimer = false;
        }
    }

    restart() {
        this.elapsed = 0.0001;
        this.runTimer = true;
    }

    pause() {
        this.runTimer = false;
    }

    unPause() {
        this.runTimer = true;
    }

    setOnTimerEnd = (func) => {
        this.onTimerEnd = func;
    }
}


export default TimerComponent;
