class Persoon {
    constructor(voornaam, familienaam) {
        this._voornaam = voornaam;
        this._familienaam = familienaam;
    }

    get voornaam() {
        return this._voornaam;
    }

    get familienaam() {
        return this._familienaam;
    }

    volledigeNaam() {
        return this.voornaam + " " + this.familienaam;
    }
}

var uitvinderVanJS = new Persoon("Brendan", "Eich");
document.getElementById("classes-objects-js").innerHTML = uitvinderVanJS.volledigeNaam();
for (prop in uitvinderVanJS) {
    console.log(prop + ": " + uitvinderVanJS[prop]);
}
