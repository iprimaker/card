export const CARD_TYPES = {
    A: {
        type: "A",
        label: "ひみつのアイプリ",
        frameCount: 3,
        attribute: true,
        attributeCount: 10,
        attributePath: "../assets/attribute/",
        serialPrefix: "HAS1",
        maxName: 4,
        maxCostume: 15
    },

    B: {
        type: "B",
        label: "おねがいアイプリ",
        frameCount: 4,
        attribute: false,
        attributeCount: 0,
        attributePath: "",
        serialPrefix: "OAS1",
        maxName: 4,
        maxCostume: 15
    }
};

export function getCurrentCardType(){
    const savedType = localStorage.getItem("cardType") || "A";
    return CARD_TYPES[savedType] || CARD_TYPES.A;
}

export function setCurrentCardType(type){
    localStorage.setItem("cardType", type);
}