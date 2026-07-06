import { getCanvas } from "./canvas.js";
import { sortLayers } from "./layer.js";

let backgroundObject = null;
let characterObject = null;

const BACKGROUND_LIST = [
    { id: "background1", name: "ひみつ　Aタイプ", path: "../assets/back/backA1.png" },
    { id: "background2", name: "おねがい　Bタイプ", path: "../assets/back/backB2.png" },
];

export function initImages(){

    const backgroundVisible = document.getElementById("backgroundVisible");
    const backgroundSelectArea = document.getElementById("backgroundSelectArea");
    const backgroundSelect = document.getElementById("backgroundSelect");
    const characterInput = document.getElementById("character");

    backgroundSelect.innerHTML = "";

    BACKGROUND_LIST.forEach(bg => {
        const option = document.createElement("option");
        option.value = bg.id;
        option.textContent = bg.name;
        backgroundSelect.appendChild(option);
    });

    backgroundSelect.addEventListener("change", () => {
        const selected = BACKGROUND_LIST.find(bg => bg.id === backgroundSelect.value);

        if(selected){
            drawBackground(selected.path);
        }
    });

    backgroundVisible.addEventListener("change", () => {
        const visible = backgroundVisible.checked;

        backgroundSelectArea.style.display = visible ? "block" : "none";

        if(backgroundObject){
            backgroundObject.visible = visible;
            sortLayers();
        }
    });

    characterInput.addEventListener("change", uploadCharacter);

    backgroundSelectArea.style.display = backgroundVisible.checked ? "block" : "none";

    drawBackground(BACKGROUND_LIST[0].path);
}

function drawBackground(path){
    const canvas = getCanvas();

    if(backgroundObject){
        canvas.remove(backgroundObject);
        backgroundObject = null;
    }

    fabric.Image.fromURL(path, img => {
        img.set({
            left: canvas.getWidth() / 2,
            top: canvas.getHeight() / 2,
            originX: "center",
            originY: "center",
            selectable: false,
            evented: false
        });

        img.layerType = "background";
        img.visible = document.getElementById("backgroundVisible").checked;

        backgroundObject = img;

        canvas.add(backgroundObject);
        sortLayers();
    });
}

function uploadCharacter(e){
    const file = e.target.files[0];

    if(!file) return;

    const reader = new FileReader();

    reader.onload = () => {
        const canvas = getCanvas();

        fabric.Image.fromURL(reader.result, img => {

            if(characterObject){
                canvas.remove(characterObject);
                characterObject = null;
            }

            img.set({
                left: canvas.getWidth() / 2,
                top: canvas.getHeight() / 2,
                originX: "center",
                originY: "center",
                selectable: true,
                evented: true,
                hasControls: true,
                hasBorders: true,
                lockRotation: true
            });

            img.layerType = "character";

            characterObject = img;

            canvas.add(characterObject);
            canvas.setActiveObject(characterObject);

            sortLayers();
        });
    };

    reader.readAsDataURL(file);
}