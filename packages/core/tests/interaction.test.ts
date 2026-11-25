import assert from "node:assert/strict";
import test from "node:test";
import { isInteractive } from "../src/index.ts";

test("normal controls accept interaction", (): void => {
  assert.equal(isInteractive({}), true);
});

test("disabled controls reject interaction", (): void => {
  assert.equal(isInteractive({ disabled: true }), false);
});

test("loading controls reject interaction", (): void => {
  assert.equal(isInteractive({ loading: true }), false);
});
