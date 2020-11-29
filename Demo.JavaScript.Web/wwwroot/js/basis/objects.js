console.log("*** objects.js ***");

var uitvinderVanWWW = {
    voornaam: "Tim",
    familienaam: "Berners-Lee",
    toString: function () {
        return this.voornaam + " " + this.familienaam;
    }
};
document.getElementById("basics-objects-www").innerHTML = uitvinderVanWWW.toString();
for (var prop in uitvinderVanWWW) {
    console.log(prop + ": " + uitvinderVanWWW[prop]);
}

// Verder kan je ook objecten aanmaken door middel van een class.
// Zie /js/classes/classes.js voor een voorbeeld