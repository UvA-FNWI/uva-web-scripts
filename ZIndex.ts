// NO TRANSFORM

class ZIndex {
    static GetMaxZIndex(tagName, className) {
        tagName = typeof tagName !== 'undefined' ? tagName : '*';
        let fullClassIdentifier = '';

        if (typeof className !== 'undefined')
            if (typeof className === 'string' && className.length > 0)
                fullClassIdentifier = `.${className}`;

        let index_highest = 0;

        jQuery(tagName + fullClassIdentifier).each(function () {
            // always use a radix when using parseInt
            if (this == null) return;

            const zIndexVal = jQuery(this).css('zIndex');
            const index_current = parseInt(!isNaN(zIndexVal) ? zIndexVal : '0', 10);

            if (index_current > index_highest)
                index_highest = index_current;
        });

        return index_highest;
    }
};

export { ZIndex };
