import { Lijst, HtmlLijstRenderer } from "./lijst";

var lijst = new Lijst();
lijst.add('testje 1');
lijst.add('testje 2');

var lijstRenderer1 = new HtmlLijstRenderer(lijst, document.getElementById("lijst1"));
lijstRenderer1.render();

var lijstRenderer2 = new HtmlLijstRenderer(lijst, document.getElementById("lijst2"));
lijstRenderer2.render();

document.getElementById("add").addEventListener("click", (e) => {
    lijst.add('');
});
