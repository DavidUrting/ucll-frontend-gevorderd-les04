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


// Class is een nieuwe constructie in ES6. Hier komen we later nog op terug.
class Persoon {
    constructor(voornaam, familienaam) {
        this.voornaam = voornaam;
        this.familienaam = familienaam;
    }

    toString() {
        return this.voornaam + " " + this.familienaam;
    }
}

var uitvinderVanJS = new Persoon("Brendan", "Eich");
document.getElementById("basics-objects-js").innerHTML = uitvinderVanJS.toString();
for (prop in uitvinderVanJS) {
    console.log(prop + ": " + uitvinderVanJS[prop]);
}
