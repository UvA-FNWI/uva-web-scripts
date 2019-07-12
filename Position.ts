// NO TRANSFORM

import { Popup } from './Popup';
import { Track } from './Track';

class Position {
    static PositionRelative(id1, id2, opt) {
        const $el1 = jQuery(`#${id1}`);
        const $el2 = jQuery(`#${id2}`);

        $el1.show();

        const posEl2 = $el2.offset();

        const widthEl1 = $el1.outerWidth();
        const heightEl1 = $el1.outerHeight();
        const widthEl2 = $el2.outerWidth();
        const heightEl2 = $el2.outerHeight();
        const docH = jQuery(document).height();

        if (docH - posEl2.top < heightEl1 + 20) posEl2.top -= heightEl1;

        $el1.css({
            position: 'absolute',

        }).offset({ top: posEl2.top, left: posEl2.left }).show();
        const currentLocEL1 = $el1.offset();
        const leftBasedOnWidthDiff = (currentLocEL1.left - Math.max(widthEl1, widthEl2)) > 0 ?
            currentLocEL1.left - Math.max(widthEl1, widthEl2) : 0;
        const topBasedOnHeightDiff = (currentLocEL1.top - Math.max(heightEl1, heightEl2)) > 0 ?
            currentLocEL1.top - Math.max(heightEl1, heightEl2) : 0;
        var top, left;
        switch (opt) {
            case 'tl':
                top = topBasedOnHeightDiff;
                left = leftBasedOnWidthDiff;
                break;
            case 'tr':
                top = topBasedOnHeightDiff;
                left = currentLocEL1.left + Math.max(widthEl1, widthEl2);
                break;
            case 'fc':
                top = currentLocEL1.top + heightEl2 / 2;
                left = currentLocEL1.left + widthEl2 / 2;
                break;
            case 'br':
                top = currentLocEL1.top + heightEl2;
                left = currentLocEL1.left + widthEl2;
                break;
            case 'bl':
                top = currentLocEL1.top + heightEl2;
                left = leftBasedOnWidthDiff;
                break;
            case 'bc':
                top = currentLocEL1.top + heightEl2 + 10;
                left = currentLocEL1.left + widthEl2 / 2 - widthEl1 / 2;
                break;
            case 'tc':
                top = currentLocEL1.top - Math.max(heightEl1, heightEl2);
                left = currentLocEL1.left + widthEl2 / 2;
                break;
            case 'al':
                top = currentLocEL1.top - Math.max(heightEl1, heightEl2);
                left = leftBasedOnWidthDiff;
                break;
        }
        $el1.offset({
            top: Math.max(0, top),
            left: left
        });
    }

    static PositionAtMouse(id, offset, setLast, allowMove) {
        const $el = jQuery(`#${id}`);
        const elH = $el.height();
        const docH = jQuery(document).height();
        if (docH - Track.lastY < elH + 20)
            Track.lastY -= elH;
        $el.show();
        $el.offset({ top: Track.lastY, left: Track.lastX });
        if (setLast) Popup.popup = $el[0];
    }
};

export { Position };
