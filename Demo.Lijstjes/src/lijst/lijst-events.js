export class LijstEvent {
    constructor(onderdeel) {
        this.onderdeel = onderdeel;
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
    constructor(onderdeel, eigenschap) {
        super(onderdeel);
        this._eigenschap = eigenschap;
    }

    get eigenschap() {
        return this._eigenschap;
    }
}