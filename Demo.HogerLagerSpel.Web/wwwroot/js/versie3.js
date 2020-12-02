let aantalJuisteAntwoorden = 0;

document.getElementById("vraag1_correct_antwoord").addEventListener("click", function (e) {
    aantalJuisteAntwoorden++;
    document.getElementById("score").innerText = aantalJuisteAntwoorden;
    document.getElementById("vraag1").style.display = "none";
    document.getElementById("vraag2").style.display = "block";
});
document.getElementById("vraag1_foutief_antwoord").addEventListener("click", function (e) {
    document.getElementById("vraag1").style.display = "none";
    document.getElementById("vraag2").style.display = "block";
});

document.getElementById("vraag2_correct_antwoord").addEventListener("click", function (e) {
    aantalJuisteAntwoorden++;
    document.getElementById("score").innerText = aantalJuisteAntwoorden;
    document.getElementById("vraag2").style.display = "none";
    document.getElementById("vraag3").style.display = "block";
});
document.getElementById("vraag2_foutief_antwoord").addEventListener("click", function (e) {
    document.getElementById("vraag2").style.display = "none";
    document.getElementById("vraag3").style.display = "block";
});

document.getElementById("vraag3_correct_antwoord").addEventListener("click", function (e) {
    aantalJuisteAntwoorden++;
    document.getElementById("score").innerText = aantalJuisteAntwoorden;
    document.getElementById("vraag3").style.display = "none";
    document.getElementById("vraag4").style.display = "block";
});
document.getElementById("vraag3_foutief_antwoord").addEventListener("click", function (e) {
    document.getElementById("vraag3").style.display = "none";
    document.getElementById("vraag4").style.display = "block";
});

document.getElementById("vraag4_correct_antwoord").addEventListener("click", function (e) {
    aantalJuisteAntwoorden++;
    document.getElementById("score").innerText = aantalJuisteAntwoorden;
    document.getElementById("vraag4").style.display = "none";
});
document.getElementById("vraag4_correct_antwoord").addEventListener("click", function (e) {
    document.getElementById("vraag4").style.display = "none";
});

