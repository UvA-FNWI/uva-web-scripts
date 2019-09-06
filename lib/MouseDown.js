"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var MouseDown = /** @class */ (function () {
    function MouseDown() {
    }
    MouseDown.isMouseDown = false;
    // Functions to run on mousedown event.
    MouseDown.onMouseDownHandlers = [
        function () { MouseDown.isMouseDown = true; }
    ];
    // Functions to run on mouseup event.
    MouseDown.onMouseUpHandlers = [
        function () { MouseDown.isMouseDown = false; }
    ];
    return MouseDown;
}());
exports.MouseDown = MouseDown;
;
// Run all mousedown handlers on mouse down event.
window.onmousedown = function () {
    MouseDown.onMouseDownHandlers.forEach(function (f) { return f(); });
};
// Run all mouseup handlers on mouse down event.
window.onmouseup = function () {
    MouseDown.onMouseUpHandlers.forEach(function (f) { return f(); });
};
