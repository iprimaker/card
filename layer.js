import { getCanvas } from "./canvas.js";

export function sortLayers(){
    const canvas = getCanvas();

    const objects = canvas.getObjects();

    const layerOrder = {
        background: 1,
        character: 2,
        frame: 3,
        attribute: 4,
        text: 5,
        serial: 6,
        buzzPower: 7
    };

    objects.sort((a, b) => {
        const aLayer = layerOrder[a.layerType] || 0;
        const bLayer = layerOrder[b.layerType] || 0;
        return aLayer - bLayer;
    });

    canvas._objects = objects;
    canvas.renderAll();
}