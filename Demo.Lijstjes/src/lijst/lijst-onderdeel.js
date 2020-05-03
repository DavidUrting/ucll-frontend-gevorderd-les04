import { LijstChangeEvent } from './lijst-events';

export class LijstOnderdeel {
    constructor(lijst, id, titel, omschrijving) {
        this.lijst = lijst;
        this.id = id;
        
        this._titel = titel;
        this._omschrijving = omschrijving;
    }

    get titel() {
        return this._titel;
    };

    set titel(value) {
        this._titel = value;
        this.lijst.listeners.forEach((l) => {
            l(new LijstChangeEvent(this));
        });
    }

    get omschrijving() {
        return this._omschrijving;
    };

    set omschrijving(value) {
        this._omschrijving = value;
        this.lijst.listeners.forEach((l) => {
            l(new LijstChangeEvent(this));
        });
    }
}