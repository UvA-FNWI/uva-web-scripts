"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Util_1 = require("./Util");
// Create a copy of a header cell. The children are copied into the new cell, or
// just the inner text if no children are to be found.
function HeaderCellCopy(original, width, height) {
    var headerCell = document.createElement("div");
    headerCell.className = "header no-border-bottom";
    headerCell.style.width = width;
    headerCell.style.height = height;
    if (original.children.length == 0) {
        headerCell.innerText = original.innerText;
        return headerCell;
    }
    for (var i = 0; i < original.children.length; i++) {
        var childCopy = original.children[i].cloneNode(true);
        headerCell.appendChild(childCopy);
    }
    return headerCell;
}
// Create a copy of the header containing given header cells. Hidden by default.
function HeaderCopy(headerCells) {
    var header = document.createElement("div");
    header.className += "uva-web-grid to-remove";
    header.style.display = "none";
    header.style.setProperty("grid-template-columns", "repeat(" + headerCells.length + ", auto)");
    header.style.position = "fixed";
    header.style.top = "0";
    header.style.width = "inherit";
    header.style.overflowX = "hidden";
    for (var i = 0; i < headerCells.length; i++) {
        var style = window.getComputedStyle(headerCells[i]);
        header.appendChild(HeaderCellCopy(headerCells[i], style.getPropertyValue("width"), style.getPropertyValue("height")));
        if (i == 0)
            header.style.left = headerCells[i].getBoundingClientRect().left + "px";
    }
    return header;
}
var Grid = /** @class */ (function () {
    function Grid() {
    }
    // Return a new unique ID for a floating header, and add the ID to
    // Table.FloatingHeaderHidden. Declare as hidden by default.
    Grid.NextFloatingHeaderId = function () {
        var nextId = Grid._NextFloatingHeaderId;
        Grid._NextFloatingHeaderId = nextId + 1;
        var newId = "grid-floating-header" + nextId;
        Grid.FloatingHeaderHidden[newId] = true;
        return newId;
    };
    // Hide all floating headers except the one given.
    Grid.HideFloatingHeaders = function (except) {
        var ids = Array.from(Object.keys(Grid.FloatingHeaderHidden));
        for (var i = 0; i < ids.length; i++) {
            if (ids[i] != except) {
                var floatingHeader = document.getElementById(ids[i]);
                // The floatingHeader might be on a different page.
                if (floatingHeader != null) {
                    floatingHeader.style.display = "none";
                    Grid.FloatingHeaderHidden[ids[i]] = true;
                }
            }
        }
    };
    Grid.SetRowHighlighting = function (sheet, rowLength, table) {
        var className = "table-" + table.id + "-highlighting";
        table.classList.add(className);
        for (var i = 1; i <= rowLength; i++) {
            var rule = "#" + table.id + " > .cell:nth-child(" + rowLength * 2 + "n+" + (i + rowLength) + ") {";
            rule += "background-color: #f9f9f9 }";
            sheet.insertRule(rule);
        }
    };
    Grid.FloatTableHeader = function (dnIds, tableDnId) {
        // Find the table and table's header cells.
        var headerCells = dnIds.map(function (x) { return Util_1.Util.j(x)[0]; });
        var table = Util_1.Util.j(tableDnId)[0];
        // Height of the header.
        var headerHeight = headerCells[0].getBoundingClientRect().height;
        // Set row highlighing.
        var sheet = document.styleSheets[0];
        Grid.SetRowHighlighting(sheet, headerCells.length, table);
        // The floating header is created when needed.
        var floatingHeader = null;
        var makeFloatingHeader = function () {
            floatingHeader = HeaderCopy(headerCells);
            floatingHeader.id = Grid.NextFloatingHeaderId();
            document.body.appendChild(floatingHeader);
        };
        // The floating header is scrolled following the table.
        table.addEventListener("scroll", function () {
            if (floatingHeader !== null)
                floatingHeader.scrollLeft = table.scrollLeft;
        });
        // Hide/show based on vertical page position, and resize when needed.
        var previousWidth = null;
        var updateHeader = function () {
            //var headerRect = headerCells[0].getBoundingClientRect();
            var tableRect = table.getBoundingClientRect();
            // Show if table is scrolled past page top but still in view.
            if (tableRect.top <= 0 && tableRect.bottom - headerHeight > 0) {
                // Make floating header if not yet created.
                if (floatingHeader === null)
                    makeFloatingHeader();
                Grid.HideFloatingHeaders(floatingHeader.id);
                // Show if hidden.
                if (Grid.FloatingHeaderHidden[floatingHeader.id]) {
                    floatingHeader.style.display = "grid";
                    Grid.FloatingHeaderHidden[floatingHeader.id] = false;
                }
            }
            else if (floatingHeader !== null) {
                // Hide if not hidden.
                if (!Grid.FloatingHeaderHidden[floatingHeader.id]) {
                    floatingHeader.style.display = "none";
                    Grid.FloatingHeaderHidden[floatingHeader.id] = true;
                }
            }
            // Adjust floating header cells if page width changed.
            if (floatingHeader !== null && (previousWidth == null || previousWidth != tableRect.width)) {
                for (var i = 0; i < floatingHeader.children.length; i++) {
                    var headerStyle = window.getComputedStyle(headerCells[i]);
                    floatingHeader.children[i].style.height = headerStyle.getPropertyValue("height");
                    floatingHeader.children[i].style.width = headerStyle.getPropertyValue("width");
                }
                floatingHeader.style.maxWidth = tableRect.width + "px";
                previousWidth = tableRect.width;
            }
        };
        // Adjust floating header now, on scroll and on page resize.
        updateHeader();
        window.addEventListener("scroll", updateHeader);
        window.addEventListener("resize", updateHeader);
    };
    // Float a table with given DataNose IDs of header cells and the table.
    Grid._NextFloatingHeaderId = 0;
    // Map of floating header ID to boolean (if/not hidden).
    Grid.FloatingHeaderHidden = {};
    return Grid;
}());
exports.Grid = Grid;
