import { SelecteerbareLijst } from "./lijst/selecteerbare-lijst";
import { LijstSelectedEvent } from './lijst/selecteerbare-lijst-events';
import { HtmlListLijstRenderer } from "./lijst/renderers/html-list-lijst-renderer";

var lijst = new SelecteerbareLijst();
lijst.add('Melk');
lijst.add('Brood');
lijst.add('Kaas');

lijst.registerListener((e) => {
    if (e instanceof LijstSelectedEvent) {        
        document.getElementById("selected-onderdeel-titel").value = e.onderdeel.titel;
        document.getElementById("selected-onderdeel-omschrijving").value = e.onderdeel.omschrijving;
    }
});

document.getElementById("selected-onderdeel-titel").addEventListener("input", function (e) {
    let onderdeel = lijst.get(lijst.selectedOnderdeelId);
    onderdeel.titel = document.getElementById("selected-onderdeel-titel").value;
});

document.getElementById("selected-onderdeel-omschrijving").addEventListener("input", function (e) {
    let onderdeel = lijst.get(lijst.selectedOnderdeelId);
    onderdeel.omschrijving = document.getElementById("selected-onderdeel-omschrijving").value;
});


var lijstRenderer = new HtmlListLijstRenderer(lijst, document.getElementById("lijst"));
lijstRenderer.render();


document.getElementById("add").addEventListener("click", (e) => {
    lijst.add('');
});

