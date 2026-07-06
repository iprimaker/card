let canvas = null;

export const CARD_WIDTH = 697;
export const CARD_HEIGHT = 1016;

export function initCanvas(){

    canvas = new fabric.Canvas("cardCanvas", {
        width: CARD_WIDTH,
        height: CARD_HEIGHT,
        selection: false,
        preserveObjectStacking: true,

        // 透明背景
        backgroundColor: "transparent"
    });

    canvas.setWidth(CARD_WIDTH);
    canvas.setHeight(CARD_HEIGHT);

    canvas.renderAll();

    console.log(`Canvas: ${CARD_WIDTH} × ${CARD_HEIGHT}`);
}

export function getCanvas(){
    return canvas;
}