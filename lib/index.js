"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var UvA = require("./index-exports");
exports.UvA = UvA;
// Make user-written class available to the server.
if (typeof window !== 'undefined')
    window['UvA'] = UvA;
function _register(a, b) {
    UvA[a.constructor.name] = b;
}
;
UvA.register = _register;
