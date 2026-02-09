const phrases = [
    "No",
    "Sei sicura?",
    "Davvero sicura?",
    "Pensaci bene!",
    "Ultima possibilità!",
    "Dai, non puoi dire di no!",
    "Te ne pentirai!",
    "Pensaci un'altra volta!",
    "Sei assolutamente certa?",
    "Potrebbe essere un errore!",
    "Abbi un cuore!",
    "Non essere così fredda!",
    "Hai cambiato idea?",
    "Non ci ripensi?",
    "È la tua risposta definitiva?",
    "Mi stai spezzando il cuore ;(",
    "Neanche per un po' di cioccolato?",
    "TI PREGO AMORE",
    "Ti prego daiiii"
];

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const bearImg = document.getElementById("bear-img");
const question = document.getElementById("question");

let count = 0;

noBtn.addEventListener("click", () => {
    count++;
    
    // 1. Cambio frase No
    const phraseIndex = Math.min(count, phrases.length - 1);
    noBtn.innerText = phrases[phraseIndex];

    // 2. Ingrandimento Sì (Logica stabile)
    const newFontSize = 1.2 + (count * 0.4);
    yesBtn.style.fontSize = `${newFontSize}rem`;
    yesBtn.style.padding = `${12 + count * 5}px ${25 + count * 10}px`;

    // 3. Cambio GIF (Ripristinati i link funzionanti per la parte triste)
    if (count === 1) {
        bearImg.src = "https://media.tenor.com/yO87_S5mno8AAAAi/milk-and-mocha.gif";
    }
    if (count === 5) {
        bearImg.src = "https://media.tenor.com/S6S7GvU8fxcAAAAi/milk-and-mocha-cry.gif";
    }
});

yesBtn.addEventListener("click", () => {
    // 4. GIF Finale (Quella che funzionava prima)
    bearImg.src = "https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif";
    
    question.innerText = "SIIIIII!!! Ti amo!! :)) ❤️";
    
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
});