import Engine from "../engine/core/Engine";
import TextComponent from "../engine/components/TextComponent";
import TextStyle from "../engine/configs/TextStyle";
import Transform from "../engine/core/Transform";
import Scene from "../engine/core/Scene";
import ImageComponent from "../engine/components/ImageComponent";
import Tween from "../engine/core/Tween";

const engine = new Engine();

let count = 0;

const sceneComponents = [
    new TextComponent("Hello", {
        style: new TextStyle().setFontSize(8).setFillStyle('#098aa0').setTextAlign('center'),
        transform: Transform.fromPosition(50, 10),
    }),
    new TextComponent(`Count ${count}`, {
        style: new TextStyle().setFontSize(8).setFillStyle('#098aa0').setTextAlign('center'),
        transform: Transform.fromPosition(50, 50),
        tag: 'counter',
    }),
    new ImageComponent('./images/btn.png', {transform: Transform.centered(50, 85, 50, 10), tag: 'button'}),
];

const sampleScene = new Scene(sceneComponents, {backgroundColor: '#fff', tag: "sample_scene"});

new Tween(sampleScene.findComponentByTag('button').transform, 'scale', 0.5, 1, 1.05, {loop: true}).start();

sampleScene.findComponentByTag('button').setOnClick(() => {
    count += 1;
    sampleScene.findComponentByTag('counter').setText(`Count ${count}`);
});


engine.addScene(sampleScene);