import { getCanvas } from "./canvas.js";
import { sortLayers } from "./layer.js";
import { getCurrentCardType } from "./config.js";

let serialText = null;

export function initSerial(){
    const canvas = getCanvas();
    const config = getCurrentCardType();

    serialText = new fabric.Text(`${config.serialPrefix}-001`, {
        left: 635,
        top: 27,
        originX: "center",
        fontSize: 18,
        fill: "#ffffff",
        selectable: false,
        evented: false
    });

    serialText.layerType = "serial";

    canvas.add(serialText);
    sortLayers();
}