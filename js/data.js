export const elementNames = {
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

export const valueMap = {
    H: "hidrogenio", He: "helio", Li: "litio", Be: "berilio", B: "boro", C: "carbono", N: "nitrogenio", O: "oxigenio", F: "fluor", Ne: "neonio",
    Na: "sodio", Mg: "magnesio", Al: "aluminio", Si: "silicio", P: "fosforo", S: "enxofre", Cl: "cloro", Ar: "argonio", K: "potassio", Ca: "calcio",
    Sc: "escandio", Ti: "titanio", V: "vanadio", Cr: "cromo", Mn: "manganes", Fe: "ferro", Co: "cobalto", Ni: "niquel", Cu: "cobre", Zn: "zinco",
    Ga: "galio", Ge: "germanio", As: "arsenio", Se: "selenio", Br: "bromo", Kr: "criptonio", Rb: "rubidio", Sr: "estroncio", Y: "itrio",
    Zr: "zirconio", Nb: "niobio", Mo: "molibdenio", Tc: "tecnecio", Ru: "rutenio", Rh: "rodio", Pd: "paladio", Ag: "prata", Cd: "cadmio",
    In: "indio", Sn: "estanho", Sb: "antimonio", Te: "telurio", I: "iodo", Xe: "xenonio", Cs: "cesio", Ba: "bario", La: "lantanio", Ce: "cerio",
    Pr: "praseodimio", Nd: "neodimio", Pm: "promecio", Sm: "samario", Eu: "europio", Gd: "gadolinio", Tb: "terbio", Dy: "disprosio", Ho: "holmio",
    Er: "erbio", Tm: "tulio", Yb: "iterbio", Lu: "lutecio", Hf: "hafnio", Ta: "tantalo", W: "tungstenio", Re: "renio", Os: "osmio", Ir: "iridio",
    Pt: "platina", Au: "ouro", Hg: "mercurio", Tl: "talio", Pb: "chumbo", Bi: "bismuto", Po: "polonio", At: "astato", Rn: "radonio", Fr: "francio",
    Ra: "radio", Ac: "actinio", Th: "torio", Pa: "protactinio", U: "uranio", Np: "neptunio", Pu: "plutonio", Am: "americio", Cm: "curio", Bk: "berkelio",
    Cf: "californio", Es: "einstenio", Fm: "fermio", Md: "mendelevio", No: "nobelio", Lr: "laurencio", Rf: "rutherfordio", Db: "dubnio", Sg: "seaborgio",
    Bh: "bohrio", Hs: "hassio", Mt: "meitnerio", Ds: "darmstadio", Rg: "roentgenio", Cn: "copernicio", Nh: "nihonio", Fl: "flerovio", Mc: "moscovio",
    Lv: "livermorio", Ts: "tennessino", Og: "oganessonio"
};

export const elementData = {
    H: { numero: 1, massa: "1,008", nome: "Hidrogênio", imagem:"./src/IMG/hidrogenio.png" },
    He: { numero: 2, massa: "4,0026", nome: "Hélio", imagem:"./src/IMG/helio.png" },
    Li: { numero: 3, massa: "6,94", nome: "Lítio", imagem:"./src/IMG/litio.png" },
    Be: { numero: 4, massa: "9,0122", nome: "Berílio", imagem:"./src/IMG/berilio.png" },
    B: { numero: 5, massa: "10,81", nome: "Boro", imagem:"./src/IMG/boro.png" },
    C: { numero: 6, massa: "12,011", nome: "Carbono", imagem:"./src/IMG/carbono.png" },
    N: { numero: 7, massa: "14,007", nome: "Nitrogênio", imagem:"./src/IMG/nitrogenio.png" },
    O: { numero: 8, massa: "15,999", nome: "Oxigênio", imagem:"./src/IMG/oxigenio.png" },
    F: { numero: 9, massa: "18,998", nome: "Flúor" , imagem:"./src/IMG/fluor.png"},
    Ne: { numero: 10, massa: "20,180", nome: "Neônio", imagem:"./src/IMG/neonio.png" },
    Na: { numero: 11, massa: "22,990", nome: "Sódio", imagem:"./src/IMG/sodio.png" },
    Mg: { numero: 12, massa: "24,305", nome: "Magnésio", imagem:"./src/IMG/magnesio.png"},
    Al: { numero: 13, massa: "26,982", nome: "Alumínio", imagem:"./src/IMG/aluminio.png"},
    Si: { numero: 14, massa: "28,085", nome: "Silício", imagem:"./src/IMG/silicio.png" },
    P: { numero: 15, massa: "30,974", nome: "Fósforo", imagem:"./src/IMG/fosforo.png" },
    S: { numero: 16, massa: "32,06", nome: "Enxofre", imagem:"./src/IMG/enxofre.png" },
    Cl: { numero: 17, massa: "35,45", nome: "Cloro", imagem:"./src/IMG/cloro.png" },
    Ar: { numero: 18, massa: "39,948", nome: "Argônio", imagem:"./src/IMG/argonio.png" },
    K: { numero: 19, massa: "39,098", nome: "Potássio", imagem:"./src/IMG/potassio.png" },
    Ca: { numero: 20, massa: "40,078", nome: "Cálcio", imagem:"./src/IMG/calcio.png" },
    Sc: { numero: 21, massa: "44,956", nome: "Escândio", imagem:"./src/IMG/escandio.png" },
    Ti: { numero: 22, massa: "47,867", nome: "Titânio", imagem:"./src/IMG/titanio.png" },
    V: { numero: 23, massa: "50,942", nome: "Vanádio", imagem:"./src/IMG/vanadio.png" },
    Cr: { numero: 24, massa: "51,996", nome: "Cromo", imagem:"./src/IMG/cromo.png" },
    Mn: { numero: 25, massa: "54,938", nome: "Manganês", imagem:"./src/IMG/manganes.png" },
    Fe: { numero: 26, massa: "55,845", nome: "Ferro", imagem:"./src/IMG/ferro.png" },
    Co: { numero: 27, massa: "58,933", nome: "Cobalto", imagem:"./src/IMG/cobalto.png" },
    Ni: { numero: 28, massa: "58,693", nome: "Níquel", imagem:"./src/IMG/niquel.png" },
    Cu: { numero: 29, massa: "63,546", nome: "Cobre", imagem:"./src/IMG/cobre.png" },
    Zn: { numero: 30, massa: "65,38", nome: "Zinco", imagem:"./src/IMG/zinco.png" },
    Ga: { numero: 31, massa: "69,723", nome: "Gálio", imagem:"./src/IMG/galio.png" },
    Ge: { numero: 32, massa: "72,630", nome: "Germânio", imagem:"./src/IMG/germanio.png" },
    As: { numero: 33, massa: "74,922", nome: "Arsênio", imagem:"./src/IMG/arsenio.png" },
    Se: { numero: 34, massa: "78,971", nome: "Selênio", imagem:"./src/IMG/selenio.png" },
    Br: { numero: 35, massa: "79,904", nome: "Bromo", imagem:"./src/IMG/bromo.png" },
    Kr: { numero: 36, massa: "83,798", nome: "Criptônio", imagem:"./src/IMG/criptonio.png" },
    Rb: { numero: 37, massa: "85,468", nome: "Rubídio", imagem:"./src/IMG/rubidio.png" },
    Sr: { numero: 38, massa: "87,62", nome: "Estrôncio", imagem:"./src/IMG/estroncio.png" },
    Y: { numero: 39, massa: "88,906", nome: "Ítrio", imagem:"./src/IMG/itrio.png" },
    Zr: { numero: 40, massa: "91,224", nome: "Zircônio", imagem:"./src/IMG/zirconio.png" },
    Nb: { numero: 41, massa: "92,906", nome: "Nióbio", imagem:"./src/IMG/niobio.png" },
    Mo: { numero: 42, massa: "95,95", nome: "Molibdênio", imagem:"./src/IMG/molibdenio.png" },
    Tc: { numero: 43, massa: "98", nome: "Tecnécio", imagem:"./src/IMG/tecnecio.png" },
    Ru: { numero: 44, massa: "101,07", nome: "Rutênio", imagem:"./src/IMG/rutenio.png" },
    Rh: { numero: 45, massa: "102,905", nome: "Ródio", imagem:"./src/IMG/rodio.png" },
    Pd: { numero: 46, massa: "106,42", nome: "Paládio", imagem:"./src/IMG/paladio.png" },
    Ag: { numero: 47, massa: "107,868", nome: "Prata", imagem:"./src/IMG/prata.png" },
    Cd: { numero: 48, massa: "112,414", nome: "Cádmio", imagem:"./src/IMG/cadmio.png" },
    In: { numero: 49, massa: "114,818", nome: "Índio", imagem:"./src/IMG/indio.png" },
    Sn: { numero: 50, massa: "118,710", nome: "Estanho", imagem:"./src/IMG/estanho.png" },
    Sb: { numero: 51, massa: "121,760", nome: "Antimônio", imagem:"./src/IMG/antimonio.png" },
    Te: { numero: 52, massa: "127,60", nome: "Telúrio", imagem:"./src/IMG/telurio.png" },
    I: { numero: 53, massa: "126,904", nome: "Iodo", imagem:"./src/IMG/iodo.png" },
    Xe: { numero: 54, massa: "131,293", nome: "Xenônio", imagem:"./src/IMG/xenonio.png" },
    Cs: { numero: 55, massa: "132,905", nome: "Césio", imagem:"./src/IMG/cesio.png" },
    Ba: { numero: 56, massa: "137,327", nome: "Bário", imagem:"./src/IMG/bario.png" },
    La: { numero: 57, massa: "138,905", nome: "Lantânio", imagem:"./src/IMG/lantanio.png" },
    Ce: { numero: 58, massa: "140,116", nome: "Cério", imagem:"./src/IMG/cerio.png" },
    Pr: { numero: 59, massa: "140,908", nome: "Praseodímio", imagem:"./src/IMG/praseodimio.png" },
    Nd: { numero: 60, massa: "144,242", nome: "Neodímio", imagem:"./src/IMG/neodimio.png" },
    Pm: { numero: 61, massa: "145", nome: "Promécio", imagem:"./src/IMG/promecio.png" },
    Sm: { numero: 62, massa: "150,36", nome: "Samário", imagem:"./src/IMG/samario.png" },
    Eu: { numero: 63, massa: "151,964", nome: "Európio", imagem:"./src/IMG/europio.png" },
    Gd: { numero: 64, massa: "157,25", nome: "Gadolínio", imagem:"./src/IMG/gadolinio.png" },
    Tb: { numero: 65, massa: "158,925", nome: "Térbio", imagem:"./src/IMG/terbio.png" },
    Dy: { numero: 66, massa: "162,500", nome: "Disprósio", imagem:"./src/IMG/disprosio.png" },
    Ho: { numero: 67, massa: "164,930", nome: "Hólmio", imagem:"./src/IMG/holmio.png" },
    Er: { numero: 68, massa: "167,259", nome: "Érbio", imagem:"./src/IMG/erbio.png" },
    Tm: { numero: 69, massa: "168,934", nome: "Túlio", imagem:"./src/IMG/tulio.png" },
    Yb: { numero: 70, massa: "173,045", nome: "Itérbio", imagem:"./src/IMG/iterbio.png" },
    Lu: { numero: 71, massa: "174,967", nome: "Lutécio", imagem:"./src/IMG/lutecio.png" },
    Hf: { numero: 72, massa: "178,49", nome: "Háfnio", imagem:"./src/IMG/hafnio.png" },
    Ta: { numero: 73, massa: "180,948", nome: "Tântalo", imagem:"./src/IMG/tantalo.png" },
    W: { numero: 74, massa: "183,84", nome: "Tungstênio", imagem:"./src/IMG/tungstenio.png" },
    Re: { numero: 75, massa: "186,207", nome: "Rênio", imagem:"./src/IMG/renio.png" },
    Os: { numero: 76, massa: "190,23", nome: "Ósmio", imagem:"./src/IMG/osmio.png" },
    Ir: { numero: 77, massa: "192,217", nome: "Irídio", imagem:"./src/IMG/iridio.png" },
    Pt: { numero: 78, massa: "195,084", nome: "Platina", imagem:"./src/IMG/platina.png" },
    Au: { numero: 79, massa: "196,967", nome: "Ouro", imagem:"./src/IMG/ouro.png" },
    Hg: { numero: 80, massa: "200,592", nome: "Mercúrio", imagem:"./src/IMG/mercurio.png" },
    Tl: { numero: 81, massa: "204,38", nome: "Tálio", imagem:"./src/IMG/talio.png" },
    Pb: { numero: 82, massa: "207,2", nome: "Chumbo", imagem:"./src/IMG/chumbo.png" },
    Bi: { numero: 83, massa: "208,980", nome: "Bismuto", imagem:"./src/IMG/bismuto.png" },
    Po: { numero: 84, massa: "209", nome: "Polônio", imagem:"./src/IMG/polonio.png" },
    At: { numero: 85, massa: "210", nome: "Astato", imagem:"./src/IMG/astato.png" },
    Rn: { numero: 86, massa: "222", nome: "Radônio", imagem:"./src/IMG/radonio.png" },
    Fr: { numero: 87, massa: "223", nome: "Frâncio", imagem:"./src/IMG/francio.png" },
    Ra: { numero: 88, massa: "226", nome: "Rádio", imagem:"./src/IMG/radio.png" },
    Ac: { numero: 89, massa: "227", nome: "Actínio", imagem:"./src/IMG/actinio.png" },
    Th: { numero: 90, massa: "232,037", nome: "Tório", imagem:"./src/IMG/torio.png" },
    Pa: { numero: 91, massa: "231,036", nome: "Protactínio", imagem:"./src/IMG/protactinio.png" },
    U: { numero: 92, massa: "238,029", nome: "Urânio", imagem:"./src/IMG/uranio.png" },
    Np: { numero: 93, massa: "237", nome: "Netúnio", imagem:"./src/IMG/netunio.png" },
    Pu: { numero: 94, massa: "244", nome: "Plutônio", imagem:"./src/IMG/plutonio.png" },
    Am: { numero: 95, massa: "243", nome: "Amerício", imagem:"./src/IMG/americio.png" },
    Cm: { numero: 96, massa: "247", nome: "Cúrio", imagem:"./src/IMG/curio.png" },
    Bk: { numero: 97, massa: "247", nome: "Berquélio", imagem:"./src/IMG/berquelio.png" },
    Cf: { numero: 98, massa: "251", nome: "Califórnio", imagem:"./src/IMG/californio.png" },
    Es: { numero: 99, massa: "252", nome: "Einstênio", imagem:"./src/IMG/einstenio.png" },
    Fm: { numero: 100, massa: "257", nome: "Férmio", imagem:"./src/IMG/fermio.png" },
    Md: { numero: 101, massa: "258", nome: "Mendelévio", imagem:"./src/IMG/mendelevio.png" },
    No: { numero: 102, massa: "259", nome: "Nobélio", imagem:"./src/IMG/nobelio.png" },
    Lr: { numero: 103, massa: "266", nome: "Laurêncio", imagem:"./src/IMG/laurencio.png" },
    Rf: { numero: 104, massa: "267", nome: "Rutherfórdio", imagem:"./src/IMG/rutherfordio.png" },
    Db: { numero: 105, massa: "268", nome: "Dúbnio", imagem:"./src/IMG/dubnio.png" },
    Sg: { numero: 106, massa: "269", nome: "Seabórgio", imagem:"./src/IMG/seaborgio.png" },
    Bh: { numero: 107, massa: "270", nome: "Bóhrio", imagem:"./src/IMG/bohrio.png" },
    Hs: { numero: 108, massa: "270", nome: "Hássio", imagem:"./src/IMG/hassio.png" },
    Mt: { numero: 109, massa: "278", nome: "Meitnério", imagem:"./src/IMG/meitnerio.png" },
    Ds: { numero: 110, massa: "281", nome: "Darmstádio", imagem:"./src/IMG/darmstadtio.png" },
    Rg: { numero: 111, massa: "282", nome: "Roentgênio", imagem:"./src/IMG/roentgenio.png" },
    Cn: { numero: 112, massa: "285", nome: "Copernício", imagem:"./src/IMG/copernicio.png" },
    Nh: { numero: 113, massa: "286", nome: "Nihônio", imagem:"./src/IMG/nihonio.png" },
    Fl: { numero: 114, massa: "289", nome: "Fleróvio", imagem:"./src/IMG/flerovio.png" },
    Mc: { numero: 115, massa: "290", nome: "Moscóvio", imagem:"./src/IMG/moscovio.png" },
    Lv: { numero: 116, massa: "293", nome: "Livermório", imagem:"./src/IMG/livermorio.png" },
    Ts: { numero: 117, massa: "294", nome: "Tenessino", imagem:"./src/IMG/tennessino.png" },
    Og: { numero: 118, massa: "294", nome: "Oganessônio", imagem:"./src/IMG/oganesson.png" },
};

export const REACOES = {

    // 1° C + O
    "carbono+oxigenio": {
        titulo: "Reação: Carbono + Oxigênio → Dióxido de Carbono",
        equacao: "C + O₂ → CO₂",
        descricao: "Reação de combustão completa do carbono, formando dióxido de carbono (CO₂), com liberação de energia.",
        ligacao: "Covalente",
        condicoes: "Alta temperatura (combustão)",
        imagem: "./src/REACT/CO2.jpeg"
    },

    // 2° Xe + F
    "fluor+xenonio": {
        titulo: "Reação: Xenônio + Flúor → Fluoreto de Xenônio",
        equacao: "Xe + F₂ → XeF₂",
        descricao: "Reação de síntese entre xenônio e flúor, formando fluoretos de xenônio sob condições controladas de pressão e temperatura.",
        ligacao: "Covalente",
        condicoes: "Alta pressão e temperatura",
        imagem: "./src/REACT/XEF2.png"
    },

    // 3° Na + I
    "iodo+sodio": {
        titulo: "Reação: Sódio + Iodo → Iodeto de Sódio",
        equacao: "2Na + I₂ → 2NaI",
        descricao: "Reação de síntese formando iodeto de sódio (NaI), um composto iônico resultante da transferência de elétrons.",
        ligacao: "Iônica",
        condicoes: "Espontânea",
        imagem: "./src/REACT/NAI.png"
    },

    // 4° H + O
    "hidrogenio+oxigenio": {
        titulo: "Reação: Hidrogênio + Oxigênio → Água",
        equacao: "2H₂ + O₂ → 2H₂O",
        descricao: "Reação de combustão altamente exotérmica do hidrogênio, formando água (H₂O).",
        ligacao: "Covalente polar + pontes de hidrogênio",
        condicoes: "Necessita faísca inicial",
        imagem: "./src/REACT/H2O.png"
    },

    // 5° K + N
    "nitrogenio+potassio": {
        titulo: "Reação: Potássio + Nitrogênio → Nitreto de Potássio",
        equacao: "6K + N₂ → 2K₃N",
        descricao: "Reação de síntese formando nitreto de potássio (K₃N), um composto iônico obtido em altas temperaturas.",
        ligacao: "Iônica",
        condicoes: "Alta temperatura",
        imagem: "./src/REACT/K3N.png"
    },

    // 6° Li + As
    "arsenio+litio": {
        titulo: "Reação: Lítio + Arsênio → Arseneto de Lítio",
        equacao: "3Li + As → Li₃As",
        descricao: "Reação de síntese formando arseneto de lítio (Li₃As), caracterizada pela formação de ligação iônica.",
        ligacao: "Iônica",
        condicoes: "Alta temperatura",
        imagem: "./src/REACT/LI3AS.png"
    },

    // 7° Ag + S
    "enxofre+prata": {
        titulo: "Reação: Prata + Enxofre → Sulfeto de Prata",
        equacao: "2Ag + S → Ag₂S",
        descricao: "Reação de síntese formando sulfeto de prata (Ag₂S), responsável pelo escurecimento da prata em ambientes com enxofre.",
        ligacao: "Iônica",
        condicoes: "Ambiente úmido",
        imagem: "./src/REACT/AG2S.png"
    },

    // 8° Fe + S
    "enxofre+ferro": {
        titulo: "Reação: Ferro + Enxofre → Sulfeto de Ferro",
        equacao: "Fe + S → FeS",
        descricao: "Reação de síntese entre ferro e enxofre, formando sulfeto de ferro (FeS).",
        ligacao: "Iônica",
        condicoes: "Aquecimento",
        imagem: "./src/REACT/FES.png"
    },

    // 9° Na + Cl
    "cloro+sodio": {
        titulo: "Reação: Sódio + Cloro → Cloreto de Sódio",
        equacao: "2Na + Cl₂ → 2NaCl",
        descricao: "Reação de síntese altamente exotérmica formando cloreto de sódio (NaCl), um composto iônico estável.",
        ligacao: "Iônica",
        condicoes: "Reação espontânea e exotérmica",
        imagem: "./src/REACT/NACL.png"
    },

    // 10° H + Cl
    "cloro+hidrogenio": {
        titulo: "Reação: Hidrogênio + Cloro → Ácido Clorídrico",
        equacao: "H₂ + Cl₂ → 2HCl",
        descricao: "Reação de síntese formando ácido clorídrico (HCl), um composto covalente polar.",
        ligacao: "Covalente polar",
        condicoes: "Luz ou calor",
        imagem: "./src/REACT/HCL.png"
    },

    // 11° Cu + O
    "cobre+oxigenio": {
        titulo: "Reação: Cobre + Oxigênio → Óxido de Cobre",
        equacao: "2Cu + O₂ → 2CuO",
        descricao: "Reação de oxidação do cobre, formando óxido de cobre (CuO) na presença de oxigênio.",
        ligacao: "Iônica",
        condicoes: "Aquecimento",
        imagem: "./src/REACT/CUO.png"
    },

    // 12° C + H
    "carbono+hidrogenio": {
        titulo: "Reação: Carbono + Hidrogênio → Hidrocarbonetos",
        equacao: "C + 2H₂ → CH₄",
        descricao: "Reação de síntese formando hidrocarbonetos, como o metano (CH₄), sob condições específicas de pressão, temperatura e catalisador.",
        ligacao: "Covalente",
        condicoes: "Alta pressão e catalisador",
        imagem: "./src/REACT/CH4.png"

    },

    // 13° Li + F
    "fluor+litio": {
        titulo: "Reação: Lítio + Flúor → Fluoreto de Lítio",
        equacao: "2Li + F₂ → 2LiF",
        descricao: "Reação de síntese formando fluoreto de lítio (LiF), um composto iônico.",
        ligacao: "Iônica",
        condicoes: "Espontânea",
        imagem: "./src/REACT/LIF.png"
    },

    // 14° Ca + Cl
    "calcio+cloro": {
        titulo: "Reação: Cálcio + Cloro → Cloreto de Cálcio",
        equacao: "Ca + Cl₂ → CaCl₂",
        descricao: "Reação de síntese formando cloreto de cálcio (CaCl₂), um sal iônico.",
        ligacao: "Iônica",
        condicoes: "Aquecimento",
        imagem: "./src/REACT/CACL2.png"
    },

    // 15° Mg + Cl
    "cloro+magnesio": {
        titulo: "Reação: Magnésio + Cloro → Cloreto de Magnésio",
        equacao: "Mg + Cl₂ → MgCl₂",
        descricao: "Reação de síntese formando cloreto de magnésio (MgCl₂), composto iônico obtido por aquecimento.",
        ligacao: "Iônica",
        condicoes: "Aquecimento",
        imagem: "./src/REACT/MGCL2.png"
    },

    // 16° Al + Cl
    "aluminio+cloro": {
        titulo: "Reação: Alumínio + Cloro → Cloreto de Alumínio",
        equacao: "2Al + 3Cl₂ → 2AlCl₃",
        descricao: "Reação de síntese formando cloreto de alumínio (AlCl₃), envolvendo transferência de elétrons.",
        ligacao: "Iônica",
        condicoes: "Alta temperatura",
        imagem: "./src/REACT/ALCL3.png"
    },

    // 17° H + F
    "fluor+hidrogenio": {
        titulo: "Reação: Hidrogênio + Flúor → Ácido Fluorídrico",
        equacao: "H₂ + F₂ → 2HF",
        descricao: "Reação extremamente exotérmica e violenta formando ácido fluorídrico (HF), exigindo controle rigoroso.",
        ligacao: "Covalente polar",
        condicoes: "Extremamente exotérmica",
        imagem: "./src/REACT/HF.png"
    },

    // 18° H + Br
    "bromo+hidrogenio": {
        titulo: "Reação: Hidrogênio + Bromo → Ácido Bromídrico",
        equacao: "H₂ + Br₂ → 2HBr",
        descricao: "Reação de síntese formando ácido bromídrico (HBr), geralmente sob aquecimento.",
        ligacao: "Covalente polar",
        condicoes: "Aquecimento",
        imagem: "./src/REACT/HBR.png"
    },

    // 19° Li + N
    "litio+nitrogenio": {
        titulo: "Reação: Lítio + Nitrogênio → Nitreto de Lítio",
        equacao: "6Li + N₂ → 2Li₃N",
        descricao: "Reação de síntese formando nitreto de lítio (Li₃N), um composto iônico obtido em altas temperaturas.",
        ligacao: "Iônica",
        condicoes: "Alta temperatura",
        imagem: "./src/REACT/LI3N.png"
    },

    // 20° N + H
    "hidrogenio+nitrogenio": {
        titulo: "Reação: Nitrogênio + Hidrogênio → Amônia",
        equacao: "N₂ + 3H₂ → 2NH₃",
        descricao: "Reação de síntese formando amônia (NH₃) pelo processo Haber-Bosch, sob alta pressão, temperatura e catalisador.",
        ligacao: "Covalente",
        condicoes: "Alta pressão, temperatura e catalisador",
        imagem: "./src/REACT/NH3.png"
    },

    // 21° S + H
    "enxofre+hidrogenio": {
        titulo: "Reação: Enxofre + Hidrogênio → Sulfeto de Hidrogênio",
        equacao: "H₂ + S → H₂S",
        descricao: "Reação de síntese formando sulfeto de hidrogênio (H₂S), um gás tóxico e inflamável.",
        ligacao: "Covalente polar",
        condicoes: "Aquecimento",
        imagem: "./src/REACT/H2S.png"
    },

    // 22° Na + H₂O (extra)
    "agua+sodio": {
        titulo: "Reação: Sódio + Água → Hidróxido de Sódio + Hidrogênio",
        equacao: "2Na + 2H₂O → 2NaOH + H₂",
        descricao: "Reação altamente exotérmica entre sódio e água, formando hidróxido de sódio (NaOH) e liberando hidrogênio gasoso.",
        ligacao: "Iônica + liberação de H₂",
        condicoes: "Contato com água",
        imagem: "./src/REACT/NAOH.png"
    },

    // 23° NH₃ + H₂SO₄ (extra)
    "acido-sulfurico+amonia": {
        titulo: "Reação: Amônia + Ácido Sulfúrico → Sulfato de Amônio",
        equacao: "2NH₃ + H₂SO₄ → (NH₄)₂SO₄",
        descricao: "Reação ácido-base formando sulfato de amônio ((NH₄)₂SO₄), um sal amplamente utilizado como fertilizante.",
        ligacao: "Iônica",
        condicoes: "Ambiente controlado",
        imagem: "./src/REACT/NH4SO4.png"
    },

    // 24° Mg + O
    "magnesio+oxigenio": {
        titulo: "Reação: Magnésio + Oxigênio → Óxido de Magnésio",
        equacao: "2Mg + O₂ → 2MgO",
        descricao: "Reação de combustão do magnésio, formando óxido de magnésio (MgO) com emissão de luz intensa.",
        ligacao: "Iônica",
        condicoes: "Alta temperatura",
        imagem: "./src/REACT/MGO.png"
    },
    // 25° Al + O
    "aluminio+oxigenio": {
        titulo: "Reação: Alumínio + Oxigênio → Óxido de Alumínio",
        equacao: "4Al + 3O₂ → 2Al₂O₃",
        descricao: "Reação de oxidação do alumínio, formando óxido de alumínio (Al₂O₃), que atua como camada protetora contra corrosão.",
        ligacao: "Iônica",
        condicoes: "Contato com ar",
        imagem: "./src/REACT/AL2O3.png"
    }
};