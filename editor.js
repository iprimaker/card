import { startApp } from "./modules/app.js";

window.addEventListener("DOMContentLoaded", () => {
    startApp();
});

document.getElementById("galleryButton").addEventListener("click", () => {
    location.href = "gallery.html";
});

const noticeButton = document.getElementById("noticeButton");
const noticeModal = document.getElementById("noticeModal");
const closeModal = document.getElementById("closeModal");

noticeButton.addEventListener("click", () => {
    noticeModal.classList.add("show");
});

closeModal.addEventListener("click", () => {
    noticeModal.classList.remove("show");
});

const newsButton = document.getElementById("newsButton");
const newsModal = document.getElementById("newsModal");
const closeNewsModal = document.getElementById("closeNewsModal");

if(newsButton && newsModal && closeNewsModal){
    newsButton.addEventListener("click", () => {
        newsModal.classList.add("show");
    });

    closeNewsModal.addEventListener("click", () => {
        newsModal.classList.remove("show");
    });
}

