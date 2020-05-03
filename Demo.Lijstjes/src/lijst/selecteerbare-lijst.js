import { Lijst } from './lijst';
import { LijstSelectedEvent } from './selecteerbare-lijst-events';

export class SelecteerbareLijst extends Lijst {
    constructor() {
        super();
        this._selectedOnderdeelid = null;
    }

    get selectedOnderdeelId() {
        return this._selectedOnderdeelid;
    }

    set selectedOnderdeelId(onderdeelId) {
        onderdeelId = parseInt(onderdeelId);
        let index = -1;
        for (let i = 0; i < this.onderdelen.length; i++) {
            if (this.onderdelen[i].id === onderdeelId) {
                index = i;
                break;
            }
        }

        if (index >= 0) {
            let onderdeel = this.onderdelen[index];
            this._selectedOnderdeelid = onderdeel.id;
            this.listeners.forEach((l) => {
                l(new LijstSelectedEvent(onderdeel));
            });
        }
    }
}