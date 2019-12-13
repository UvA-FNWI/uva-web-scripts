"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var MultiSelectControl = /** @class */ (function () {
    function MultiSelectControl() {
    }
    MultiSelectControl.WhenElementAvailable = function (elemID, callback) {
        var interval = 10; // ms
        window.setTimeout(function () {
            if ($$("#" + elemID).length)
                callback(elemID);
            else
                window.setTimeout(arguments.callee, interval);
        }, interval);
    };
    return MultiSelectControl;
}());
exports.MultiSelectControl = MultiSelectControl;
;
