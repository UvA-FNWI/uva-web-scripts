"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var Click_1 = require("./Click");
var DataNose_1 = require("./DataNose");
var DropDown = /** @class */ (function () {
    function DropDown() {
    }
    // Set a DropDownElement's box as open/closed and optionally inform the server.
    // This will position the box above or below the link when opening.
    DropDown.setDropdownState = function (dropDownId, linkElementId, boxElementId, openTextId, closeTextId, iconUpId, iconDownId, isOpen, informServer) {
        // Show/hide box element.
        var dd = $$("#_" + boxElementId);
        dd.toggleClass('dd-box', isOpen);
        dd.toggleClass('dd-box-hidden', !isOpen);
        // Set box as above or below.
        var link = $$("#_" + linkElementId);
        if (link.length == 0) {
            console.warn("Trying to update dropdown link " + linkElementId + ", which does not exist");
            return;
        }
        var bottom = $$(window).scrollTop() + $$(window).height();
        dd.toggleClass('dd-up', link.offset().top + link.height() + dd.height() + 20 > bottom);
        // Set text and icon.
        $$("#_" + openTextId).toggle(isOpen);
        $$("#_" + closeTextId).toggle(!isOpen);
        $$("#_" + iconUpId).toggle(isOpen);
        $$("#_" + iconDownId).toggle(!isOpen);
        // Inform server of state update.
        if (informServer)
            DataNose_1.DN.Event(dropDownId, "ClientUpdate", { 'IsOpen': isOpen }, true, null, null);
    };
    // Register a dropdown to be closed on page click,
    // if the click didn't originate from that dropdown.
    DropDown.closeOnPageClick = function (dropDownId, linkElementId, boxElementId, openTextId, closeTextId, iconUpId, iconDownId) {
        Click_1.Click.addClickHandlerForElem(dropDownId, function (event, dd) {
            var targetElement = event.target;
            if (dd.contains(targetElement))
                return;
            DropDown.setDropdownState(dropDownId, linkElementId, boxElementId, openTextId, closeTextId, iconUpId, iconDownId, false, true);
        });
    };
    return DropDown;
}());
;
var Dropdown = DropDown;
exports.Dropdown = Dropdown;
