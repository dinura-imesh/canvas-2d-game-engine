import '../utils/extensions'

class Engine {
    loops = [];
    scenes = [];
    time = {
        deltaTime: 0,
        time: 0,
        lastLoopTime: 0,
    }


    constructor() {
        if (Engine.instance instanceof Engine) {
            return Engine.instance;
        } else {
            console.log("Engine initialized");
            this.initializeEngine();
            Engine.instance = this;
        }
    }

    initializeEngine() {
        this.canvas = document.createElement('canvas');
        this.updateCanvasSize();
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.time.lastLoopTime = Date.now();
        this.handleClick()
        this.gameLoop();
    }

    setBackgroundColor = (color) => {
        this.canvas.style.backgroundColor = color
    }

    updateCanvasSize = () => {
        this.canvas.height = window.innerHeight;
        if (window.innerWidth > window.innerHeight)
            this.canvas.width = window.innerHeight / 16 * 9;
        else
            this.canvas.width = window.innerWidth;
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
        this.ratioX = this.canvasWidth / 100;
        this.ratioY = this.canvasHeight / 100;
    }

    handleClick = () => {
        this.canvas.addEventListener('mousedown', (ev) => {
            let x = ev.offsetX;
            let y = ev.clientY;
            this.scenes.forEach(e => e.handleClick(x, y));
        });
    }

    addScene = (scene) => {
        this.scenes.push(scene);
    }

    removeScene = (tag) => {
        this.scenes.removeWhere(e => e.tag === tag);
    }

    gameLoop = () => {
        this.clear();
        this.handleTime();
        this.scenes.forEach(e => {
            e.draw(this.context);
        });
        this.loops.forEach(e => {
            e();
        });
        requestAnimationFrame(this.gameLoop)
    }

    handleTime = () => {
        let now = Date.now();
        this.time.deltaTime = (now - this.time.lastLoopTime) / 1000;
        this.time.time += this.time.deltaTime;
        this.time.lastLoopTime = now;
    }

    clear = () => {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    registerLoop = (func) => {
        this.loops.push(func);
    }

    unregisterLoop = (func) => {
        this.loops.remove(func);
    }
}

export default Engine;
