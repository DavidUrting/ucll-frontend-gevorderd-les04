import { LijstEvent } from './lijst-events';

export class LijstSelectedEvent extends LijstEvent {
    constructor(onderdeel) {
        super(onderdeel);
    }
}
