const phrases = ["No", "Sei sicura?", "Davvero?", "Pensaci bene!", "Ultima possibilità!", "Dai!", "Te ne pentirai!", "Mi spezzi il cuore ;(", "TI PREGO", "Daiiii"];

const soulReasons = [
    "Come mi guardi quando pensi che io non me ne accorga",
    "Il modo in cui le nostre mani si incastrano perfettamente",
    "La tua risata che mi fa dimenticare ogni giornata storta",
    "Perché sai leggere i miei silenzi meglio di chiunque altro",
    "Per come ti incazzi quando hai ragione",
    "La tua dolcezza che mi scioglie ogni volta",
    "Perché sei la prima persona a cui voglio raccontare tutto",
    "Per come arricci il naso quando ridi di gusto",
    "Perché sei la mia casa, ovunque noi siamo",
    "La tua forza incredibile che mi ispira",
    "Per come mi sostieni in ogni mia follia",
    "Perché sei bellissima appena sveglia",
    "Per i tuoi baci che sanno di pace",
    "Perché quel 16 settembre è nato qualcosa di eterno",
    "Perché sei semplicemente tu",
    "Come riesci a calmarmi solo con un abbraccio",
    "Perché credi in me anche quando io smetto di farlo",
    "La tua testardaggine che alla fine mi fa sempre sorridere",
    "Il modo in cui ti prendi cura di me quando sto male",
    "Per come pronunci il mio nome",
    "La luce che hai negli occhi quando parli di qualcosa che ami",
    "Perché con te anche un lunedì sera sembra speciale",
    "Il profumo che lasci sui miei vestiti",
    "Per come mi ascolti quando ti parlo di nulla",
    "Il fatto che tu sia la mia migliore amica e il mio amore",
    "Perché mi hai insegnato a vedere il bello nelle piccole cose",
    "Il modo in cui mi proteggi, anche senza accorgertene",
    "Perché ogni canzone d'amore ora mi fa pensare a te",
    "Come ti aggiusti i capelli quando sei concentrata",
    "Perché sei l'unica persona con cui posso essere me stesso al 100%",
    "Il coraggio che mi dai ogni giorno",
    "Per come arrossisci ancora dopo ogni mio complimento",
    "Perché i tuoi sogni sono diventati un po' anche i miei",
    "La pazienza infinita che hai con i miei difetti",
    "Perché sai farmi ridere quando vorrei solo urlare",
    "Il modo in cui mi stringi forte quando hai paura",
    "Perché sei la persona più brillante che conosca",
    "Per come mangi con così tanta felicità",
    "Il fatto che basti un tuo messaggio per cambiarmi la giornata",
    "Perché non smetti mai di stupirmi",
    "Il modo in cui mi tieni la mano tra la gente",
    "Perché sei la mia certezza in un mondo che cambia",
    "Come riesci a rendere ogni posto bellissimo standoci",
    "Perché mi hai fatto capire che l'amore è semplicità",
    "Il modo in cui mi guardi orgogliosa",
    "Perché sei il mio primo pensiero al mattino",
    "La tua capacità di perdonarmi sempre",
    "Per come ti prendi gioco di me con dolcezza",
    "Il fatto che io possa fidarmi di te ciecamente",
    "Perché sei la mia ancora",
    "Per come riesci a vedere il buono in tutti",
    "Il modo in cui mi baci sulla fronte",
    "Perché sei il regalo più grande della mia vita",
    "Il fatto che guardare un film con te sia la cosa più bella del mondo",
    "Perché sei la mia Valentina, ieri, oggi e per sempre",
    "Il modo in cui ti addormenti sulla mia spalla quando guardiamo un film",
    "Il profumo dei dolci che prepari",
    "Perché sei la mia schiacciatrice preferita",
    "Come mi supporti sempre alle mie partite",
    "Il ricordo di noi sulla panchina al parco a morire di freddo pur di stare insieme",
    "Perché per stare con te starei al freddo per ore altre mille volte",
    "Il modo in cui ci nascondiamo sotto le coperte",
    "Perché svegliarmi accanto a te è la parte preferita della mia giornata",
    "Come sei bella quando sei concentrata a giocare a pallavolo",
    "Perché sei l'unica che riesce a farmi stare tranquillo prima di una gara",
    "Il modo in cui mi rubi la coperta mentre dormiamo",
    "Perché i tuoi dolci sono la cosa più buona del mondo",
    "Il coraggio che abbiamo avuto a sceglierci a 16 anni",
    "Perché quella panchina al parco rimarrà sempre il nostro posto segreto",
    "Il modo in cui mi guardi dalle tribune",
    "Perché con te anche stare in silenzio sotto le coperte è bellissimo",
    "Come ti impegni in tutto quello che fai",
    "Perché sei la mia vittoria più bella",
    "Il modo in cui mi stringi quando finalmente siamo a casa tua",
    "Perché non mi importa del freddo se posso stringerti la mano",
    "Perché siamo cresciuti insieme su quella panchina",
    "Il modo in cui mi fai sentire a casa anche se non viviamo insieme",
    "Perché sei la mia compagna di squadra nella vita",
    "Il modo in cui mi scompigli i capelli dopo una partita",
    "Perché sei la persona più speciale che abbia mai incontrato a 16 anni",
    "Il modo in cui ridiamo per le cavolate sotto le coperte",
    "Perché sei l'unica persona che vorrei accanto in ogni mio traguardo",
    "Come sei fiera di me, e io di te",
    "Il modo in cui mi cerchi con gli occhi in mezzo alla gente",
    "Perché sei la mia pace dopo una giornata di allenamento",
    "Il modo in cui mi scaldi le mani quando sono gelate",
    "Perché abbiamo trasformato il freddo del parco nel calore di casa tua",
    "Il modo in cui mi dici che andrà tutto bene",
    "Perché sei la mia persona preferita con cui non fare nulla",
    "Il modo in cui mi guardi quando segniamo un punto",
    "Perché sei la mia vita, dentro e fuori dal campo",
    "Il modo in cui mi abbracci quando sto per andare via",
    "Perché ogni sacrificio per vederti ne vale sempre la pena",
    "Il modo in cui sorridi mentre prepari una torta",
    "Perché sei il mio sogno più bello ad occhi aperti",
    "Il modo in cui mi stringi la mano sotto la coperta",
    "Perché sei il mio tifo più grande",
    "Perché semplicemente non esiste nessuno come te"
];

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainUi = document.getElementById("main-ui");
const passSection = document.getElementById("password-section");
const secretTrigger = document.getElementById("secret-trigger");
const dateInput = document.getElementById("dateInput");
const errorMsg = document.getElementById("error-msg");
const contentPage = document.getElementById("content-page");
const bearImg = document.getElementById("bear-img");
const questionText = document.getElementById("question");

let count = 0;
let timerInterval;

noBtn.addEventListener("click", () => {
    count++;
    noBtn.innerText = phrases[Math.min(count, phrases.length - 1)];
    yesBtn.style.fontSize = `${1.2 + (count * 0.4)}rem`;
    yesBtn.classList.add("pulsing");
    if (count === 1) bearImg.src = "triste.gif";
});

yesBtn.addEventListener("click", () => {
    questionText.innerText = "SIIIIII!!! Ti amo!! :)) ❤️";
    bearImg.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
    setInterval(createHeart, 300);
    secretTrigger.classList.remove("hidden");
});

function createHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.className = "heart";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}

secretTrigger.addEventListener("click", () => {
    mainUi.classList.add("hidden");
    passSection.classList.remove("hidden");
});

document.getElementById("backToMain").addEventListener("click", () => {
    passSection.classList.add("hidden");
    mainUi.classList.remove("hidden");
});

document.getElementById("checkPassBtn").addEventListener("click", () => {
    const val = dateInput.value.replace(/[^0-9]/g, '');
    errorMsg.classList.add("hidden");

    // --- 1. I 1000 MOTIVI (16/09/2025) ---
    if (val === "16092025" || val === "160925") {
        let h = `<div id="timer-container"><p style="color:#888;">Ti amo da ogni istante:</p><div id="timer-display"></div></div>`;
        for (let i = 1; i <= 1000; i++) {
            const r = soulReasons[(i - 1) % soulReasons.length];
            h += `<div class="reason-item"><strong>${i}.</strong> ${r}</div>`;
        }
        h += `<div style="text-align:center; padding: 40px 10px; border-top: 2px solid #ffccd5; margin-top: 30px;"><p style="font-size: 1.2rem; color: #ff4d6d; font-weight: bold;">1001. ...e ce ne sarebbero molti altri ancora, ma non si possono descrivere a parole. Ti amo. ❤️</p></div>`;
        showContent("Mille motivi per noi", h);
        startTimer();
    } 
    
    // --- 2. IL GIORNO IN CUI CI SIAMO CONOSCIUTI (02/07/2025) ---
    else if (val === "02072025" || val === "020725") {
        showContent("L'azzardo migliore della mia vita", `
            <div class="text-block" style="text-align: center;">
                <p>Era il tuo compleanno. Potevo farti solo gli auguri come tutti gli altri, e invece ho deciso di scriverti.</p>
                <p>Non sapevo ancora che stavo mandando un messaggio alla persona più importante della mia vita. Credevo di farti un regalo per la tua festa, ma <strong>il regalo più grande l'ho ricevuto io</strong> quando mi hai risposto.</p>
                <p>Da quel "Auguri" è cambiato tutto. Se potessi tornare indietro a quel 2 luglio...</p>
                
                <div style="background: #fff0f3; padding: 20px; border-radius: 15px; margin: 25px 0;">
                    <button id="rewrite-btn" onclick="rewriteHistory()" style="width: auto; background: #ff4d6d; color: white; font-size: 0.9rem;">Lo rifaresti?</button>
                    <p id="rewrite-response" class="hidden" style="margin-top: 15px; font-weight: bold; color: #ff4d6d;">Lo rifarei altre un milione di volte. Ti amo. ❤️</p>
                </div>
            </div>
        `);
        window.rewriteHistory = () => {
            document.getElementById('rewrite-btn').style.display = 'none';
            document.getElementById('rewrite-response').classList.remove('hidden');
            createHeart();
        };
    }

    // --- 3. IL SUO COMPLEANNO (02/07/2009) ---
    else if (val === "02072009" || val === "020709") {
        showContent("Per la ragazza nata il 2 Luglio...", `
            <div class="text-block" style="text-align: center;">
                <p>Questa data è magica per due motivi: perché sei nata tu, e perché anni dopo ci ha fatto incontrare.</p>
                <p>Penso spesso a quanto sono fortunato. Anche se non viviamo insieme, ogni volta che dormiamo sotto la stessa coperta o che mangio un dolce preparato da te, mi sento a casa.</p>
                <p>Grazie per non aver mollato quando stavamo al freddo sulla panchina. Sei la mia persona preferita.</p>
                <div style="background: #fff0f3; padding: 20px; border-radius: 15px; margin: 25px 0;">
                    <p style="font-size: 0.9rem; color: #ff4d6d;">Quante volte ti ho pensato oggi?</p>
                    <h2 id="think-counter" style="font-size: 2.5rem; margin: 10px 0; color:#ff4d6d;">1609</h2>
                    <button onclick="addThink()" style="width: auto; background: #ff4d6d; font-size: 0.8rem; padding: 8px 15px; color:white;">Aumenta il conteggio</button>
                </div>
                <p>Ti amo tantissimo.</p>
            </div>
        `);
    } 
    
    // --- 4. SAN VALENTINO (14/02/2026) ---
    else if (val === "14022026" || val === "140226") {
        showContent("Il nostro San Valentino", `
            <div class="text-block">
                <p>Eccoci qui, finalmente. Il nostro primo vero San Valentino insieme.</p>
                <p>Se ripenso a noi due su quella panchina al parco, a morire di freddo pur di stare altri cinque minuti insieme, mi viene da sorridere. Ne è valsa la pena, ogni singolo secondo.</p>
                <p>Volevo dirti grazie. Grazie perché sei dolce, perché mi sopporti e perché rendi tutto più bello. Promettimi che oggi:</p>
                <button class="choice-btn" onclick="this.style.background='#2ecc71'; this.style.color='white'; this.innerText='Promesso! ❤️'">Mi darai mille baci</button>
                <button class="choice-btn" onclick="this.style.background='#2ecc71'; this.style.color='white'; this.innerText='Mi lascerai un po\' di coperta'">Mi lascerai un po' di coperta stasera</button>
                <button class="choice-btn" onclick="this.style.background='#2ecc71'; this.style.color='white'; this.innerText='Sarai la mia Valentina per sempre'">Sarai la mia Valentina per sempre</button>
                <p style="margin-top:25px; font-weight: bold; text-align: center; color:#ff4d6d;">Ti amo da morire, piccola. ❤️</p>
            </div>
        `);
    } else {
        errorMsg.classList.remove("hidden");
    }
});

// Funzioni Globali
window.addThink = () => {
    const el = document.getElementById('think-counter');
    el.innerText = parseInt(el.innerText) + 1;
};

function showContent(title, body) {
    document.getElementById("page-title").innerText = title;
    document.getElementById("page-body").innerHTML = body;
    passSection.classList.add("hidden");
    contentPage.classList.remove("hidden");
}

document.getElementById("closeBtn").addEventListener("click", () => {
    contentPage.classList.add("hidden");
    passSection.classList.remove("hidden");
    clearInterval(timerInterval);
});

function startTimer() {
    const start = new Date("2025-09-16T00:00:00");
    const up = () => {
        const diff = new Date() - start;
        const d = Math.floor(diff / 86400000);
        const h = Math.floor((diff / 3600000) % 24);
        const m = Math.floor((diff / 60000) % 60);
        const s = Math.floor((diff / 1000) % 60);
        const el = document.getElementById("timer-display");
        if(el) el.innerHTML = `<div class="timer-unit">${d}<span>Giorni</span></div><div class="timer-unit">${h}<span>Ore</span></div><div class="timer-unit">${m}<span>Min</span></div><div class="timer-unit">${s}<span>Sec</span></div>`;
    };
    up();
    timerInterval = setInterval(up, 1000);
}