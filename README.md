# WebGL Game Engine

## Project setup

```
npm install
```

### Webpack

```
npx webpack --config webpack.config.js
```

### Add images and none js files to the dist folder.

### Remove devtool in webpack config in release build

---

### Engine

Start by creating the engine. Engine class handles the tick rate and calling the required loops to run the game.

```
const engine = new Engine();
```

### Scene

Scene class is used to seperate game screens. A single screen is built inside a scene object by providing a component
array.

```
const components = [];
const sampleScene = new Scene(components, {backgroundColor: '#fff', tag: "sample_scene"});
```

A scene can be rendered by calling the addScene function in Engine object.

```
engine.addScene(sampleScene);
```

You can use the setVisibility function of Scene object to set the visibility of a scene.

```
sampleScene.setVisibility(false)
```

### BaseComponent

BaseComponent is used as the base class for every component and has the render and click handle methods.

### Transform

Every component should be provided with a transform object. Transform object determines the position of the component in
the canvas and the size of it.

### ImageComponent

ImageComponent renders an image using the given transform object.

```
const imageComponent = new ImageComponent('./images/test.png', {transform: Transform.centered(50, 85, 50, 10), tag: 'button'});
```

A tag can be provided to access the component without keeping a reference.

```
const imageComponent = sampleScene.findComponentByTag('button');
```

You can use the setOnClick function with a callback to handle on click of any component derived from the base component
class.

```
imageComponent.setOnClick(()=>{
    console.log("Pressed");
});
```

### TextComponent

TextComponent is also derived from the BaseComponent and is used to render texts. A TextStyle object can be passed to a
text component to define the look of the rendered text.

```
const textComponent = new TextComponent("Hello", {
    style: new TextStyle().setFontSize(8).setFillStyle('#098aa0').setTextAlign('center'),
    transform: Transform.fromPosition(50, 10),
}),
```

You can use the setText function of a TextComponent object to update the text in runtime.

