import { selecionarComposto, selecionarElementoDaTabela } from './selection.js';
import { mostrarReacao } from './reaction.js';
import { iniciarModal} from './ui.js';

document.addEventListener("DOMContentLoaded", () => {
    iniciarModal();
});
window.selecionarElementoDaTabela = selecionarElementoDaTabela;
window.selecionarComposto = selecionarComposto;
window.mostrarReacao = mostrarReacao;