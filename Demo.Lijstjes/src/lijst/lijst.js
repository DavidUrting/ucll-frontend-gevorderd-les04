import { LijstAddEvent, LijstRemoveEvent, LijstSelectedEvent } from './lijst-events';
import { LijstOnderdeel } from "./lijst-onderdeel"; 

export class Lijst {
    constructor() {
        this.sequence = 0;
        this.onderdelen = [];
        this.listeners = [];
    }

    add(titel, omschrijving) {
        let onderdeel = new LijstOnderdeel(this, this.sequence++, titel, omschrijving);
        this.onderdelen.push(onderdeel);
        this.listeners.forEach(l => {
            l(new LijstAddEvent(onderdeel));
        });
        return onderdeel;
    }

    get(id) {
        id = parseInt(id);
        let index = -1;
        for (let i = 0; i < this.onderdelen.length; i++) {
            if (this.onderdelen[i].id === id) {
                index = i;
                break;
            }
        }

        if (index >= 0) {
            let onderdeel = this.onderdelen[index];
            return onderdeel;
        }
    }

    remove(id) {
        id = parseInt(id);
        let index = -1;
        for (let i = 0; i < this.onderdelen.length; i++) {
            if (this.onderdelen[i].id === id) {
                index = i;
                break;
            }
        }

        if (index >= 0) {
            let onderdeel = this.onderdelen[index];
            this.onderdelen.splice(index, 1);

            this.listeners.forEach(l => {
                l(new LijstRemoveEvent(onderdeel));
            });
        }
    }

    registerListener(listener) {
        this.listeners.push(listener);
    }
}