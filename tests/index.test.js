// import fs from "fs";
// import { cli } from "../index.js";
const fs = require("fs");
const { cli } = require("../index.js");

describe("insert new component", () => {
  test("", () => {
    cli();
    expect(fs.existsSync("src")).toBe(true);
    expect(fs.existsSync("src/Component")).toBe(true);
    expect(fs.existsSync("src/Component/Component.jsx")).toBe(true);
    expect(fs.existsSync("src/Component/Component.css")).toBe(true);
  });
});
