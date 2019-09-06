"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var Click = /** @class */ (function () {
    function Click() {
    }
    // Perform a click on the given element.
    Click.performClick = function (elem) {
        if (elem && document.createEvent) { // sanity check
            var event_1 = document.createEvent('MouseEvents');
            event_1.initEvent('click', true, false);
            elem.dispatchEvent(event_1);
        }
        else
            console.warn('Could not perform click on element ' + elem);
    };
    // Add a function assoicated with an element, to run when the page is clicked.
    // The function will be passed the click event and element of given ID.
    // If the element no longer exists on the page the function will be deleted.
    Click.addClickHandlerForElem = function (id, f) {
        var handler = function (event) {
            // Search for the element.
            var element = document.getElementById('_' + id);
            // Run handler if the element still exists on the page.
            if (element !== null)
                f(event, element);
            // Else delete this page click handler.
            else
                Click.onClickHandlers.splice(Click.onClickHandlers.indexOf(handler), 1);
        };
        Click.onClickHandlers[id.toString()] = handler;
    };
    // Functions to be called when a mouse click occurs.
    Click.onClickHandlers = [];
    return Click;
}());
exports.Click = Click;
;
jQuery(window).click(function (event) {
    Click.onClickHandlers.forEach(function (f) { return f(event); });
});
