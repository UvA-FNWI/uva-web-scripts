"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var Popup_1 = require("./Popup");
var Track_1 = require("./Track");
var Position = /** @class */ (function () {
    function Position() {
    }
    Position.PositionRelative = function (id1, id2, opt) {
        var $el1 = jQuery("#" + id1);
        var $el2 = jQuery("#" + id2);
        $el1.show();
        var posEl2 = $el2.offset();
        var widthEl1 = $el1.outerWidth();
        var heightEl1 = $el1.outerHeight();
        var widthEl2 = $el2.outerWidth();
        var heightEl2 = $el2.outerHeight();
        var docH = jQuery(document).height();
        if (docH - posEl2.top < heightEl1 + 20)
            posEl2.top -= heightEl1;
        $el1.css({
            position: 'absolute',
        }).offset({ top: posEl2.top, left: posEl2.left }).show();
        var currentLocEL1 = $el1.offset();
        var leftBasedOnWidthDiff = (currentLocEL1.left - Math.max(widthEl1, widthEl2)) > 0 ?
            currentLocEL1.left - Math.max(widthEl1, widthEl2) : 0;
        var topBasedOnHeightDiff = (currentLocEL1.top - Math.max(heightEl1, heightEl2)) > 0 ?
            currentLocEL1.top - Math.max(heightEl1, heightEl2) : 0;
        var top, left;
        switch (opt) {
            case 'tl':
                top = topBasedOnHeightDiff;
                left = leftBasedOnWidthDiff;
                break;
            case 'tr':
                top = topBasedOnHeightDiff;
                left = currentLocEL1.left + Math.max(widthEl1, widthEl2);
                break;
            case 'fc':
                top = currentLocEL1.top + heightEl2 / 2;
                left = currentLocEL1.left + widthEl2 / 2;
                break;
            case 'br':
                top = currentLocEL1.top + heightEl2;
                left = currentLocEL1.left + widthEl2;
                break;
            case 'bl':
                top = currentLocEL1.top + heightEl2;
                left = leftBasedOnWidthDiff;
                break;
            case 'bc':
                top = currentLocEL1.top + heightEl2 + 10;
                left = currentLocEL1.left + widthEl2 / 2 - widthEl1 / 2;
                break;
            case 'tc':
                top = currentLocEL1.top - Math.max(heightEl1, heightEl2);
                left = currentLocEL1.left + widthEl2 / 2;
                break;
            case 'al':
                top = currentLocEL1.top - Math.max(heightEl1, heightEl2);
                left = leftBasedOnWidthDiff;
                break;
        }
        $el1.offset({
            top: Math.max(0, top),
            left: left
        });
    };
    Position.PositionAtMouse = function (id, offset, setLast, allowMove) {
        var $el = jQuery("#" + id);
        var elH = $el.height();
        var docH = jQuery(document).height();
        if (docH - Track_1.Track.lastY < elH + 20)
            Track_1.Track.lastY -= elH;
        $el.show();
        $el.offset({ top: Track_1.Track.lastY, left: Track_1.Track.lastX });
        if (setLast)
            Popup_1.Popup.popup = $el[0];
    };
    return Position;
}());
exports.Position = Position;
;
