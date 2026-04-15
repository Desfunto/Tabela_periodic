import { valueMap, elementNames } from './data.js';
import { proximo, setProximo } from './state.js';
import { updateChips, mostrarPainelElemento } from './ui.js';

export function ensureOption(selectEl, value, label) {
    const exists = Array.from(selectEl.options).some(o => o.value === value);

    if (!exists) {
        const opt = document.createElement('option');
        opt.value = value;
        opt.textContent = label;
        selectEl.appendChild(opt);
    }
}

export function selecionarElementoDaTabela(sym) {
    const value = valueMap[sym] || sym.toLowerCase();
    const name = elementNames[sym] || sym;
    const label = `${name} (${sym})`;

    const select = document.getElementById(proximo);

    ensureOption(select, value, label);
    select.value = value;

    setProximo(proximo === 'element1' ? 'element2' : 'element1');

    updateChips();
    mostrarPainelElemento(sym);
}

export function selecionarComposto(value, label) {
    const select = document.getElementById(proximo);

    ensureOption(select, value, label);
    select.value = value;

    setProximo(proximo === 'element1' ? 'element2' : 'element1');

    updateChips();
}