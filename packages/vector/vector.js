import Position from "aposition";

export default class Vector {
    constructor(start = new Position(), end = new Position()) {
        this.start = start;
        this.end = end;
    }
}
