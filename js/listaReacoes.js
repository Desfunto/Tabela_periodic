import { REACOES } from './data.js';

export function carregarSelectReacoes() {
    const select = document.getElementById("selectReacoes");

    if (!select) return;

    Object.keys(REACOES).forEach(chave => {
        const reacao = REACOES[chave];

        const option = document.createElement("option");
        option.value = chave;
        option.textContent = reacao.equacao;

        select.appendChild(option);
    });

    select.addEventListener("change", () => {
        const chave = select.value;
        if (!chave) return;

        const reacao = REACOES[chave];

        // 🔥 Atualiza direto, sem depender de outro select
        document.getElementById("titulo").innerText = reacao.titulo;
        document.getElementById("descricao").innerText = reacao.descricao;
        document.getElementById("equacao").innerText = reacao.equacao;
        document.getElementById("ligacao").innerText = reacao.ligacao;
        document.getElementById("condicoes").innerText = reacao.condicoes;

        const imagem = document.getElementById("imagem");
        imagem.src = reacao.imagem;
        imagem.style.display = "";

        document.getElementById("resultado").style.display = "block";
    });
}