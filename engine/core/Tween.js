import Engine from "./Engine";

class Tween {

    elapsed = 0;
    value = 0;

    constructor(transform, type, duration, initialValue, targetValue, {loop = false}) {
        this.tweeningTransform = transform;
        this.type = type;
        this.duration = duration;
        this.loop = loop;
        this.initialValue = initialValue;
        this.targetValue = targetValue;
        if (this.type === 'scale')
            this.tweeningFunction = this.scale;
    }

    start = () => {
        Engine.instance.registerLoop(this.tween);
        return this;
    }

    stop = () => {
        Engine.instance.unregisterLoop(this.tween);
        return this;
    }

    tween = () => {
        if (this.elapsed < this.duration) {
            this.tweeningFunction();
            this.elapsed += Engine.instance.time.deltaTime;
        } else {
            if (this.loop) {
                this.elapsed = 0;
                let temp = this.initialValue;
                this.initialValue = this.targetValue;
                this.targetValue = temp;
            } else {
                this.stop();
            }
        }
    }

    scale = () => {
        let percentage = this.elapsed / this.duration;
        let curr = ((this.targetValue - this.initialValue) * percentage) + this.initialValue;
        this.tweeningTransform.setScale(curr);
    }
}

export default Tween;
