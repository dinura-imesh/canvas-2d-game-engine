import Engine from "../core/Engine";

class TextStyle {
    fontType = "normal";
    font = 'Poppins';
    fontSize = 50 * Engine.instance.ratioX;
    fillStyle = 'black';
    textAlign = 'left';
    lineHeight = 2 * Engine.instance.ratioY;
    maxWidth = 1000;

    getFont = () => {
        return `${this.fontType} ${this.fontSize}px ${this.font}`;
    }

    setFont = font => {
        this.font = font;
        return this;
    }

    setFillStyle = style => {
        this.fillStyle = style;
        return this;
    }

    setTextAlign = align => {
        this.textAlign = align;
        return this;
    }

    setFontSize = fontSize => {
        this.fontSize = fontSize * Engine.instance.ratioX;
        return this;
    }

    setFontType = (fontType) => {
        this.fontType = fontType;
        return this;
    }

    setLineHeight = (lineHeight) => {
        this.lineHeight = lineHeight * Engine.instance.ratioY;
        return this;
    }

    setMaxWidth = (width) => {
        this.maxWidth = width * Engine.instance.ratioX;
        return this;
    }
}

export default TextStyle;
