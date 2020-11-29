console.log("*** exceptions.js ***");

try {
    throw "Er is een onverwachte fout opgetreden, contacteer de helpdesk."
}
catch (e) {
        // Normaal toon je dat aan de gebruiker (liefst niet met alert!) en log je dat in de databank.
    console.error(e);
}
