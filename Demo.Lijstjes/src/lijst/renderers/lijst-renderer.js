/*
 * Basisklasse voor lijst renderers.
 * Registreert zichzelf op events van het bijhorende Lijst object.
 */
export class LijstRenderer {
    constructor(lijst) {
        lijst.registerListener((e) => {
            this.onLijstEvent();
        });
    }

    onLijstEvent(e) {
    }
}