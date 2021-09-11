// import
const fs = require("fs");
const myArgs = process.argv.slice(2);
const {createCanvas, loadImage} = require("canvas");
const { layers, width, height } = require("./input/config.js");
// set canvas size 1000px by 1000px
const canvas = createCanvas(width, height);
const ctx = canvas.getContext("2d");
const edition = myArgs.length > 0  ? Number(myArgs[0]) : 1;


// save drawn image to fs
const saveLayer = (_canvas, _edition) => {
    fs.writeFileSync(`./output/${_edition}.png`, _canvas.toBuffer("image/png"));
}

// draw image
const drawLayer = async (_layer, _edition) => {
    let element = _layer.elements[Math.floor(Math.random()*_layer.elements.length)];
    const image = await loadImage(`${_layer.location}${element.filename}`);
    ctx.drawImage(
        image, 
        _layer.position.x, 
        _layer.position.y, 
        _layer.size.width, 
        _layer.size.height
        );
    console.log(`Created  ${_layer.name}, elements ${element.name}`);
    saveLayer(canvas, _edition);
}

for(let i=1; i<=edition; i++){
    layers.forEach((layer) => {
        drawLayer(layer, i);
    });
    console.log("Creating edition " + i);
}