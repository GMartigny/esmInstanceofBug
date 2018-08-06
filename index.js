import Position from "aposition";
import Vector from "avector";

const vector = new Vector();
const position = new Position();

console.log("instanceof", vector.start instanceof Position);
console.log("==", vector.start.constructor == Position);

