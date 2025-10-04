// ====== SELEÇÃO via TABELA/COMPOSTOS ======
let proximo = 'element1';
const chips = document.getElementById('chips');

function ensureOption(selectEl, value, label) {
    const exists = Array.from(selectEl.options).some(o => o.value === value);
    if (!exists) {
        const opt = document.createElement('option');
        opt.value = value;
        opt.textContent = label;
        selectEl.appendChild(opt);
    }
}

function updateChips() {
    const e1 = document.getElementById('element1');
    const e2 = document.getElementById('element2');
    const t1 = e1.options[e1.selectedIndex]?.text || e1.value || '-';
    const t2 = e2.options[e2.selectedIndex]?.text || e2.value || '-';

    chips.innerHTML = `
        <div class="chip">Elemento 1: ${t1}</div>
        <div class="chip">Elemento 2: ${t2}</div>
        <div class="chip">Próximo clique → ${(proximo === 'element1') ? 'Elemento 1' : 'Elemento 2'}</div>`;
}

const elementNames = {
    H: "Hidrogênio", He: "Hélio", Li: "Lítio", Be: "Berílio", B: "Boro", C: "Carbono", N: "Nitrogênio", O: "Oxigênio", F: "Flúor",
    Ne: "Neônio", Na: "Sódio", Mg: "Magnésio", Al: "Alumínio", Si: "Silício", P: "Fósforo", S: "Enxofre", Cl: "Cloro", Ar: "Argônio",
    K: "Potássio", Ca: "Cálcio", Sc: "Escândio", Ti: "Titânio", V: "Vanádio", Cr: "Cromo", Mn: "Manganês", Fe: "Ferro", Co: "Cobalto",
    Ni: "Níquel", Cu: "Cobre", Zn: "Zinco", Ga: "Gálio", Ge: "Germânio", As: "Arsênio", Se: "Selênio", Br: "Bromo", Kr: "Criptônio", Rb: "Rubídio",
    Sr: "Estrôncio", Y: "Ítrio", Zr: "Zircônio", Nb: "Nióbio", Mo: "Molibdênio", Tc: "Tecnécio", Ru: "Rutênio", Rh: "Ródio", Pd: "Paládio", Ag: "Prata",
    Cd: "Cádmio", In: "Índio", Sn: "Estanho", Sb: "Antimônio", Te: "Telúrio", I: "Iodo", Xe: "Xenônio", Cs: "Césio", Ba: "Bário", La: "Lantânio",
    Ce: "Cério", Pr: "Praseodímio", Nd: "Neodímio", Pm: "Promécio", Sm: "Samário", Eu: "Európio", Gd: "Gadolínio", Tb: "Térbio", Dy: "Disprósio",
    Ho: "Hólmio", Er: "Érbio", Tm: "Túlio", Yb: "Itérbio", Lu: "Lutécio", Hf: "Háfnio", Ta: "Tântalo", W: "Tungstênio", Re: "Rênio", Os: "Ósmio",
    Ir: "Irídio", Pt: "Platina", Au: "Ouro", Hg: "Mercúrio", Tl: "Tálio", Pb: "Chumbo", Bi: "Bismuto", Po: "Polônio", At: "Astato", Rn: "Radônio",
    Fr: "Frâncio", Ra: "Rádio", Ac: "Actínio", Th: "Tório", Pa: "Protactínio", U: "Urânio", Np: "Neptúnio", Pu: "Plutônio", Am: "Amerício",
    Cm: "Cúrio", Bk: "Berkélio", Cf: "Califórnio", Es: "Einstênio", Fm: "Férmio", Md: "Mendelévio", No: "Nobélio", Lr: "Laurêncio", Rf: "Rutherfórdio",
    Db: "Dúbnio", Sg: "Seabórgio", Bh: "Bóhrio", Hs: "Hássio", Mt: "Meitnério", Ds: "Darmstádio", Rg: "Roentgênio", Cn: "Copernício",
    Nh: "Nihônio", Fl: "Fleróvio", Mc: "Moscóvio", Lv: "Livermório", Ts: "Tenessino", Og: "Oganessônio"
};

const valueMap = {
    H: "hidrogenio", He: "helio", Li: "litio", Be: "berilio", B: "boro", C: "carbono", N: "nitrogenio", O: "oxigenio", F: "fluor", Ne: "neonio",
    Na: "sodio", Mg: "magnesio", Al: "aluminio", Si: "silicio", P: "fosforo", S: "enxofre", Cl: "cloro", Ar: "argonio", K: "potassio", Ca: "calcio",
    Sc: "escandio", Ti: "titanio", V: "vanadio", Cr: "cromo", Mn: "manganes", Fe: "ferro", Co: "cobalto", Ni: "niquel", Cu: "cobre", Zn: "zinco",
    Ga: "galio", Ge: "germanio", As: "arsenio", Se: "selenio", Br: "bromo", Kr: "criptonio", Rb: "rubidio", Sr: "estroncio", Y: "itrio",
    Zr: "zirconio", Nb: "niobio", Mo: "molibdenio", Tc: "tecnecio", Ru: "rutenio", Rh: "rodio", Pd: "paladio", Ag: "prata", Cd: "cadmio",
    In: "indio", Sn: "estanho", Sb: "antimonio", Te: "telurio", I: "iodo", Xe: "xenonio", Cs: "cesio", Ba: "bario", La: "lantanio", Ce: "cerio",
    Pr: "praseodimio", Nd: "neodimio", Pm: "promecio", Sm: "samario", Eu: "europio", Gd: "gadolnio", Tb: "terbio", Dy: "disprosio", Ho: "holmio",
    Er: "erbio", Tm: "tulio", Yb: "iterbio", Lu: "lutecio", Hf: "hafnio", Ta: "tantalo", W: "tungstenio", Re: "renio", Os: "osmiio", Ir: "iridio",
    Pt: "platina", Au: "ouro", Hg: "mercurio", Tl: "talio", Pb: "chumbo", Bi: "bismuto", Po: "polonio", At: "astato", Rn: "radonio", Fr: "francio",
    Ra: "radio", Ac: "actinio", Th: "torio", Pa: "protactinio", U: "uranio", Np: "neptunio", Pu: "plutonio", Am: "americio", Cm: "curio", Bk: "berkelio",
    Cf: "californio", Es: "einstenio", Fm: "fermio", Md: "mendelevio", No: "nobelio", Lr: "laurencio", Rf: "rutherfodio", Db: "dubnio", Sg: "seaborgio",
    Bh: "bohrio", Hs: "hassio", Mt: "meitnerio", Ds: "darmstadio", Rg: "roentgenio", Cn: "copernicio", Nh: "nihonio", Fl: "flerovio", Mc: "moscovio",
    Lv: "livermorio", Ts: "tennessino", Og: "oganessonio"
};

const elementData = {
    H: { numero: 1, massa: "1,008", nome: "Hidrogênio" },
    He: { numero: 2, massa: "4,0026", nome: "Hélio" },
    Li: { numero: 3, massa: "6,94", nome: "Lítio" },
    Be: { numero: 4, massa: "9,0122", nome: "Berílio" },
    B: { numero: 5, massa: "10,81", nome: "Boro" },
    C: { numero: 6, massa: "12,011", nome: "Carbono" },
    N: { numero: 7, massa: "14,007", nome: "Nitrogênio" },
    O: { numero: 8, massa: "15,999", nome: "Oxigênio" },
    F: { numero: 9, massa: "18,998", nome: "Flúor" },
    Ne: { numero: 10, massa: "20,180", nome: "Neônio" },
    Na: { numero: 11, massa: "22,990", nome: "Sódio" },
    Mg: { numero: 12, massa: "24,305", nome: "Magnésio" },
    Al: { numero: 13, massa: "26,982", nome: "Alumínio" },
    Si: { numero: 14, massa: "28,085", nome: "Silício" },
    P: { numero: 15, massa: "30,974", nome: "Fósforo" },
    S: { numero: 16, massa: "32,06", nome: "Enxofre" },
    Cl: { numero: 17, massa: "35,45", nome: "Cloro" },
    Ar: { numero: 18, massa: "39,948", nome: "Argônio" },
    K: { numero: 19, massa: "39,098", nome: "Potássio" },
    Ca: { numero: 20, massa: "40,078", nome: "Cálcio" },
    Sc: { numero: 21, massa: "44,956", nome: "Escândio" },
    Ti: { numero: 22, massa: "47,867", nome: "Titânio" },
    V: { numero: 23, massa: "50,942", nome: "Vanádio" },
    Cr: { numero: 24, massa: "51,996", nome: "Cromo" },
    Mn: { numero: 25, massa: "54,938", nome: "Manganês" },
    Fe: { numero: 26, massa: "55,845", nome: "Ferro" },
    Co: { numero: 27, massa: "58,933", nome: "Cobalto" },
    Ni: { numero: 28, massa: "58,693", nome: "Níquel" },
    Cu: { numero: 29, massa: "63,546", nome: "Cobre" },
    Zn: { numero: 30, massa: "65,38", nome: "Zinco" },
    Ga: { numero: 31, massa: "69,723", nome: "Gálio" },
    Ge: { numero: 32, massa: "72,630", nome: "Germânio" },
    As: { numero: 33, massa: "74,922", nome: "Arsênio" },
    Se: { numero: 34, massa: "78,971", nome: "Selênio" },
    Br: { numero: 35, massa: "79,904", nome: "Bromo" },
    Kr: { numero: 36, massa: "83,798", nome: "Criptônio" },
    Rb: { numero: 37, massa: "85,468", nome: "Rubídio" },
    Sr: { numero: 38, massa: "87,62", nome: "Estrôncio" },
    Y: { numero: 39, massa: "88,906", nome: "Ítrio" },
    Zr: { numero: 40, massa: "91,224", nome: "Zircônio" },
    Nb: { numero: 41, massa: "92,906", nome: "Nióbio" },
    Mo: { numero: 42, massa: "95,95", nome: "Molibdênio" },
    Tc: { numero: 43, massa: "[98]", nome: "Tecnécio" },
    Ru: { numero: 44, massa: "101,07", nome: "Rutênio" },
    Rh: { numero: 45, massa: "102,91", nome: "Ródio" },
    Pd: { numero: 46, massa: "106,42", nome: "Paládio" },
    Ag: { numero: 47, massa: "107,87", nome: "Prata" },
    Cd: { numero: 48, massa: "112,41", nome: "Cádmio" },
    In: { numero: 49, massa: "114,82", nome: "Índio" },
    Sn: { numero: 50, massa: "118,71", nome: "Estanho" },
    Sb: { numero: 51, massa: "121,76", nome: "Antimônio" },
    Te: { numero: 52, massa: "127,60", nome: "Telúrio" },
    I: { numero: 53, massa: "126,90", nome: "Iodo" },
    Xe: { numero: 54, massa: "131,29", nome: "Xenônio" },
    Cs: { numero: 55, massa: "132,91", nome: "Césio" },
    Ba: { numero: 56, massa: "137,33", nome: "Bário" },
    La: { numero: 57, massa: "138,91", nome: "Lantânio" },
    Ce: { numero: 58, massa: "140,12", nome: "Cério" },
    Pr: { numero: 59, massa: "140,91", nome: "Praseodímio" },
    Nd: { numero: 60, massa: "144,24", nome: "Neodímio" },
    Pm: { numero: 61, massa: "[145]", nome: "Promécio" },
    Sm: { numero: 62, massa: "150,36", nome: "Samário" },
    Eu: { numero: 63, massa: "151,96", nome: "Európio" },
    Gd: { numero: 64, massa: "157,25", nome: "Gadolínio" },
    Tb: { numero: 65, massa: "158,93", nome: "Térbio" },
    Dy: { numero: 66, massa: "162,50", nome: "Disprósio" },
    Ho: { numero: 67, massa: "164,93", nome: "Hólmio" },
    Er: { numero: 68, massa: "167,26", nome: "Érbio" },
    Tm: { numero: 69, massa: "168,93", nome: "Túlio" },
    Yb: { numero: 70, massa: "173,05", nome: "Itérbio" },
    Lu: { numero: 71, massa: "174,97", nome: "Lutécio" },
    Hf: { numero: 72, massa: "178,49", nome: "Háfnio" },
    Ta: { numero: 73, massa: "180,95", nome: "Tântalo" },
    W: { numero: 74, massa: "183,84", nome: "Tungstênio" },
    Re: { numero: 75, massa: "186,21", nome: "Rênio" },
    Os: { numero: 76, massa: "190,23", nome: "Ósmio" },
    Ir: { numero: 77, massa: "192,22", nome: "Irídio" },
    Pt: { numero: 78, massa: "195,08", nome: "Platina" },
    Au: { numero: 79, massa: "196,97", nome: "Ouro" },
    Hg: { numero: 80, massa: "200,59", nome: "Mercúrio" },
    Tl: { numero: 81, massa: "204,38", nome: "Tálio" },
    Pb: { numero: 82, massa: "207,2", nome: "Chumbo" },
    Bi: { numero: 83, massa: "208,98", nome: "Bismuto" },
    Po: { numero: 84, massa: "[209]", nome: "Polônio" },
    At: { numero: 85, massa: "[210]", nome: "Astato" },
    Rn: { numero: 86, massa: "[222]", nome: "Radônio" },
    Fr: { numero: 87, massa: "[223]", nome: "Frâncio" },
    Ra: { numero: 88, massa: "[226]", nome: "Rádio" },
    Ac: { numero: 89, massa: "[227]", nome: "Actínio" },
    Th: { numero: 90, massa: "232,04", nome: "Tório" },
    Pa: { numero: 91, massa: "231,04", nome: "Protactínio" },
    U: { numero: 92, massa: "238,03", nome: "Urânio" },
    Np: { numero: 93, massa: "[237]", nome: "Neptúnio" },
    Pu: { numero: 94, massa: "[244]", nome: "Plutônio" },
    Am: { numero: 95, massa: "[243]", nome: "Amerício" },
    Cm: { numero: 96, massa: "[247]", nome: "Cúrio" },
    Bk: { numero: 97, massa: "[247]", nome: "Berkélio" },
    Cf: { numero: 98, massa: "[251]", nome: "Califórnio" },
    Es: { numero: 99, massa: "[252]", nome: "Einstênio" },
    Fm: { numero: 100, massa: "[257]", nome: "Férmio" },
    Md: { numero: 101, massa: "[258]", nome: "Mendelévio" },
    No: { numero: 102, massa: "[259]", nome: "Nobélio" },
    Lr: { numero: 103, massa: "[262]", nome: "Laurêncio" },
    Rf: { numero: 104, massa: "[267]", nome: "Rutherfórdio" },
    Db: { numero: 105, massa: "[270]", nome: "Dúbnio" },
    Sg: { numero: 106, massa: "[271]", nome: "Seabórgio" },
    Bh: { numero: 107, massa: "[270]", nome: "Bóhrio" },
    Hs: { numero: 108, massa: "[277]", nome: "Hássio" },
    Mt: { numero: 109, massa: "[276]", nome: "Meitnério" },
    Ds: { numero: 110, massa: "[281]", nome: "Darmstádio" },
    Rg: { numero: 111, massa: "[282]", nome: "Roentgênio" },
    Cn: { numero: 112, massa: "[285]", nome: "Copernício" },
    Nh: { numero: 113, massa: "[286]", nome: "Nihônio" },
    Fl: { numero: 114, massa: "[289]", nome: "Fleróvio" },
    Mc: { numero: 115, massa: "[290]", nome: "Moscóvio" },
    Lv: { numero: 116, massa: "[293]", nome: "Livermório" },
    Ts: { numero: 117, massa: "[294]", nome: "Tenessino" },
    Og: { numero: 118, massa: "[294]", nome: "Oganessônio" }
};

function mostrarPainelElemento(sym) {
    const data = elementData[sym];
    if (data) {
        document.getElementById("popup-titulo").innerText = data.nome;
        document.getElementById("popup-simbolo").innerText = `Símbolo: ${sym}`;
        document.getElementById("popup-numero").innerText = `Número atômico: ${data.numero}`;
        document.getElementById("popup-massa").innerText = `Massa atômica: ${data.massa}`;
    }
    document.getElementById("group_popup_panel").style.display = "flex";
}

// ====== Modal da imagem =======
const popupImg = document.getElementById("popup-img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("imgAmpliada");
const closeBtn = document.querySelector(".image-modal .close");

// ====== Quando clicar na imagem do popup -> abra modal
popupImg.addEventListener("click", () => {
    modal.style.display = "flex"
    modalImg.src = popupImg.src;
});

// ====== Quando clicar no X -> fecha o modal
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
})
// ====== Quando clicar fora da imagem -> fecha o modal
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});


function selecionarElementoDaTabela(sym) {
    const value = valueMap[sym] || sym.toLowerCase();
    const name = elementNames[sym] || sym;
    const label = `${name} (${sym})`; // "Hidrogênio (H)"

    const sel = document.getElementById(proximo);
    ensureOption(sel, value, label);
    sel.value = value;

    proximo = (proximo === 'element1') ? 'element2' : 'element1';
    updateChips();

    mostrarPainelElemento(sym);
}


function selecionarComposto(value, label) {
    const sel = document.getElementById(proximo);
    ensureOption(sel, value, label);
    sel.value = value;
    proximo = (proximo === 'element1') ? 'element2' : 'element1';
    updateChips();
}

function mostrarReacao() {
    const e1 = document.getElementById("element1").value;
    const e2 = document.getElementById("element2").value;
    const resultado = document.getElementById("resultado");
    const titulo = document.getElementById("titulo");
    const descricao = document.getElementById("descricao");
    const imagem = document.getElementById("imagem");

    let reacao = {
        titulo: "Nenhuma reação cadastrada",
        descricao: "Escolha outra combinação para visualizar a reação.",
        imagem: ""
    };

    // Reações cadastradas
    //#1 água / sódio
    if ((e1 === "agua" && e2 === "sodio") || (e1 === "sodio" && e2 === "agua")) {
        reacao = {
            titulo: "Reação: Sódio + Água → Hidróxido de Sódio + Hidrogênio",
            descricao: "Reação altamente exotérmica que libera hidrogênio gasoso e calor, formando NaOH.",
            imagem: "./src/IMG/reacao_agua_sodio.jpg"
        };
    }
    //#2 hidrogênio / oxigênio
    if ((e1 === "hidrogenio" && e2 === "oxigenio") || (e1 === "oxigenio" && e2 === "hidrogenio")) {
        reacao = {
            titulo: "Reação: Hidrogênio + Oxigênio → Água",
            descricao: "Combustão do H₂ em presença de O₂ formando água, reação exotérmica liberando energia.",
            imagem: "./src/IMG/reacao_hidrogenio_oxigenio.png"
        };
    }
    //#3 cloro / sódio
    if ((e1 === "cloro" && e2 === "sodio") || (e1 === "sodio" && e2 === "cloro")) {
        reacao = {
            titulo: "Reação: Sódio + Cloro → Cloreto de Sódio",
            descricao: "Reação de síntese formando sal de cozinha (NaCl), altamente exotérmica.",
            imagem: "./src/IMG/reacao_sodio_cloro.png"
        };
    }
    //#4 amônia / Ácido Sulfúrico
    if ((e1 === "amonia" && e2 === "acido-sulfurico") || (e1 === "acido-sulfurico" && e2 === "amonia")) {
        reacao = {
            titulo: "Reação: Amônia + Ácido Sulfúrico → Sulfato de Amônio",
            descricao: "Reação de neutralização ácido-base formando (NH₄)₂SO₄.",
            imagem: "reacao_amonia_acido.png"
        };
    }


    titulo.innerText = reacao.titulo;
    descricao.innerText = reacao.descricao;
    imagem.src = reacao.imagem;
    resultado.style.display = "block";
}