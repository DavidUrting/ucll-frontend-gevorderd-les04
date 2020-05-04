import { LijstRenderer } from './lijst-renderer';
import { SelecteerbareLijst } from '../selecteerbare-lijst';

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
            li.setAttribute("data-onderdeel-id", o.id);           
            li.innerHTML = `<div class='w-50 d-inline-block'></div><button>X</button>`;
            this.ulElement.appendChild(li);
            if (this.lijst instanceof SelecteerbareLijst) {
                document.querySelector(`#${li.id}`).addEventListener("click", (e) => {
                    this.lijst.selectedOnderdeelId = o.id;
                });
            }
            document.querySelector(`#${li.id} div`).innerHTML = o.titel;
            document.querySelector(`#${li.id} button`).addEventListener("click", (e) => {
                this.lijst.remove(o.id);
                e.preventDefault();
            });
        });
    }
}