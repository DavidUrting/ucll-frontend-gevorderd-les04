import { LijstAddEvent, LijstRemoveEvent } from './lijst-event';
import { LijstOnderdeel } from "./lijst-onderdeel"; 


export class Lijst {
    constructor() {
        this.sequence = 0;
        this.onderdelen = [];
        this.listeners = [];
    }

    add(tekst) {
        let onderdeel = new LijstOnderdeel(this, this.sequence++, tekst);
        this.onderdelen.push(onderdeel);
        this.listeners.forEach(l => {
            l(new LijstAddEvent(onderdeel));
        });
        return onderdeel;
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

class LijstRenderer {
    constructor(lijst) {
        lijst.registerListener((e) => { this.onLijstEvent(); });
    }

    onLijstEvent(e) {
    }
}

export class HtmlLijstRenderer extends LijstRenderer {
    constructor(lijst, ulElement) {
        super(lijst);
        this.lijst = lijst;
        this.ulElement = ulElement;
    }

    onLijstEvent(e) {
        if (!this.skipEvents) {
            super.onLijstEvent(e);
            this.render();
        }
    }

    render() {
        this.ulElement.innerHTML = "";
        this.lijst.onderdelen.forEach((o) => {
            let li = document.createElement("li");
            li.id = `${this.ulElement.id}-${o.id}`
            li.innerHTML = `<div><input type='text' /><button data-onderdeel-id='${o.id}'>X</button></div>`;
            this.ulElement.appendChild(li);
            document.querySelector(`#${li.id} input`).value = o.tekst;
            document.querySelector(`#${li.id} input`).addEventListener("input", (e) => {
                this.skipEvents = true;
                o.tekst = e.target.value;
                this.skipEvents = false;
                e.preventDefault();
            });
            document.querySelector(`#${li.id} button`).addEventListener("click", (e) => {
                this.lijst.remove(e.target.getAttribute('data-onderdeel-id'));
                e.preventDefault();
            });
        });
    }
}