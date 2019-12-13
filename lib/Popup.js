"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var MouseDown_1 = require("./MouseDown");
var Popup = /** @class */ (function () {
    function Popup() {
    }
    Popup.initializePopup = function (element, content) {
        element = $$(element);
        if (!(element.id in Popup.popupsInitialized)) {
            element.tooltip({
                show: { duration: 5 },
                items: element[0].tagName,
                content: content,
                tooltipClass: 'popupbox',
                open: function (event, ui) {
                    ui.tooltip.removeClass('ui-tooltip ui-widget ui-corner-all ui-widget-content');
                },
            });
            Popup.popupsInitialized.push(element.id);
        }
        // Hide all popups, except this one, and open it.
        $$('.popupbox').hide();
        $$(document.getElementById(element[0].getAttribute('aria-describedby'))).show();
        element.tooltip('open');
    };
    Popup.popup = null;
    // Initialized popups by ID of ownership element.
    Popup.popupsInitialized = [];
    return Popup;
}());
exports.Popup = Popup;
;
MouseDown_1.MouseDown.onMouseUpHandlers.push(function () {
    if (Popup.popup) {
        // TODO: I found these two handlers, probably only need one.
        Popup.popup.style.display = 'none';
        jQuery(Popup.popup).hide();
    }
});
