// NO TRANSFORM

import { Click } from './Click';
import { DN } from './DataNose';

class DropDown {
    // Set a DropDownElement's box as open/closed and optionally inform the server.
    // This will position the box above or below the link when opening.
    static setDropdownState(dropDownId: number, linkElementId: number,
        boxElementId: number, openTextId: number, closeTextId: number,
        iconUpId: number, iconDownId: number,
        isOpen: boolean, informServer: boolean
    ) {
        // Show/hide box element.
        const dd = $$(`#_${boxElementId}`);
        dd.toggleClass('dd-box', isOpen);
        dd.toggleClass('dd-box-hidden', !isOpen);
        // Set box as above or below.
        const link = $$(`#_${linkElementId}`);
        if (link.length == 0) {
            console.warn(`Trying to update dropdown link ${linkElementId}, which does not exist`);
            return;
        }
        const bottom = $$(window).scrollTop() + $$(window).height();
        dd.toggleClass('dd-up',
            link.offset().top + link.height() + dd.height() + 20 > bottom);
        // Set text and icon.
        $$(`#_${openTextId}`).toggle(isOpen);
        $$(`#_${closeTextId}`).toggle(!isOpen);
        $$(`#_${iconUpId}`).toggle(isOpen);
        $$(`#_${iconDownId}`).toggle(!isOpen);
        // Inform server of state update.
        if (informServer)
            DN.Event(dropDownId, "ClientUpdate", {'IsOpen': isOpen}, true, null, null)
    }

    // Register a dropdown to be closed on page click,
    // if the click didn't originate from that dropdown.
    static closeOnPageClick(dropDownId: number, linkElementId: number,
        boxElementId: number, openTextId: number, closeTextId: number,
        iconUpId: number, iconDownId: number
    ) {
        Click.addClickHandlerForElem(dropDownId, (event, dd) => {
            const targetElement = event.target;
            if (dd.contains(targetElement))
                return;
            DropDown.setDropdownState(
                dropDownId, linkElementId, boxElementId, openTextId,
                closeTextId, iconUpId, iconDownId, false, true
            );
        });
    } 
};

const Dropdown = DropDown;
export { Dropdown };
