// NO TRANSFORM

import { MouseDown } from './MouseDown';

class Popup {
    static popup = null

    // Initialized popups by ID of ownership element.
    static popupsInitialized = []

    static initializePopup(element, content) {
        element = $$(element);
        if (!(element.id in Popup.popupsInitialized)) {
            element.tooltip({
                show: { duration: 5 },
                items: element[0].tagName,
                content: content,
                tooltipClass: 'popupbox',
                open(event, ui) {
                    ui.tooltip.removeClass('ui-tooltip ui-widget ui-corner-all ui-widget-content');
                },
            });
            Popup.popupsInitialized.push(element.id);
        }
        // Hide all popups, except this one, and open it.
        $$('.popupbox').hide();
        $$($(element[0].getAttribute('aria-describedby'))).show();
        element.tooltip('open');
    }
};

MouseDown.onMouseUpHandlers.push(() => {
    if (Popup.popup) {
        // TODO: I found these two handlers, probably only need one.
        Popup.popup.style.display = 'none';
        jQuery(Popup.popup).hide();
    }
});

export { Popup };
