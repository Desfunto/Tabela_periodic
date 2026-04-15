import { elementData } from './data.js';
import { proximo } from './state.js';

export function updateChips() {
    const chips = document.getElementById('chips');
    const e1 = document.getElementById('element1');
    const e2 = document.getElementById('element2');

    const t1 = e1.options[e1.selectedIndex]?.text || '-';
    const t2 = e2.options[e2.selectedIndex]?.text || '-';

    const proximoLabel = proximo === 'element1' ? 'Elemento 1' : 'Elemento 2';

    chips.innerHTML = `
        <div class="chip">Elemento 1: ${t1}</div>
        <div class="chip">Elemento 2: ${t2}</div>
        <div class="chip">Próximo → ${proximoLabel}</div>
    `;
}

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