class LijstEvent {
    constructor(onderdeel) {
        this.onderdeel;
    }
}

export class LijstAddEvent extends LijstEvent {
    constructor(onderdeel) {
        super(onderdeel);
    }
}

export class LijstRemoveEvent extends LijstEvent {
    constructor(onderdeel) {
        super(onderdeel);
    }
}

export class LijstChangeEvent extends LijstEvent {
    constructor(onderdeel) {
        super(onderdeel);
    }
}
