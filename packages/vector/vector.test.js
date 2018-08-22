import test from "ava";
import Vector from "./vector.js";

test("Vector", (t) => {
    const vector = new Vector();
    t.truthy(vector.start);
    t.truthy(vector.end);
});
