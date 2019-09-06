"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var DataNose_1 = require("./DataNose");
var Location = /** @class */ (function () {
    function Location() {
    }
    // /this function is called from TilePage.cs
    Location.GetName = function () {
        if (window.location.hash.indexOf('?q=') != -1)
            window.location.replace(window.location.href.replace('?q=', '['));
        if ((window.location.hash.lastIndexOf('[') != -1 && window.location.hash.lastIndexOf(']') == -1)
            || window.location.hash.lastIndexOf('[') != -1 && window.location.hash.lastIndexOf(']') != -1
                && window.location.hash.lastIndexOf('[') > window.location.hash.lastIndexOf(']'))
            window.location.replace(window.location + "]");
        if (window.location.href.indexOf('datanose.science.uva.nl') != -1)
            window.location.replace(window.location.href.replace('datanose.science.uva.nl', 'datanose.nl'));
        var name = window.location.hash;
        if (name == '')
            name = '#';
        var brIndex = name.indexOf('(');
        if (brIndex != '-1')
            name = name.substring(0, brIndex);
        return name;
    };
    Location.decodedLocationHash = function () {
        var hash = window.location.hash;
        if (window.location.href.indexOf('/%23') > 0) // Safari
         {
            var url = decodeURI(window.location.href).replace('/%23', '/#');
            var a = document.createElement('a');
            a.href = url;
            hash = a.hash;
        }
        return decodeURI(hash);
    };
    Location.lastHash = '';
    Location.pageName = '';
    return Location;
}());
exports.Location = Location;
;
// redirect if URL is not decoded
// if (window.location.hash != decodeURI(window.location.hash)) {
// window.location.hash = decodeURI(window.location.hash); }
if (window.location.hash != decodeURI(Location.decodedLocationHash())) {
    window.location.hash = decodeURI(Location.decodedLocationHash());
}
Location.lastHash = decodeURI(window.location.hash);
Location.pageName = Location.GetName();
setInterval(function () {
    if (decodeURI(window.location.hash) != Location.lastHash
        && ("#" + window.location.hash) != Location.lastHash) {
        Location.lastHash = decodeURI(window.location.hash);
        Location.pageName = Location.GetName();
        DataNose_1.DN.Event(0, 'Initialize', { h: window.location.hash });
    }
}, 100);
