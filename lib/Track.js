"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var Track = /** @class */ (function () {
    function Track() {
    }
    Track.trackScroll = function (par) {
        if (typeof (sessionStorage) === 'undefined')
            return null;
        if (par.e != 'Initialize') {
            return null;
        }
        jQuery(window).off('unload.trackScroll');
        var pName = window.location.hash;
        pName = pName.toLowerCase().replace(/[^a-zA-Z]+/g, '');
        if (pName == '')
            sessionStorage.clear();
        var pageScroll = $$("#scrollPosition" + pName);
        if (pageScroll.length == 0) {
            return null;
        }
        if (typeof (sessionStorage[pName]) === 'undefined')
            sessionStorage[pName] = 0;
        jQuery(window).on('unload.trackScroll', function (e) {
            sessionStorage[pName] = jQuery(document).scrollTop();
        });
        return pName;
    };
    Track.lastX = null;
    Track.lastY = null;
    return Track;
}());
exports.Track = Track;
;
// On mouse move update the position of the mouse.
jQuery(document).mousemove(function (e) {
    if (!e) {
        // warn('document mousemove event was null or undefined');
        e = window.event;
    }
    var y = e.pageX
        ? (e.pageY)
        : (e.clientY + document.body.scrollTop
            + document.documentElement.scrollTop);
    var x = e.pageX
        ? (e.pageX)
        : (e.clientX + document.body.scrollLeft
            + document.documentElement.scrollLeft);
    Track.lastY = y;
    Track.lastX = x;
});
