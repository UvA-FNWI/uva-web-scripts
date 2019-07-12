import { Click } from './Click';
import { DN } from './DataNose';

// Scope for all RubricDropDown.cs related JavaScript.
class RubricDropDown {
    static active: boolean = false;

    // Example of logging output on client.
    static log(str: string) {
        console.log(str);
    }

    static close(exceptID: number) {
        // The check if a RubricDropDown is active first is
        // simply an optimisation to avoid searching by class
        // on every mouse click.
        if (RubricDropDown.active) {
            jQuery('.rubric-popup:visible').each((_index, el) => {
                if (el.parentElement.id !== ('_' + exceptID))
                    DN.Event(el.parentElement.id.substr(1), 'Close', {}, false);
            });
        }
    }
};

jQuery(document).ready(
    () => Click.onClickHandlers.push(_e => RubricDropDown.close(-1))
);

export { RubricDropDown };
