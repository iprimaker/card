import { getCanvas } from "./canvas.js";
import { sortLayers } from "./layer.js";

export function initSave(){
    const saveButton = document.getElementById("saveButton");

    saveButton.addEventListener("click", saveImage);
}

async function saveImage(){
    const canvas = getCanvas();

    sortLayers();
    canvas.discardActiveObject();
    canvas.renderAll();

    const image = canvas.toDataURL({
        format: "png",
        quality: 1
    });

    // ローカル保存
    const link = document.createElement("a");
    link.href = image;
    link.download = "original-card.png";
    link.click();

    // サーバー保存
    const response = await fetch("../api/upload.php", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            image: image
        })
    });

    const result = await response.json();

    if(result.success){
        alert("保存しました！");
    }else{
        alert("サーバー保存に失敗しました");
    }
}