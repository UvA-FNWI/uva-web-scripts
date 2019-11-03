"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var DataNose_1 = require("./DataNose");
var OrderTable = /** @class */ (function () {
    function OrderTable() {
    }
    OrderTable.cleanTableOrderable = function (id) {
        if (OrderTable.orderableTableEvents[id]) {
            window.removeEventListener('mousemove', OrderTable.orderableTableEvents[id].mousemove);
            window.removeEventListener('mouseup', OrderTable.orderableTableEvents[id].mouseup);
        }
        delete OrderTable.orderableTableEvents[id];
    };
    OrderTable.makeTableOrderable = function (id, lockedRowCount) {
        var drag = {
            dragging: false,
            el: null,
            body: null,
            top: 0,
            start: 0,
            index: 0
        };
        var table = document.getElementById('_' + id);
        if (!table) {
            console.warn("Trying to add ordering to table " + id + ", which does not exist");
            return;
        }
        var movers = table.getElementsByClassName('table-move-row');
        var placeHolder = document.createElement('tr');
        placeHolder.style.display = 'none';
        placeHolder.className = 'table-move-placeholder';
        for (var i = 0; i < movers.length; ++i) {
            var currentMover = movers[i];
            if (i < lockedRowCount) {
                currentMover.style.display = 'none';
                continue;
            }
            // Note(Mussi): capturing i here, assuming this method is called again on order change so index changes don't matter
            currentMover.onmousedown = (function (mover, i) {
                return function (event) {
                    if (event.button !== 0) {
                        return;
                    }
                    var row = mover.parentElement.parentElement;
                    drag.dragging = true;
                    drag.start = event.clientY;
                    drag.top = row.getBoundingClientRect().top;
                    drag.el = document.createElement('div');
                    drag.body = row.parentElement;
                    drag.index = i;
                    drag.el.style.position = 'absolute';
                    drag.el.style.whiteSpace = 'nowrap';
                    drag.el.style.boxSizing = 'border-box';
                    drag.el.style.zIndex = 999;
                    drag.el.style.left = row.parentElement.getBoundingClientRect().left + 'px';
                    drag.el.style.top = drag.top + 'px';
                    drag.el.style.border = '2px solid #a5c5fc';
                    drag.el.style.overflow = 'hidden';
                    drag.el.style.width = row.offsetWidth + 'px';
                    drag.el.style.height = row.offsetHeight + 'px';
                    drag.el.style.background = (i % 2) === 0 ? '#fff' : '#f7f7f7';
                    var rect = row.getBoundingClientRect();
                    placeHolder.style.display = '';
                    placeHolder.style.height = rect.height + 'px';
                    if (!placeHolder.childNodes.length) {
                        var tdCount = row.getElementsByTagName('TD').length;
                        for (var k = 0; k < tdCount; ++k) {
                            placeHolder.appendChild(document.createElement('td'));
                        }
                    }
                    row.insertAdjacentElement('beforebegin', placeHolder);
                    for (var k = 0; k < row.childNodes.length; ++k) {
                        var td = row.childNodes[k];
                        var column = document.createElement('div');
                        column.style.display = 'inline-block';
                        column.style.width = td.clientWidth + 'px';
                        column.style.height = td.clientHeight + 'px';
                        column.style.verticalAlign = 'top';
                        column.style.padding = '3px 7px 3px 6px';
                        column.style.boxSizing = 'border-box';
                        while (td.childNodes.length) {
                            column.appendChild(td.firstChild);
                        }
                        drag.el.appendChild(column);
                    }
                    document.body.appendChild(drag.el);
                    row.parentElement.removeChild(row);
                    event.preventDefault();
                };
            })(movers[i], i);
        }
        function orderPlaceHolder(clientY) {
            var top = drag.top + clientY - drag.start;
            drag.el.style.top = top + window.scrollY + 'px';
            var bodyTop = drag.body.childNodes[lockedRowCount].getBoundingClientRect().top;
            var y = top - 13;
            var adjustment = 1;
            for (var i = lockedRowCount; i < drag.body.childNodes.length; ++i) {
                var row = drag.body.childNodes[i];
                if (row === placeHolder) {
                    adjustment = 0;
                    continue;
                }
                if (row.getBoundingClientRect().bottom >= y) {
                    row.insertAdjacentElement(y < bodyTop ? 'beforebegin' : 'afterend', placeHolder);
                    var result = y < bodyTop ? lockedRowCount : i + adjustment;
                    console.assert(drag.body.childNodes[result] === placeHolder);
                    return result;
                }
            }
            return drag.body.childNodes.length - 1;
        }
        var mousemove = function (event) {
            if (drag.dragging) {
                orderPlaceHolder(event.clientY);
            }
        };
        window.addEventListener('mousemove', mousemove);
        var mouseup = function (event) {
            if (drag.dragging) {
                var index = orderPlaceHolder(event.clientY);
                var row = document.createElement('tr');
                for (var i = 0; i < drag.el.childNodes.length; ++i) {
                    var child = drag.el.childNodes[i];
                    var td = document.createElement('td');
                    while (child.childNodes.length) {
                        td.appendChild(child.firstChild);
                    }
                    row.appendChild(td);
                }
                placeHolder.insertAdjacentElement('afterend', row);
                drag.body.removeChild(placeHolder);
                document.body.removeChild(drag.el);
                if (drag.index != index) {
                    DataNose_1.DN.Event(id, 'OrderChange', { iOld: drag.index, iNew: index }, false);
                }
            }
            drag.dragging = false;
            drag.el = null;
            drag.body = null;
            placeHolder.style.display = 'none';
        };
        window.addEventListener('mouseup', mouseup);
        OrderTable.orderableTableEvents[id] = {
            mousemove: mousemove,
            mouseup: mouseup
        };
    };
    OrderTable.orderableTableEvents = {};
    return OrderTable;
}());
exports.OrderTable = OrderTable;
;
