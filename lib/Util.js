"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
console.log('The DataNose team are looking for students who are interested in helping'
    + ' develop and configure features in DataNose, depending on your skills and experience.'
    + ' Hours and schedule to be determined, usually one or two days per week. If you'
    + ' are interested please send me an email outlining your motivation and with CV'
    + ' attached to g.oomens@uva.nl - Gerrit Oomens');
var Util = /** @class */ (function () {
    function Util() {
    }
    // Return a jQuery element by given UvA.Web ID.
    Util.j = function (dnId) {
        return jQuery("#_" + dnId);
    };
    Util.GetDate = function (id) {
        var monthVal = document.getElementById(id + "_month").value;
        var dayVal = document.getElementById(id + "_day").value;
        var yearVal = document.getElementById(id + "_year").value;
        return monthVal + "," + dayVal + "," + yearVal;
    };
    Util.GetSelectedItems = function (id) {
        var el = document.getElementById(id);
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
            else if (!el.hasClass(parts[i]))
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
jQuery.fn.extend({
    equals: function (compareTo) {
        if (!compareTo || this.length != compareTo.length) {
            return false;
        }
        for (var i = 0; i < this.length; ++i) {
            if (this[i] !== compareTo[i]) {
                return false;
            }
        }
        return true;
    }
});
