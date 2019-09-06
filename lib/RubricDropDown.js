"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Click_1 = require("./Click");
var DataNose_1 = require("./DataNose");
// Scope for all RubricDropDown.cs related JavaScript.
var RubricDropDown = /** @class */ (function () {
    function RubricDropDown() {
    }
    // Example of logging output on client.
    RubricDropDown.log = function (str) {
        console.log(str);
    };
    RubricDropDown.close = function (exceptID) {
        // The check if a RubricDropDown is active first is
        // simply an optimisation to avoid searching by class
        // on every mouse click.
        if (RubricDropDown.active) {
            jQuery('.rubric-popup:visible').each(function (_index, el) {
                if (el.parentElement.id !== ('_' + exceptID))
                    DataNose_1.DN.Event(el.parentElement.id.substr(1), 'Close', {}, false);
            });
        }
    };
    RubricDropDown.active = false;
    return RubricDropDown;
}());
exports.RubricDropDown = RubricDropDown;
;
jQuery(document).ready(function () { return Click_1.Click.onClickHandlers.push(function (_e) { return RubricDropDown.close(-1); }); });
