"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HotReload = /** @class */ (function () {
    function HotReload() {
    }
    // Initialize the WebSocket connection.
    HotReload.Init = function (port) {
        HotReload.WebSocket = new WebSocket('ws://127.0.0.1:' + port);
        HotReload.WebSocket.onmessage = function (event) {
            HotReload.ReloadStyleSheet(event.data);
        };
    };
    // Reload the stylesheet that has the given filename.
    HotReload.ReloadStyleSheet = function (name) {
        var sheets = document.styleSheets;
        for (var i in sheets) {
            var sheet = sheets[i];
            if (sheet instanceof StyleSheet && sheet.href !== null && sheet.href.indexOf(name) !== -1) {
                (sheet.ownerNode).setAttribute("href", sheet.href + "?id=" + new Date().getMilliseconds());
                console.log('Hot reloading ' + name);
                return;
            }
        }
        console.log('Could not hot reload ' + name);
    };
    // A WebSocket connection.
    HotReload.WebSocket = null;
    return HotReload;
}());
exports.HotReload = HotReload;
;
