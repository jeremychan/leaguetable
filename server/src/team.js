export default class Team {

    constructor(p1, p2) {
        const first = p1.toUpperCase();
        const second = p2.toUpperCase();
        this.p1 = first < second ? first : second;
        this.p2 = first < second ? second : first;
    }

    toString () {
        return this.p1 + ' '  + this.p2;
    }
}