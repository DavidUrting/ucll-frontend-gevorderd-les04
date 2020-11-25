console.log("*** exceptions.js ***");

try {
    throw "Er is een onverwachte fout opgetreden, contacteer de helpdesk."
}
catch (e) {
        // Normaal toon je dat aan de gebruiker (liefst niet met alert!) en log je dat in de databank.
    console.error(e);
}

/*
 * Ooit ergens gelezen...
 * Enkel tijdens de ontwikkeling gebruiken (een gebruiker stuur je best niet naar SO)!
 * Momenteel werd de lijn die de redirect doet in commentaar gezet.
 */
try {
    dezeFunctieBestaatNiet();
}
catch (e) {
    // window.location.href = "https://stackoverflow.com/search?q=" + e;
}
