// NO TRANSFORM

class Track {
    static lastX: number = null

    static lastY: number = null

    static trackScroll(par) {
        if (typeof (sessionStorage) === 'undefined') return null;

        if (par.e != 'Initialize') {
            return null;
        }

        jQuery(window).off('unload.trackScroll');
        let pName = window.location.hash;
        pName = pName.toLowerCase().replace(/[^a-zA-Z]+/g, '');

        if (pName == '') sessionStorage.clear();

        const pageScroll = $$(`#scrollPosition${pName}`);
        if (pageScroll.length == 0) {
            return null;
        }

        if (typeof (sessionStorage[pName]) === 'undefined') sessionStorage[pName] = 0;

        jQuery(window).on('unload.trackScroll', (e) => {
            sessionStorage[pName] = jQuery(document).scrollTop();
        });
        return pName;
    }
};

// On mouse move update the position of the mouse.
jQuery(document).mousemove(e => {
    const y =
        e.pageX
        ? (e.pageY)
        : (e.clientY + document.body.scrollTop
           + document.documentElement.scrollTop);
    const x =
        e.pageX
        ? (e.pageX)
        : (e.clientX + document.body.scrollLeft
           + document.documentElement.scrollLeft);
    Track.lastY = y;
    Track.lastX = x;
});

export { Track };
