let huidigeVraagIndex = 1;
let juisteAntwoordenIds = ["vraag1_hoger", "vraag2_lager", "vraag3_hoger", "vraag4_lager"];

let aantalJuisteAntwoorden = 0;

// Ophalen van alle buttons (zowel de juiste als de foute)
let buttons = document.getElementsByTagName("button");
for (let i = 0; i < buttons.length; i++) {
    // Aan elke button wordt een event handler gekoppeld.
    buttons[i].addEventListener("click", function (e) {
        // Omdat we de vragen vanaf 1 nummeren moeten we in de array zoeken naar vraagnummer - 1 (aangezien arrays vanaf 0 tellen).
        // in het e object zit meer informatie over de gebeurtenis (= het click event).
        // onder andere kan je via e.target aan het html element waarop de click is gebeurd.
        // we halen dus de id van de button op om deze te vergelijken met de id van de juiste button in de array.
        if (juisteAntwoordenIds[huidigeVraagIndex - 1] === e.target.id) {
            aantalJuisteAntwoorden++;
            document.getElementById("score").innerText = aantalJuisteAntwoorden;
        }
        // De huidige vraag verbergen
        document.getElementById("vraag" + huidigeVraagIndex).style.display = "none";

        // En de volgende vraag tonen (tenzij we aan het einde van de vragen zijn).
        if (huidigeVraagIndex < juisteAntwoordenIds.length) {
            huidigeVraagIndex++;
            document.getElementById("vraag" + huidigeVraagIndex).style.display = "block";
        }
    });
}

