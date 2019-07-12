// NO TRANSFORM

class Click {
    // Functions to be called when a mouse click occurs.
    static onClickHandlers: ((e: JQuery.ClickEvent) => void)[] = [];

    // Perform a click on the given element.
    static performClick(elem: Element) {
        if (elem && document.createEvent) { // sanity check
            const event = document.createEvent('MouseEvents');
            event.initEvent('click', true, false);
            elem.dispatchEvent(event);
        } else console.warn('Could not perform click on element ' + elem);
    }

    // Add a function assoicated with an element, to run when the page is clicked.
    // The function will be passed the click event and element of given ID.
    // If the element no longer exists on the page the function will be deleted.
    static addClickHandlerForElem(id: number, f: ((ClickEvent, Element) => void)) {
        const handler = event => {
            // Search for the element.
            const element = document.getElementById('_' + id);
            // Run handler if the element still exists on the page.
            if (element !== null) f(event, element);
            // Else delete this page click handler.
            else Click.onClickHandlers.splice(
                Click.onClickHandlers.indexOf(handler), 1)
        };
        Click.onClickHandlers[id.toString()] = handler;
    }
};

jQuery(window).click(event => {
    Click.onClickHandlers.forEach(f => f(event));
});

export { Click };