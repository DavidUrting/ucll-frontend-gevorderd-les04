import { LijstChangeEvent } from './lijst-event';

export class LijstOnderdeel {
    constructor(lijst, id, tekst) {
        this.lijst = lijst;
        this.id = id;
        this._tekst = tekst;
    }

    get tekst() {
        return this._tekst;
    };

    set tekst(value) {
        this._tekst = value;
        this.lijst.listeners.forEach((l) => {
            l(new LijstChangeEvent(this));
        });
    }
}