import test from "ava";
import Position from "./position";

test("Position", (t) => {
    const position = new Position(1, 2);

    t.is(position.x, 1);
    t.is(position.y, 2);
});
