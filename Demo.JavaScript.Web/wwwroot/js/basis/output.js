console.log("*** output.js ***");

/*
 * console.log 
 */

console.log("Een informatieve boodschap");
console.warn("Een waarschuwing.");
console.error("Een fout.");

// Het console object biedt nog een aantal methods, maar check vooraf wel of het in alle 
// browsers ondersteund wordt.

/*
 * alert
 */
// alert("Popup");

/*
 * HTML DOM
 */
document.getElementById("basics-output-dom").innerText = "Deze tekst werd vanuit output.js gestuurd.";
document.getElementById("basics-output-dom2").innerHTML = "Je kan ook een HTML string genereren en invoegen.<ul><li>Zo kan je dynamisch HTML genereren</li><li>Later zullen we ook zien hoe we dat via de DOM kunnen doen.</li></ul>";
document.getElementById("basics-output-dom3").value = "Ook de value en styling kan je instellen.";
document.getElementById("basics-output-dom3").className = "bg-warning"; // en ook de styling kan je aanpassen!

