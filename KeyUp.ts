// NO TRANSFORM

import { Content } from './Content';

jQuery(document).on('keyup', '.searchField', function (e) {
    const searchThreshold = parseInt($$(this).attr('class').split(' ')[1].split('-')[1]);

    if ($$(this).val().length >= searchThreshold) {
        if (Content.content[$$(this).attr('id')] !== $$(this).val()) { // on change
            const $resultsElement = $$(this).parent().find('.resultsElement');
            $resultsElement.children().hide();
            $resultsElement.append('<img src="/Content/loading.gif" class="resultsLoadingImg">');
        }
    }

    Content.content[$$(this).attr('id')] = $$(this).val();
});

const KeyUp = null;
export { KeyUp };