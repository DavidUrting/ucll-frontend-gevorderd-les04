import { LijstRenderer } from './lijst-renderer';

/*
 * HTML ul/ol renderer voor Lijst objecten.
 */
export class HtmlListLijstRenderer extends LijstRenderer {
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