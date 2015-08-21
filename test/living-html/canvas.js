"use strict";
const jsdom = require("../..");

// Tests for the HTML canvas element
// Spec: https://html.spec.whatwg.org/multipage/scripting.html#the-canvas-element

exports["canvas element is an instance of HTMLElement"] = function (t) {
  const document = jsdom.jsdom();
  const window = document.defaultView;
  const canvas = document.createElement("canvas");

  t.ok(canvas instanceof window.HTMLElement, "should be an instance of HTMLElement");
  t.ok(canvas instanceof window.HTMLCanvasElement, "should be an instance of HTMLCanvasElement");

  t.done();
};
