"use strict";
// NO TRANSFORM
Object.defineProperty(exports, "__esModule", { value: true });
var ZIndex = /** @class */ (function () {
    function ZIndex() {
    }
    ZIndex.GetMaxZIndex = function (tagName, className) {
        tagName = typeof tagName !== 'undefined' ? tagName : '*';
        var fullClassIdentifier = '';
        if (typeof className !== 'undefined')
            if (typeof className === 'string' && className.length > 0)
                fullClassIdentifier = "." + className;
        var index_highest = 0;
        jQuery(tagName + fullClassIdentifier).each(function () {
            // always use a radix when using parseInt
            if (this == null)
                return;
            var zIndexVal = jQuery(this).css('zIndex');
            var index_current = parseInt(!isNaN(zIndexVal) ? zIndexVal : '0', 10);
            if (index_current > index_highest)
                index_highest = index_current;
        });
        return index_highest;
    };
    return ZIndex;
}());
exports.ZIndex = ZIndex;
;
