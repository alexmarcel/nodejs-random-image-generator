const fs = require("fs");
const dir = __dirname;
const width = 1000;
const height = 1000;

const layers = [
    {
        id: 1,
        name: "background",
        location: `${dir}/background/`,
        elements: [
            {
                id: 0,
                name: "Background 1",
                filename: "bg1.png",
                rarity: "original",
            },
            {
                id: 1,
                name: "Background 2",
                filename: "bg2.png",
                rarity: "original",
            }
        ],
        position: { x: 0, y: 0},
        size: { width: width, height: height},
    },
    {
        id: 2,
        name: "head",
        location: `${dir}/head/`,
        elements: [
            {
                id: 0,
                name: "Head 1",
                filename: "head1.png",
                rarity: "original",
            },
            {
                id: 1,
                name: "Head 2",
                filename: "head2.png",
                rarity: "original",
            }
        ],
        position: { x: 0, y: 0},
        size: { width: width, height: height},
    },
    {
        id: 3,
        name: "eyes",
        location: `${dir}/eyes/`,
        elements: [
            {
                id: 0,
                name: "Eyes 1",
                filename: "eye1.png",
                rarity: "original",
            },
            {
                id: 1,
                name: "Eyes 2",
                filename: "eye2.png",
                rarity: "original",
            }
        ],
        position: { x: 0, y: 0},
        size: { width: width, height: height},
    },
    {
        id: 4,
        name: "mouth",
        location: `${dir}/mouth/`,
        elements: [
            {
                id: 0,
                name: "Mouth 1",
                filename: "mouth1.png",
                rarity: "original",
            },
            {
                id: 1,
                name: "Mouth 2",
                filename: "mouth2.png",
                rarity: "original",
            }
        ],
        position: { x: 0, y: 0},
        size: { width: width, height: height},
    },
]

module.exports = { layers, width, height};