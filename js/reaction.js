import { REACOES } from './data.js';

export function mostrarReacao() {
    const e1 = document.getElementById("element1").value;
    const e2 = document.getElementById("element2").value;
    
    if (!e1 || !e2) {
        alert("Selecione dois elementos primeiro");
        return;
    }
    
    const chave = [e1, e2].sort().join("+");
    const reacao = REACOES[chave];

    console.log("chave:", chave);
    console.log("reacao:", reacao);

    const titulo = document.getElementById("titulo");
    const descricao = document.getElementById("descricao");
    const imagem = document.getElementById("imagem");
    const resultado = document.getElementById("resultado");

    if (!reacao) {
        titulo.innerText = "Sem reação";
        descricao.innerText = "Não cadastrada";
        imagem.style.display = "none";
        resultado.style.display = "block";
        return;
    }

    titulo.innerText = reacao.titulo;
    descricao.innerText = reacao.descricao;

    imagem.src = reacao.imagem;
    imagem.style.display = "";

    resultado.style.display = "block";
}