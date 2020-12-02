// Dit is de lijst van vragen waaruit we willekeurig gaan kiezen.
let vragen = [
    {
        vraagStart: "Het aantal studenten is",
        vraagEinde: "dan 14500.",
        antwoord: "hoger"
    },
    {
        vraagStart: "Het aantal campussen van UCLL is",
        vraagEinde: "dan 10.",
        antwoord: "lager"
    },
    {
        vraagStart: "Het aantal graduaten die je kan volgen bij UCLL is",
        vraagEinde: "dan 12.",
        antwoord: "hoger"
    },
    {
        vraagStart: "Het aantal medewerkers van UCLL is",
        vraagEinde: "dan 1800.",
        antwoord: "lager"
    },
];

// Dit is onze 'boekhouding'.
// Zo weten we wat de huidige vraag is (dat wordt willekeurig bepaald).
// Maar weten we ook hoeveel vragen we al gesteld hebben.
let huidigeVraagIndex = 0;
let aantalGesteldeVragen = 0;
let aantalJuisteAntwoorden = 0;

// Deze functie zal een willekeurige vraag selecteren en de DOM bijwerken.
// Let wel: het kan zijn dat een vraag meermaals zal gesteld worden... 
// om dat te fixen ... da's eventueel een volgende versie :)
function stelVraag() {
    // Math.Random geeft een getal in het interval [0,1[
    // Door te vermenigvuldigen met vragen.length - 1 wordt dat een getal in het interval [0, vragen.length - 1].
    // Door af te ronden wordt dat een getal in de lijst [0,1,2,..., vragen.length - 1].
    // Dat is dus de lijst van geldige indexen voor de vragen array.
    huidigeVraagIndex = Math.round(Math.random() * (vragen.length - 1));

    // DOM bijwerken
    document.getElementById("vraag_start").innerText = vragen[huidigeVraagIndex].vraagStart;
    document.getElementById("vraag_einde").innerText = vragen[huidigeVraagIndex].vraagEinde;

    // En onthouden dat we een vraag hebben gesteld.
    aantalGesteldeVragen++;
}

function verwerkAntwoord(event) {
    // Komt de id van de button (nl. 'hoger' of 'lager') overeen met het juiste antwoord?
    if (event.target.id === vragen[huidigeVraagIndex].antwoord) {
        aantalJuisteAntwoorden++;
        document.getElementById("score").innerText = aantalJuisteAntwoorden;
    }

    // Nog een vraag stellen?
    if (aantalGesteldeVragen < vragen.length) {
        // Zoja, nogmaals stelVraag() aanroepen.
        stelVraag();
    } else {
        // Zoneen: enkel de score tonen.
        document.getElementsByTagName("section")[0].style.display = "none";
    }
}

// Event handlers op de buttons plaatsen.
// Bemerk dat we hier gewoon een functie doorgeven. Dat kan dus ook!
document.getElementById("hoger").addEventListener("click", verwerkAntwoord);
document.getElementById("lager").addEventListener("click", verwerkAntwoord);

// En het spel begint ... de 1e vraag wordt gesteld.
stelVraag(); 



