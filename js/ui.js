import { elementData } from './data.js';

export function mostrarPainelElemento(sym) {
    const data = elementData[sym];
    if (!data) return;

    document.getElementById("popup-titulo").innerText = data.nome;
    document.getElementById("popup-simbolo").innerText = `Símbolo: ${sym}`;
    document.getElementById("popup-numero").innerText = `Número: ${data.numero}`;
    document.getElementById("popup-massa").innerText = `Massa: ${data.massa}`;

    const img = document.getElementById("popup-img");
    img.src = data.imagem;

    document.getElementById("group_popup_panel").style.display = "flex";
}

export function iniciarModal() {
    const popupImg = document.getElementById("popup-img");
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("imgAmpliada");
    const closeBtn = document.querySelector(".image-modal .close");

    if (!popupImg || !modal || !modalImg || !closeBtn) return;

    popupImg.addEventListener("click", () => {
        modal.style.display = "flex";
        modalImg.src = popupImg.src;
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
}