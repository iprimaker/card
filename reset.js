export function initReset(){
    const resetButton = document.getElementById("resetButton");

    resetButton.addEventListener("click", () => {
        const ok = confirm("現在の内容をリセットしますか？");

        if(!ok) return;

        localStorage.removeItem("cardType");
        location.reload();
    });
}