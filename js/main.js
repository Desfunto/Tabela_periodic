import { selecionarComposto, selecionarElementoDaTabela } from './selection.js';
import { mostrarReacao } from './reaction.js';
import { iniciarModal } from './ui.js';
import { carregarSelectReacoes } from './listaReacoes.js';

document.addEventListener("DOMContentLoaded", () => {
    iniciarModal();
    carregarSelectReacoes();
});

window.selecionarElementoDaTabela = selecionarElementoDaTabela;
window.selecionarComposto = selecionarComposto;
window.mostrarReacao = mostrarReacao;