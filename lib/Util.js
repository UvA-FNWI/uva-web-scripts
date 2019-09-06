"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var Util = /** @class */ (function () {
    function Util() {
    }
    // Return a jQuery element by given UvA.Web ID.
    Util.j = function (dnId) {
        return jQuery("#_" + dnId);
    };
    Util.GetDate = function (id) {
        return $(id + "_month").value + "," + $(id + "_day").value + "," + $(id + "_year").value;
    };
    Util.GetSelectedItems = function (id) {
        var el = $(id);
        var res = '';
        for (var i = 0; i < el.options.length; i++)
            res += el.options[i].selected ? (i + ",") : '';
        if (res.length > 0)
            res = res.substr(0, res.length - 1);
        return res;
    };
    Util.addClass = function (el, className) {
        if (!className || className === '') {
            return el;
        }
        var parts = className.split(' ');
        for (var i = 0; i < parts.length; ++i) {
            if (el.classList)
                el.classList.add(parts[i]);
            else if (!hasClass(el, parts[i]))
                el.className += " " + parts[i];
        }
        return el;
    };
    Util.alphaOnly = function (event) {
        var key = event.which;
        var c = String.fromCharCode(event.which);
        var isWordcharacter = c.match(/\w/);
        return isWordcharacter || key == 8;
    };
    Util.arraysEqual = function (a, b) {
        if (a.length !== b.length) {
            return false;
        }
        for (var i = 0; i < a.length; ++i) {
            if (a[i] !== b[i]) {
                return false;
            }
        }
        return true;
    };
    return Util;
}());
exports.Util = Util;
;
jQuery.fn.equals = function (compareTo) {
    if (!compareTo || this.length != compareTo.length) {
        return false;
    }
    for (var i = 0; i < this.length; ++i) {
        if (this[i] !== compareTo[i]) {
            return false;
        }
    }
    return true;
};
