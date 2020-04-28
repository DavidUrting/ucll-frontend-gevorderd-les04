import { LijstChangeEvent } from './lijst-event';

export class LijstOnderdeel {
    constructor(lijst, id, tekst) {
        this._lijst = lijst;
        this._id = id;
        this.tekst = tekst;
    }

    get id() {
        return this._id;
    }

    get tekst() {
        return this._tekst;
    };

    set tekst(value) {
        this._tekst = value;
        this._lijst.listeners.forEach((l) => {
            l(new LijstChangeEvent(this));
        });
    }
}