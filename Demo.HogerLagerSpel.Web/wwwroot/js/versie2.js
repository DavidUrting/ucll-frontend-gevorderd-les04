let aantalJuisteAntwoorden = 0;

document.getElementById("vraag1_correct_antwoord").addEventListener("click", function (e) {
    aantalJuisteAntwoorden++;
    document.getElementById("score").innerText = aantalJuisteAntwoorden;
});

document.getElementById("vraag2_correct_antwoord").addEventListener("click", function (e) {
    aantalJuisteAntwoorden++;
    document.getElementById("score").innerText = aantalJuisteAntwoorden;
});

document.getElementById("vraag3_correct_antwoord").addEventListener("click", function (e) {
    aantalJuisteAntwoorden++;
    document.getElementById("score").innerText = aantalJuisteAntwoorden;
});

document.getElementById("vraag4_correct_antwoord").addEventListener("click", function (e) {
    aantalJuisteAntwoorden++;
    document.getElementById("score").innerText = aantalJuisteAntwoorden;
});

