"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var TableView = /** @class */ (function () {
    function TableView() {
    }
    TableView.UpdateColumn = function (tableid, col, content) {
        var table = document.getElementById("_" + tableid);
        var rows = table.getElementsByTagName('tr');
        for (var i = 0; i < content.length; i++) {
            rows[i + 1].getElementsByTagName('td')[col].innerHTML = content[i];
        }
    };
    return TableView;
}());
exports.TableView = TableView;
;
