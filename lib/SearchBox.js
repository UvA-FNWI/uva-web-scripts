"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var SearchBox = /** @class */ (function () {
    function SearchBox(id) {
        var el = jQuery("#" + id);
        el.children("input").keydown(function (e) {
            var res = el.find("div.result");
            var sel = res.filter(".selected");
            var index = res.index(sel);
            var selYear = sel.find(".year.selected");
            var years = selYear.parent().children(".year");
            var yearIndex = years.index(selYear);
            var newYearIndex = -1;
            if (e.keyCode == 40) { // down 
                index++;
            }
            else if (e.keyCode == 38) { // up 
                index--;
            }
            else if (e.keyCode == 37 && selYear && yearIndex > 0) { //left 
                newYearIndex = yearIndex - 1;
            }
            else if (e.keyCode == 39 && selYear && yearIndex + 1 < years.length) { // right 
                newYearIndex = yearIndex + 1;
            }
            else if (e.keyCode == 13) { // enter
                var url = "";
                if (selYear.length > 0) {
                    url = selYear.attr('href');
                }
                else if (sel.length > 0) {
                    url = sel.find("> a").attr('href');
                }
                else if (res.length > 0) {
                    url = res.find("> a").attr('href');
                }
                else {
                    return false;
                }
                window.location.assign(url);
                return false;
            }
            else if (e.keyCode == 27) { // esc 
                el.find(".results").hide();
                return false;
            }
            else {
                return true;
            }
            if (index < 0) {
                index = res.length - 1;
            }
            if (index >= res.length) {
                index = 0;
            }
            res.removeClass("selected");
            jQuery(res.get(index)).addClass("selected").get(0).scrollIntoView(false);
            if (newYearIndex != -1) {
                selYear.removeClass("selected");
                jQuery(years.get(newYearIndex)).addClass("selected");
            }
            return false;
        });
    }
    return SearchBox;
}());
exports.SearchBox = SearchBox;
